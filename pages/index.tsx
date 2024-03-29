import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Box from '../components/Box'

const inter = Inter({ subsets: ['latin'] })

interface IndexProps {
  toggleDarkMode: () => void;
}

export default function Home({ toggleDarkMode }: IndexProps) {
  const [dpr, setDpr] = useState(1)
  useEffect(() => { 
    setDpr(window.devicePixelRatio)
  }, [])
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>Louis</title>
      </Head>
      
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <p className="flex items-center">Toggle Between Light and Darkness: &nbsp;</p>
          <div className="relative w-10 h-10">
            <Canvas
              dpr={dpr}
              // onCreated={({ gl }) => { gl.physicallyCorrectLights = true }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight intensity={1} position={[5, 5, 5]} />
              <pointLight position={[10, 10, 10]} />
              <Box scale={[1.8, 1.8, 1.8]} position={[0, 0, 0]} onClick={toggleDarkMode} />
            </Canvas>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/cashewpillar"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <p className="text-lg font-bold">Louis</p>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mt-12 lg:mt-0 mb-16 lg:mb-0 grid text-center lg:grid-cols-4 lg:text-left">
        <Link
          href="/activity"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            My Activity{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            See what I&apos;m doing here! (three.js)
          </p>
        </Link>

        <Link
          href="https://mastodon.social/@cashewpillar"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="me noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Mastodon{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            See more of me
          </p>
        </Link>

        <Link
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Under 🚧{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Get out!
          </p>
        </Link>

        <Link
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Under 🚧{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Heya!
          </p>
        </Link>
      </div>
    </main>
  )
}
