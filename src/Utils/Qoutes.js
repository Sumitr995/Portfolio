import { DEFAULT_FALLBACK_QUOTES as quotes } from '@/Data/Qoutes'

export function pickRandomFallbackQuote() {
	const categories = Object.keys(quotes).filter((key) => quotes[key]?.length > 0)
	if (categories.length === 0) return { quote: '', author: '' }

	const category = categories[Math.floor(Math.random() * categories.length)]
	const pool = quotes[category]
	const idx = Math.floor(Math.random() * pool.length)
	const picked = pool[idx] ?? {}

	return {
		quote: String(picked.quote ?? ''),
		author: String(picked.author ?? ''),
	}
}
