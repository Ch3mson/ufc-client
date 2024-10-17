'use client'
import React from 'react';
import { motion } from 'framer-motion'

interface HeroProps {
  latestDate: string;
}

const Hero: React.FC<HeroProps> = ({ latestDate }) => {
  return (
    <div className='my-16 flex justify-center items-center'>
      <motion.div
        className='flex flex-col items-center gap-4 text-center'
        initial={{
          y: 40,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.5
        }}
      >
        <h1 className='font-title bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-2xl font-bold leading-9 text-transparent sm:text-4xl sm:leading-[3.5rem] dark:from-white dark:via-white/90 dark:to-white/70'>
          UFC fight predictions
        </h1>
        <div className='text-muted-foreground text-sm text-slate-500'>Model updated {latestDate}</div>
      </motion.div>
    </div>
  )
}

export default Hero
