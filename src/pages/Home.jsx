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
        <div className='w-full lg:w-1/2 flex flex-col gap-8 lg:gap-10'>
          <HomeProfile />
          <HomeHeading />
          <HomeButtons />
          <HomeLinks />
        </div>
        <div className='w-full lg:w-1/2'>
          <WorkExperience />
        </div>
      </section>
      <section className='w-full flex justify-center px-4 pb-16 sm:px-6 lg:px-8'>
        <div className='w-full lg:w-1/2'>
          <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300 mt-2'>Featured</div>
          <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl sm:text-3xl'>Projects</div>
          <div className='w-full flex flex-wrap gap-3 sm:gap-4 justify-center mt-4'>
            {projects.map((_, i) => (
              <ProjectCard key={i} data={data.projects[i]} />
            ))}
          </div>
          <div className='w-full flex items-center justify-center'>
            <Button className={"mt-6"} variant="outline" onClick={() => navigate('/projects')}>Show More</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
