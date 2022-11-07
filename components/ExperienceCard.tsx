import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DTULogo from '../assets/images/DTULogo.png';
import ReactIcon from '../assets/images/ReactIcon.png';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          x: -100,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={DTULogo}
          alt="DTU_Logo"
        />
      </motion.div>

      <div>
        <h4 className="px-0 md:px-10">Lecture of Physics</h4>
        <p className="font-bold text-2xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="rounded-full"
            src={ReactIcon}
            alt="react-icon"
            width={50}
            height={50}
          />
          <Image
            className="rounded-full"
            src={ReactIcon}
            alt="react-icon"
            width={50}
            height={50}
          />
          <Image
            className="rounded-full"
            src={ReactIcon}
            alt="react-icon"
            width={50}
            height={50}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started Work... -Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
