import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiPython } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiDotnet } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
});

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-center gap-4 pb-3'>
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                variants={iconVariants(2.0)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-600' />
                </motion.div>
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <BiLogoPostgresql className='text-7xl text-blue-700' />
                </motion.div>
                <motion.div 
                variants={iconVariants(2.0)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiPython className='text-7xl' />
                </motion.div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-center gap-4 pb-3'>
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaGitAlt className='text-7xl text-orange-600' />
                </motion.div>
                <motion.div 
                variants={iconVariants(2.0)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TiHtml5 className='text-7xl text-orange-400' />
                </motion.div>
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3Alt className='text-7xl text-blue-500' />
                </motion.div>
                <motion.div 
                variants={iconVariants(2.0)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiJavascriptFill className='text-7xl text-yellow-400' />
                </motion.div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-center gap-4 pb-3'>
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiDotnet className='text-7xl bg-purple-600' />
                </motion.div>
                <motion.div 
                variants={iconVariants(2.0)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiCplusplus className='text-7xl text-blue-800' />
                </motion.div>
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiFastapi className='text-7xl text-green-500' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
