import React from 'react'
import { ExternalLink, Eye, Github, Globe } from 'lucide-react'

import PreviewImage from '@/components/other/PreviewImage'
import TechStackBadges from '@/components/Features/Project/TechStackBadges'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { hasLiveLink } from '@/Utils/projectUtils'

const getPreviewImages = (project) => {
	if (!project) return []

	const extra = Array.isArray(project.previews)
		? project.previews
		: Array.isArray(project.images)
			? project.images
			: []

	const first = project.preview ? [project.preview] : []
	const merged = [...first, ...extra].filter(Boolean)
	return merged.filter((src, i) => merged.indexOf(src) === i)
}

const ProjectDetails = ({ project }) => {
	const [isPreviewOpen, setIsPreviewOpen] = React.useState(false)
	const [activeIndex, setActiveIndex] = React.useState(0)

	if (!project) return null

	const title = project?.title || 'Project'
	const images = React.useMemo(() => getPreviewImages(project), [project])
	const activeSrc = images[activeIndex] || project?.preview

	const liveLink = hasLiveLink(project) ? project?.['Live-Link'] : ''
	const githubLink = project?.['Github-Link'] || ''
	const primaryLink = liveLink || githubLink

	const lines = (project?.details?.length ? project.details : project?.description) ?? []

	return (
		<article className='rounded-xl bg-background overflow-hidden'>
			{activeSrc ? (
				<div className='relative'>
					<div className='flex w-full items-center justify-center bg-muted/40 px-3 py-4'>
						{primaryLink ? (
							<a href={primaryLink} target='_blank' rel='noreferrer' className='block w-full'>
								<img
									src={activeSrc}
									alt={title}
									loading='lazy'
									className='mx-auto max-h-[65vh] w-auto max-w-full object-contain'
								/>
							</a>
						) : (
							<img
								src={activeSrc}
								alt={title}
								loading='lazy'
								className='mx-auto max-h-[65vh] w-auto max-w-full object-contain'
							/>
						)}
					</div>

					{images.length > 1 ? (
						<div className='border-t bg-background px-3 py-2'>
							<div className='flex gap-2 overflow-x-auto'>
								{images.map((src, idx) => {
									const isActive = idx === activeIndex
									return (
										<button
											key={src}
											type='button'
											onClick={() => setActiveIndex(idx)}
											className={
												'shrink-0 overflow-hidden rounded-lg border ' +
												(isActive ? 'border-foreground/30' : 'border-border')
											}
											aria-label={`Show image ${idx + 1}`}
										>
											<img
												src={src}
												alt={title}
												loading='lazy'
												className='h-14 w-24 object-contain bg-muted/40'
											/>
										</button>
									)
								})}
							</div>
						</div>
					) : null}

					<div className='absolute top-3 right-3 flex items-center gap-2'>
						<Button
							type='button'
							size='icon-sm'
							variant='secondary'
							className='rounded-full'
							onClick={() => setIsPreviewOpen(true)}
							aria-label='Preview project image'
						>
							<Eye className='size-4' />
						</Button>

						{primaryLink ? (
							<Button asChild size='icon-sm' variant='secondary' className='rounded-full'>
								<a href={primaryLink} target='_blank' rel='noreferrer' aria-label='Open project link'>
									<ExternalLink className='size-4' />
								</a>
							</Button>
						) : null}
					</div>

					<PreviewImage
						open={isPreviewOpen}
						onClose={() => setIsPreviewOpen(false)}
						title={title}
						images={images}
						liveLink={liveLink}
						githubLink={githubLink}
					/>
				</div>
			) : null}

			<div className='p-6'>
				<div className='flex flex-wrap items-center gap-3'>
					<h1 className='text-2xl font-bold text-zinc-600 dark:text-zinc-300'>{title}</h1>

					{liveLink ? (
						<Button asChild size='sm' variant='secondary' className='rounded-full'>
							<a href={liveLink} target='_blank' rel='noreferrer'>
								<Globe className='size-4' /> Live
							</a>
						</Button>
					) : null}

					{githubLink ? (
						<Button asChild size='sm' variant='outline' className='rounded-full'>
							<a href={githubLink} target='_blank' rel='noreferrer'>
								<Github className='size-4' /> Code
							</a>
						</Button>
					) : null}
				</div>

				{project?.duration ? (
					<div className='mt-2 text-xs text-muted-foreground'>{project.duration}</div>
				) : null}

				{(project?.techStack ?? []).length ? (
					<div className='mt-4'>
						<TechStackBadges technologies={project.techStack} />
					</div>
				) : null}

				<Separator className='my-5' />

				<div>
					<div className='text-sm font-semibold'>Details</div>
					<ul className='mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground'>
						{(Array.isArray(lines) ? lines : []).map((line, idx) => (
							<li key={`${project.id || title}-detail-${idx}`}>{line}</li>
						))}
					</ul>
				</div>
			</div>
		</article>
	)
}

export default ProjectDetails
