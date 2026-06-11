
import data from '@/Data/Data.json'

export const QUOTES_API_ENDPOINT =
	data?.api?.quotes || 'https://zenquotes.io/api/random'

const DEFAULT_FALLBACK_QUOTES = [
	{
		quote:
			'You have a right to perform your prescribed duty, but not to the fruits of action.',
		author: 'Bhagavad Gita',
	},
	{
		quote: 'Arise, awake, and stop not till the goal is reached.',
		author: 'Katha Upanishad',
	},
	{
		quote: 'Man is made by his belief. As he believes, so he is.',
		author: 'Bhagavad Gita',
	},
	{
		quote: 'The soul is neither born, and nor does it die.',
		author: 'Bhagavad Gita',
	},
	{
		quote: 'Strength is life, weakness is death.',
		author: 'Swami Vivekananda',
	},
]

function clamp01(value) {
	const num = Number(value)
	if (Number.isNaN(num)) return 0
	return Math.max(0, Math.min(1, num))
}

function normalizeQuoteItem(item) {
	if (!item || typeof item !== 'object') return null
	const quote = String(item.quote ?? '').trim()
	const author = String(item.author ?? '').trim()
	if (!quote) return null
	return { quote, author }
}

function getConfiguredQuotePool() {
	const raw = data?.quotes?.items
	if (!Array.isArray(raw) || raw.length === 0) return []
	return raw.map(normalizeQuoteItem).filter(Boolean)
}

function getConfiguredMaxLength() {
	const val = Number(data?.quotes?.maxLength)
	return Number.isFinite(val) && val > 0 ? val : 120
}

function getConfiguredLocalChance() {
	return clamp01(data?.quotes?.localChance)
}

function getConfiguredStrategy() {
	const strategy = String(data?.quotes?.strategy ?? '').trim().toLowerCase()
	if (strategy === 'alternate' || strategy === 'random') return strategy
	return 'alternate'
}

function getStorage() {
	if (typeof window === 'undefined') return null
	try {
		return window.localStorage
	} catch {
		return null
	}
}

export function pickRandomFallbackQuote(
	fallbackQuotes = DEFAULT_FALLBACK_QUOTES
) {
	if (!Array.isArray(fallbackQuotes) || fallbackQuotes.length === 0) {
		return { quote: '', author: '' }
	}

	const idx = Math.floor(Math.random() * fallbackQuotes.length)
	const picked = fallbackQuotes[idx] ?? {}

	return {
		quote: String(picked.quote ?? ''),
		author: String(picked.author ?? ''),
	}
}

function pickRandomFromPool(pool) {
	if (!Array.isArray(pool) || pool.length === 0) return null
	const idx = Math.floor(Math.random() * pool.length)
	return pool[idx] ?? null
}

function normalizeZenQuotesPayload(payload) {
	// ZenQuotes: [{ q: "...", a: "..." }]
	const first = Array.isArray(payload) ? payload[0] : null
	if (!first || typeof first !== 'object') return null

	const quote = String(first.q ?? '').trim()
	const author = String(first.a ?? '').trim()

	if (!quote) return null
	return { quote, author }
}

function setLastSource(source) {
	const storage = getStorage()
	storage?.setItem('quotes:lastSource', String(source))
}

export async function getRandomQuote({
	endpoint = QUOTES_API_ENDPOINT,
	maxLength = getConfiguredMaxLength(),
	strategy = getConfiguredStrategy(),
	localChance = getConfiguredLocalChance(),
	localQuotes = getConfiguredQuotePool(),
	fallbackQuotes = DEFAULT_FALLBACK_QUOTES,
} = {}) {
	// Decide where the next quote should come from
	let desiredSource = 'api'
	if (strategy === 'alternate') {
		const storage = getStorage()
		const last = storage?.getItem('quotes:lastSource')
		desiredSource = last === 'api' ? 'local' : 'api'

		// If local pool is empty, force API
		if (desiredSource === 'local' && localQuotes.length === 0) desiredSource = 'api'
		// If endpoint missing, force local
		if (desiredSource === 'api' && !endpoint && localQuotes.length > 0) desiredSource = 'local'
	} else {
		// Random mixing (fallback mode)
		if (localQuotes.length > 0 && Math.random() < localChance) desiredSource = 'local'
	}

	if (desiredSource === 'local') {
		const picked = pickRandomFromPool(localQuotes)
		if (picked) {
			setLastSource('local')
			return picked
		}
		// If local pool unexpectedly empty, continue with API
	}

	try {
		const res = await fetch(endpoint)
		if (!res.ok) throw new Error(`Quote request failed: ${res.status}`)

		const payload = await res.json()
		const normalized = normalizeZenQuotesPayload(payload)

		if (normalized?.quote && normalized.quote.length <= maxLength) {
			setLastSource('api')
			return normalized
		}

		const localFallback = pickRandomFromPool(localQuotes)
		if (localFallback) {
			setLastSource('local')
			return localFallback
		}

		setLastSource('fallback')
		return pickRandomFallbackQuote(fallbackQuotes)
	} catch {
		const localFallback = pickRandomFromPool(localQuotes)
		if (localFallback) {
			setLastSource('local')
			return localFallback
		}

		setLastSource('fallback')
		return pickRandomFallbackQuote(fallbackQuotes)
	}
}
