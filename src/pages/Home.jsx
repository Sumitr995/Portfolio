import HomeHeading from '@/components/mycompo/Home/HomeHeading'
import HomeProfile from '@/components/mycompo/Home/HomeProfile'
import HomeLinks from "../components/mycompo/Home/HomeLinks";
import HomeButtons from '@/components/mycompo/Home/HomeButtons'
import React from 'react'
import WorkExperience from '@/components/WorkExperience/WorkExperience';
import ProjectCard from '@/components/mycompo/Home/ProjectCard';
import data from "@/Data/Data.json"
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import Footer from '@/components/mycompo/Footer/Footer';


const Home = () => {

  const navigate = useNavigate();

  const projects = data.projects;
  return (
    <div className='flex flex-col '>
      <div className='w-full h-20vh flex flex-col items-center justify-center gap-6 md:gap-0'>
        <div className='w-full md:w-1/2 px-4 md:px-0'>
          <HomeProfile />
          <HomeHeading />
          <HomeButtons />
          <HomeLinks />
        </div>
        <div className='w-full md:w-1/2 px-4 md:px-0'>
          <WorkExperience />
          <div className='w-full flex items-center justify-center'>
            <Button className={"m-3"} variant="outline" onClick={() => navigate('/projects')}>Show More</Button>
          </div>
        </div>
        <div className='w-full md:w-1/2 px-4 md:px-0'>
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
            <Button className={"m-3"} variant="outline" onClick={() => navigate('/projects')}>Show More</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Home

