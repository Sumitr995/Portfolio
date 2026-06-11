export const toWhatsAppNumber = (phone) => {
  const digits = String(phone ?? '').replace(/\D/g, '')
  return digits || ''
}

export const buildMailto = ({ to, subject, body }) => {
  if (!to) return ''
  const q = new URLSearchParams()
  if (subject) q.set('subject', subject)
  if (body) q.set('body', body)
  const qs = q.toString()
  return `mailto:${to}${qs ? `?${qs}` : ''}`
}
