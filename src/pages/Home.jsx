import HomeHeading from '@/components/mycompo/HomeCompo/HomeHeading'
import HomeProfile from '@/components/mycompo/HomeCompo/HomeProfile'
import HomeLinks from "../components/mycompo/HomeCompo/HomeLinks";
import HomeButtons from '@/components/mycompo/HomeCompo/HomeButtons'
import React from 'react'
import WorkExperience from '@/components/WorkExperience/WorkExperience';
import ProjectCard from '@/components/mycompo/HomeCompo/ProjectCard';
import data from "@/Data/Data.json"
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"


const Home = () => {

  const navigate = useNavigate();

  const projects = data.projects;
  return (
    <div className='flex flex-col'>
      <section className='w-full flex flex-col items-center gap-10 px-4 pt-24 pb-12 sm:px-6 lg:px-8'>
        <div className='w-full max-w-5xl flex flex-col gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start'>
          <div className='flex flex-col gap-6'>
            <HomeProfile />
            <HomeHeading />
            <HomeButtons />
            <HomeLinks />
          </div>
          <div className='w-full'>
            <WorkExperience />
          </div>
        </div>
      </section>
      <section className='w-full flex justify-center px-4 pb-16 sm:px-6 lg:px-8'>
        <div className='w-full max-w-5xl'>
          <div className='text-sm font-semibold text-zinc-400 dark:text-zinc-500'>Featured</div>
          <div className='text-zinc-700 dark:text-zinc-200 font-bold text-2xl sm:text-3xl'>Projects</div>
          <div className='w-full flex flex-wrap gap-4 justify-center mt-4 sm:justify-start'>
            {projects.map((_, i) => (
              <ProjectCard key={i} data={data.projects[i]} />
            ))}
          </div>
          <div className='w-full flex items-center justify-center sm:justify-start'>
            <Button className={"mt-6"} variant="outline" onClick={() => navigate('/projects')}>Show More</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
