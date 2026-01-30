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
    <div className='flex flex-col '>
      <div className=' w-full h-20vh flex items-center justify-center flex-col' >
        <div className='w-1/2'>
          <HomeProfile />
          <HomeHeading />
          <HomeButtons />
          <HomeLinks />
        </div>
        <div className=' w-1/2 '>
          <WorkExperience />
        </div>
        <div className='w-1/2'>
          <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300 mt-5 '>Featured</div>
          <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl'>Projects</div>
          <div className=' w-full flex flex-wrap gap-2 justify-center mt-2'>
            {<div className="w-full flex flex-wrap gap-2 justify-center">
              {projects.map((_, i) => (
                <ProjectCard key={i} data={data.projects[i]} />
              ))}
            </div>}
          </div>
          <div className='w-full flex items-center justify-center'>
            <Button  className={"m-3"} variant="outline" onClick={() => navigate('/projects')}>Show More</Button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home

