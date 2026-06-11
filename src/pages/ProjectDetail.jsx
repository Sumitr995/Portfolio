import Footer from '@/components/Features/Footer/Footer'
import Qoutes from '@/components/Features/Qoutes/Qoutes'
import ProjectDetails from '@/components/Features/Project/ProjectDetails'
import CertificateDetailHeader from '@/components/Features/Certificate/CertificateDetailHeader'
import projects from '@/Data/projects'
import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = (projects ?? []).find((p) => p?.id === id)

  return (
    <div className='flex w-full flex-col'>
      <div className='w-full min-h-screen mx-auto p-4 md:w-1/2 md:max-w-3xl md:m-auto md:p-6'>
        <CertificateDetailHeader backTo='/projects' label='Project Details' />

        {!project ? (
          <div className='rounded-xl border bg-background p-6'>
            <div className='text-base font-semibold'>Project not found</div>
            <p className='mt-2 text-sm text-muted-foreground'>This project id doesn’t exist in your data.</p>
          </div>
        ) : (
          <ProjectDetails project={project} />
        )}
      </div>

      <Qoutes />
      <Footer />
    </div>
  )
}

export default ProjectDetail
