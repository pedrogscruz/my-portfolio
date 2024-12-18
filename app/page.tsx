"use client"

import { Tooltip } from "@nextui-org/react";
import { ParticlesStormBackground, ParticlesPolygon } from "particles-storm";
import { useMediaQuery } from "usehooks-ts";
import AppLayoutWrapper from "@/components/app-layout-wrapper";
import {
  AWS,
  GoogleCloud,
  Vercel,
  Docker,
  Python,
  NodeJs,
  GraphQL,
  MongoDB,
  PostgreSQL,
  Prisma,
  React,
  TailwindCSS,
  NextJs,
  TanStackQuery
} from "@/icons";

// const ParticlesStormBackground = dynamic(() => import('particles-storm').then((mod) => mod.ParticlesStormBackground), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  const isMobileView = useMediaQuery("(max-width : 640px)")
  const speed = isMobileView ? 12 : 16
  const rotationSpeed = isMobileView ? 4 : 6
  const polygonSize = isMobileView ? [40, 45] : [60, 75]

  return (
    <AppLayoutWrapper>
      <ParticlesStormBackground speed={speed} />
      <div>
        <span className="float-left mt-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-[700]">Pedro Cruz</h1>
          <h2 className="text-1xl text-default-400">Full-Stack Developer</h2>
        </span>
        <span className="relative float-right mt-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[700] text-default-300 ml-8">DevOps</h2>
          <ParticlesPolygon
            className="!absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2"
            size={polygonSize[0]}
            rotationSpeed={rotationSpeed}
            vertices={[
              { key: 'aws', element: <Tooltip content='AWS'><AWS width={30} height={30} /></Tooltip> },
              { key: 'google-cloud', element: <Tooltip content='Google Cloud'><GoogleCloud width={25} height={25} /></Tooltip> },
              { key: 'docker', element: <Tooltip content='Docker'><Docker width={25} height={25} /></Tooltip> },
              { key: 'vercel', element: <Tooltip content='Vercel'><Vercel width={20} height={20} /></Tooltip> },
            ]}
            onClickCircle={key => console.log(key)}
          />
        </span>
      </div>
      <div className="my-4">
        <span className="float-left">
          <h2 className="text-2xl text-default-500 max-w-screen-sm lg:ml-32 xl:ml-36">Hi! Welcome to my portfolio.<br/>Please, feel free to inspect my job experiences and personal projects.</h2>
        </span>
        <span className="relative float-right mt-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[700] text-default-300">Backend</h2>
          <ParticlesPolygon
            className="!absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2"
            size={polygonSize[1]}
            rotationSpeed={rotationSpeed}
            vertices={[
              { key: 'python', element: <Tooltip content='Python'><Python width={25} height={25} /></Tooltip> },
              { key: 'node-js', element: <Tooltip content='Node.js'><NodeJs width={25} height={25} /></Tooltip> },
              { key: 'graphql', element: <Tooltip content='GraphQL'><GraphQL width={25} height={25} /></Tooltip> },
              { key: 'mongo-db', element: <Tooltip content='MongoDB'><MongoDB width={25} height={25} /></Tooltip> },
              { key: 'postgresql', element: <Tooltip content='PostgreSQL'><PostgreSQL width={25} height={25} /></Tooltip> },
              { key: 'prisma', element: <Tooltip content='Prisma'><Prisma width={25} height={25} /></Tooltip> },
            ]}
            onClickCircle={key => console.log(key)}
          />
        </span>
      </div>
      <div className="mb-4">
        <span className="relative float-left pr-8 sm:pr-0">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[700] text-default-300">Frontend</h2>
          <ParticlesPolygon
            className="!absolute right-0 top-0 translate-x-1/2 -translate-y-1/2"
            size={polygonSize[1]}
            rotationSpeed={rotationSpeed}
            vertices={[
              { key: 'react', element: <Tooltip content='React'><React width={25} height={25} /></Tooltip> },
              { key: 'next-js', element: <Tooltip content='Next.js'><NextJs width={25} height={25} /></Tooltip> },
              { key: 'react-native', element: <Tooltip content='React Native'><React fill="#007acc" width={25} height={25} /></Tooltip> },
              { key: 'tailwind-css', element: <Tooltip content='Tailwind CSS'><TailwindCSS width={25} height={25} /></Tooltip> },
              { key: 'tanstack-query', element: <Tooltip content='TanStack Query'><TanStackQuery width={25} height={25} /></Tooltip> },
            ]}
            onClickCircle={key => console.log(key)}
          />
        </span>
      </div>
    </AppLayoutWrapper>
  );
}
