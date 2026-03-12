"use client";

import { motion } from "framer-motion";
import Section from "../section";
import Wrapper from "../wrapper";
import Image from "next/image";
import { HeroSectionProps } from "@/types/heroTypes";
import {
  containerVariants,
  floatingVariants,
  imageVariants,
  itemVariants,
} from "@/constants/about-hero-data";
import { cn } from "@/lib/utils";
export function HeroSection({
  title,
  subtitle,
  images,
  textClass,
  imagesClass,
}: HeroSectionProps) {
  return (
    <Section>
      <Wrapper>
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column: Text Content */}
          <motion.div
            className={cn("flex flex-col items-center text-center ", textClass)}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            <motion.p
              className="mt-6 max-w-md text-lg text-muted-foreground"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
              variants={itemVariants}
            ></motion.div>
            <motion.div
              className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start"
              variants={itemVariants}
            ></motion.div>
          </motion.div>

          {/* Right Column: Image Collage */}
          <motion.div
            className={cn("relative h-100 w-full sm:h-125", imagesClass)}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Decorative Shapes */}
            <motion.div
              className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-blue-200/50 dark:bg-blue-800/30"
              variants={{ floatingVariants }}
              animate="animate"
            />
            <motion.div
              className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-purple-200/50 dark:bg-purple-800/30"
              variants={{ floatingVariants }}
              animate="animate"
              style={{ transitionDelay: "0.5s" }}
            />
            <motion.div
              className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full bg-green-200/50 dark:bg-green-800/30"
              variants={{ floatingVariants }}
              animate="animate"
              style={{ transitionDelay: "1s" }}
            />

            {/* Images */}
            <motion.div
              className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-2xl bg-muted p-2 shadow-lg sm:h-64 sm:w-64"
              style={{ transformOrigin: "bottom center" }}
              variants={{ imageVariants }}
            >
              <Image
                src={images[0]}
                alt="Student learning"
                className="h-full w-full rounded-xl object-cover"
                fill
              />
            </motion.div>
            <motion.div
              className="absolute right-0 top-1/3 h-40 w-40 rounded-2xl bg-muted p-2 shadow-lg sm:h-56 sm:w-56"
              style={{ transformOrigin: "left center" }}
              variants={{ imageVariants }}
            >
              <Image
                src={images[1]}
                alt="Tutor assisting"
                className="h-full w-full rounded-xl object-cover"
                fill
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 h-32 w-32 rounded-2xl bg-muted p-2 shadow-lg sm:h-48 sm:w-48"
              style={{ transformOrigin: "top right" }}
              variants={{ imageVariants }}
            >
              <Image
                src={images[2]}
                alt="Collaborative discussion"
                className="h-full w-full rounded-xl object-cover"
                fill
              />
            </motion.div>
          </motion.div>
        </div>
      </Wrapper>
    </Section>
  );
}
