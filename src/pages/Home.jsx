import HomeHeading from '@/components/Features/Home/HomeHeading'
import HomeProfile from '@/components/Features/Home/HomeProfile'
import HomeLinks from "../components/Features/Home/HomeLinks";
import HomeButtons from '@/components/Features/Home/HomeButtons'
import React from 'react'
import WorkExperience from '@/components/WorkExperience/WorkExperience';
import ProjectCard from '@/components/Features/Home/ProjectCard';
import data from "@/Data/Data.json"
import projects from "@/Data/projects";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import Footer from '@/components/Features/Footer/Footer';
import Qoutes from '@/components/Features/Qoutes/Qoutes';
import GitHubGraph from '@/components/other/githubGraph';
import HomeStack from '@/components/Features/Home/HomeStack'
import certificates from '@/Data/certificates'
import HomeCertificateList from '@/components/Features/Home/HomeCertificateList'


const Home = () => {

  const navigate = useNavigate();
  const featuredCertificates = (certificates ?? []).filter((c) => Boolean(c?.featured))
  const homeFeaturedCertificates = featuredCertificates.slice(0, 4)

  return (
    <div className='flex flex-col '>
      <div className='w-full h-20vh flex flex-col items-center justify-center gap-6 md:gap-0'>


        {/* HOME PROFILE */}
        <div className='w-full md:w-1/2 md:max-w-3xl px-4 md:px-0'>
          <HomeProfile />
          <HomeHeading />
          <HomeButtons />
          <HomeLinks />
        </div>



        {/* WORK EXPERIENCE */}
        <div className='w-full md:w-1/2 md:max-w-3xl px-4 md:px-0'>
          <WorkExperience />
          <div className='w-full flex items-center justify-center'>
            <Button className={"m-3"} variant="outline" onClick={() => navigate('/work')}>Show More</Button>
          </div>
        </div>

        {/* GitHub Contributions */}
        <div className='w-full md:w-1/2 md:max-w-3xl px-4 md:px-0'>
          <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300 mt-5'>Featured</div>
          <div className='text-zinc-500 dark:text-zinc-300 font-bold text-xl'>GitHub Contribution</div>
          <GitHubGraph
            username="Sumitr995"
            accessToken={import.meta.env.VITE_GITHUB_TOKEN}
            className="mt-2"
          />
        </div>


        {/* PROJECTS */}
        <div className='w-full md:w-1/2 md:max-w-3xl px-4 md:px-0'>
          <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300 mt-5 '>Featured</div>
          <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl'>Projects</div>
          <div className='w-full mt-2'>
            <div className="w-full flex flex-wrap gap-2 justify-center min-[1400px]:grid min-[1400px]:grid-cols-2 min-[1400px]:gap-4 min-[1400px]:justify-items-center">
              {projects.slice(0, 4).map((project, i) => (
                <ProjectCard key={i} data={project} />
              ))}
            </div>
          </div>

          {/* Project Button */}
          <div className='w-full flex items-center justify-center'>
            <Button className={"m-3"} variant="outline" onClick={() => navigate('/projects')}>Show More</Button>
          </div>
        </div>

        {/* Certifications */}
        <div className='w-full md:w-1/2 md:max-w-3xl px-4 md:px-0'>
          <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300 mt-5'>Featured</div>
          <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl'>Certificates</div>
          <div className='mt-4'>
            <HomeCertificateList certificates={homeFeaturedCertificates} />
          </div>

          {/* Certificate Button */}
          <div className='w-full flex items-center justify-center'>
            <Button className={"m-3"} variant="outline" onClick={() => navigate('/certificates')}>Show More</Button>
          </div>

        </div>

        <div className='w-full md:w-1/2 md:max-w-3xl px-4 md:px-0'>
          <HomeStack />
        </div>

      </div>
      <Qoutes />
      <Footer />
    </div>

  )
}

export default Home

