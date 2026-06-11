import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { buildMailto } from '@/Utils/contactUtils'

const SUBJECT_PRESETS = [
  { label: 'Full Time / Part Time role', value: 'Full Time / Part Time role' },
  { label: 'Internship Opportunity', value: 'Internship Opportunity' },
  { label: 'Project Collaboration', value: 'Project Collaboration' },
  { label: 'Speaking / Community', value: 'Speaking / Community' },
  { label: 'Other', value: 'Other' },
]

const ContactForm = ({ email }) => {
  const [subjectPreset, setSubjectPreset] = React.useState(SUBJECT_PRESETS[0]?.value ?? 'Full Time / Part Time role')
  const [name, setName] = React.useState('')
  const [fromEmail, setFromEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const mailtoHref = React.useMemo(() => {
    const bodyLines = [
      message?.trim() ? message.trim() : null,
      '',
      '---',
      name?.trim() ? `Name: ${name.trim()}` : null,
      fromEmail?.trim() ? `Email: ${fromEmail.trim()}` : null,
      '',
      'Helpful details:',
      '- Role / project type',
      '- Scope',
      '- Timeline',
      '- Budget (if applicable)',
    ].filter((l) => l !== null)

    return buildMailto({
      to: email,
      subject: subjectPreset ? `[${subjectPreset}]` : 'Contact',
      body: bodyLines.join('\n'),
    })
  }, [email, subjectPreset, name, fromEmail, message])

  return (
    <div className='flex flex-col gap-3'>
      <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>Message</div>

      <form
        className='flex flex-col gap-3'
        onSubmit={(e) => {
          e.preventDefault()
          if (!mailtoHref) return
          window.location.href = mailtoHref
        }}
      >
        <div className='flex flex-col gap-1'>
          <Label htmlFor='contact-subject' className='text-xs text-zinc-500 dark:text-zinc-400'>
            Subject
          </Label>
          <Select id='contact-subject' value={subjectPreset} onChange={(e) => setSubjectPreset(e.target.value)}>
            {SUBJECT_PRESETS.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </Select>
        </div>

        <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
          <div className='flex flex-col gap-1'>
            <Label htmlFor='contact-name' className='text-xs text-zinc-500 dark:text-zinc-400'>
              Your name (optional)
            </Label>
            <Input
              id='contact-name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Your name'
              autoComplete='name'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <Label htmlFor='contact-email' className='text-xs text-zinc-500 dark:text-zinc-400'>
              Your email (optional)
            </Label>
            <Input
              id='contact-email'
              type='email'
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              placeholder='you@example.com'
              autoComplete='email'
            />
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <Label htmlFor='contact-message' className='text-xs text-zinc-500 dark:text-zinc-400'>
            Message
          </Label>
          <Textarea
            id='contact-message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Tell me about your role/project, scope, timeline, and budget (if applicable).'
            className='resize-y'
          />
        </div>

        <div className='flex flex-row flex-wrap items-center gap-3'>
          <Button type='submit' variant='default' disabled={!email}>
            Open Email
          </Button>
          {mailtoHref ? (
            <a href={mailtoHref} className='text-xs text-zinc-500 underline underline-offset-4 dark:text-zinc-400'>
              Or open your email client
            </a>
          ) : null}
        </div>
      </form>
    </div>
  )
}

export default ContactForm
