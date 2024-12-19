"use client"

import dynamic from "next/dynamic";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "motion/react";
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

const ParticlesStormBackground = dynamic(() => import('particles-storm').then((mod) => mod.ParticlesStormBackground), { ssr: false });

const ParticlesPolygon = dynamic(() => import('particles-storm').then((mod) => mod.ParticlesPolygon), { ssr: false });

export default function Home() {
  const isMobileView = useMediaQuery("(max-width : 640px)")
  const speed = isMobileView ? 4 : 8
  const rotationSpeed = 1.6
  const numParticles = isMobileView ? 60 : 120
  const lineDistance = isMobileView ? 50 : 100
  const polygonSize = isMobileView ? [40, 45] : [60, 75]

  return (
    <AppLayoutWrapper>
      <ParticlesStormBackground numParticles={numParticles} lineDistance={lineDistance} speed={speed} drift={0.06} />
      <div className="z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex gap-4 mt-4"
        >
          <span>
            <Image className="rounded-full overflow-hidden mt-2" src='/profile-image.jpeg' alt="profile image" width={80} height={80} />
          </span>
          <span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[700]">Pedro Cruz</h1>
          <h2 className="text-1xl text-default-400">Full-Stack Developer</h2>
          </span>
        </motion.span>
        <span className="relative float-right mt-6">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[700] text-default-300 ml-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, delay: 2 }}
          >
            DevOps
          </motion.h2>
          <ParticlesPolygon
            className="!absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2"
            size={polygonSize[0]}
            rotationSpeed={rotationSpeed}
            vertices={[
              {
                key: 'aws',
                element: (
                  <Tooltip content='AWS'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <AWS width={30} height={30} />
                    </motion.span>
                  </Tooltip>
                )
              },
              {
                key: 'google-cloud',
                element: (
                  <Tooltip content='Google Cloud'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <GoogleCloud width={25} height={25} />
                    </motion.span>
                  </Tooltip>
                ) },
              {
                key: 'docker',
                element: (
                  <Tooltip content='Docker'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <Docker width={25} height={25} />
                    </motion.span>
                  </Tooltip>
                ) },
              {
                key: 'vercel',
                element: (
                  <Tooltip content='Vercel'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <Vercel width={20} height={20} />
                    </motion.span>
                  </Tooltip>
                ) },
            ]}
            onClickCircle={key => console.log(key)}
          />
        </span>
      </div>
      <div className="my-4 z-10">
        <motion.span
          className="float-left"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-1xl sm:text-2xl text-default-500 max-w-screen-md lg:ml-32 xl:ml-36">
          &quot;The more I learn, the more I realize how much I don&apos;t know.&quot;<br/>
          – Albert Einstein
          </h2>
        </motion.span>
        <span className="relative float-right mt-8 pl-16 sm:pl-0">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[700] text-default-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, delay: 2 }}
          >
            Backend
          </motion.h2>
          <ParticlesPolygon
            className="!absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2"
            size={polygonSize[1]}
            rotationSpeed={rotationSpeed * -1}
            vertices={[
              {
                key: 'python',
                element: (
                  <Tooltip content='Python'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <Python width={25} height={25} />
                    </motion.span>
                  </Tooltip>
                )
              },
              {
                key: 'node-js',
                element: (
                  <Tooltip content='Node.js'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <NodeJs width={25} height={25} />
                    </motion.span>
                  </Tooltip>
                )
              },
              {
                key: 'graphql',
                element: (
                  <Tooltip content='GraphQL'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <GraphQL width={25} height={25} />
                    </motion.span>
                  </Tooltip>
                )
              },
              {
                key: 'mongo-db',
                element: (
                  <Tooltip content='MongoDB'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <MongoDB width={25} height={25} />
                    </motion.span>
                  </Tooltip>
                )
              },
              {
                key: 'postgresql',
                element: (
                  <Tooltip content='PostgreSQL'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <PostgreSQL width={25} height={25} />
                    </motion.span>
                  </Tooltip>
                )
              },
              {
                key: 'prisma',
                element: (
                  <Tooltip content='Prisma'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <Prisma width={25} height={25} />
                    </motion.span>
                  </Tooltip>
                )
              },
            ]}
            onClickCircle={key => console.log(key)}
          />
        </span>
      </div>
      <div className="mb-4">
        <span className="relative float-left pr-16 sm:pr-0">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[700] text-default-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, delay: 2 }}
          >
            Frontend
          </motion.h2>
          <ParticlesPolygon
            className="!absolute right-0 top-0 translate-x-1/2 -translate-y-1/2"
            size={polygonSize[1]}
            rotationSpeed={rotationSpeed}
            vertices={[
              {
                key: 'react',
                element: (
                  <Tooltip content='React'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <React width={25} height={25} />
                    </motion.span>
                  </Tooltip>
                )
              },
              {
                key: 'next-js',
                element: (
                  <Tooltip content='Next.js'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <NextJs width={25} height={25} />
                    </motion.span>
                  </Tooltip>
                )
              },
              {
                key: 'react-native',
                element: (
                  <Tooltip content='React Native'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <React fill="#007acc" width={25} height={25} />
                    </motion.span>
                  </Tooltip>
                )
              },
              {
                key: 'tailwind-css',
                element: (
                  <Tooltip content='Tailwind CSS'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <TailwindCSS width={25} height={25} />
                    </motion.span>
                  </Tooltip>
                )
              },
              {
                key: 'tanstack-query',
                element: (
                  <Tooltip content='TanStack Query'>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay: 4 }}
                    >
                      <TanStackQuery width={25} height={25} />
                    </motion.span>
                  </Tooltip>
                )
              },
            ]}
            onClickCircle={key => console.log(key)}
          />
        </span>
      </div>
    </AppLayoutWrapper>
  );
}
