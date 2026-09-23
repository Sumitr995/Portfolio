let configCache = null
let audioBuffer = null
let audioContext = null
let soundUrl = "/sounds/sound.ogg"
let isFetching = false

async function loadConfig() {
  if (configCache) return configCache
  if (isFetching) {
    // wait for fetch
    while (isFetching) await new Promise((r) => setTimeout(r, 50))
    return configCache
  }
  isFetching = true
  try {
    const res = await fetch("/sounds/config.json")
    if (!res.ok) throw new Error("config fetch failed")
    const json = await res.json()
    configCache = json
    if (json.sound) {
      soundUrl = `/sounds/${json.sound}`
    }
    return json
  } catch (_e) {
    configCache = { defines: { "1": [2894, 226] }, sound: "sound.ogg" }
    return configCache
  } finally {
    isFetching = false
  }
}

async function ensureAudioContext() {
  if (audioContext) return audioContext
  try {
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return null
    audioContext = new AC()
    return audioContext
  } catch (_e) {
    return null
  }
}

async function ensureAudioBuffer() {
  if (audioBuffer) return audioBuffer
  const ctx = await ensureAudioContext()
  if (!ctx) return null
  try {
    const res = await fetch(soundUrl)
    const arr = await res.arrayBuffer()
    audioBuffer = await ctx.decodeAudioData(arr)
    return audioBuffer
  } catch (_e) {
    return null
  }
}

function pickRandomDefine(defines) {
  const keys = Object.keys(defines)
  if (keys.length === 0) return null
  const k = keys[Math.floor(Math.random() * keys.length)]
  const v = defines[k]
  if (!Array.isArray(v) || v.length < 2) return null
  return v
}

export async function playClickSound() {
  try {
    const config = await loadConfig()
    const defines = config.defines || {}
    const slice = pickRandomDefine(defines)
    if (!slice) return
    const [startMs, durationMs] = slice
    const startSec = startMs / 1000
    const durSec = Math.max(0.08, durationMs / 1000)

    // Try Web Audio for precise slice and overlapping playback
    const ctx = await ensureAudioContext()
    const buffer = await ensureAudioBuffer()

    if (ctx && buffer) {
      if (ctx.state === "suspended") await ctx.resume()
      const source = ctx.createBufferSource()
      source.buffer = buffer
      const gain = ctx.createGain()
      gain.gain.value = 0.425
      source.connect(gain).connect(ctx.destination)
      source.start(0, startSec, durSec + 0.02)
      // cleanup after
      setTimeout(() => {
        try {
          source.stop()
          source.disconnect()
          gain.disconnect()
        } catch (_e) {}
      }, (durSec + 0.1) * 1000)
      return
    }

    // Fallback: HTMLAudio element per play (allows overlap)
    const audio = new Audio(soundUrl)
    audio.preload = "auto"
    audio.volume = 0.35
    // need metadata before seeking; if not loaded, wait for canplay
    const playSlice = async () => {
      try {
        audio.currentTime = startSec
        await audio.play()
        setTimeout(() => {
          try {
            audio.pause()
            audio.src = ""
          } catch (_e) {}
        }, durationMs + 60)
      } catch (_e) {}
    }

    if (audio.readyState >= 1) {
      playSlice()
    } else {
      audio.addEventListener("loadedmetadata", playSlice, { once: true })
      // trigger load
      audio.load()
      // fallback timeout if metadata never fires
      setTimeout(playSlice, 300)
    }
  } catch (_e) {}
}

export function initClickSound() {
  // warm up config and audio buffer on first user interaction
  loadConfig()
  // don't eagerly fetch audio buffer until first click to respect autoplay policies
}

// For Button direct usage
export function getPlayClickSound() {
  return playClickSound
}
