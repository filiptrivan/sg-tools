"use client";

import { stats } from "@/constants/ourStatsData";
import {
  STAGGER_DELAY,
  StatsGridProps,
  VALUE_DELAY_OFFSET,
} from "@/types/ourStats";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Wrapper from "./wrapper";

export function StatsSection({
  title = "Our Impact in Numbers",
  description = "The numbers behind our story reflect years of experience, dedication to quality, and the trust of professionals who rely on our tools every day.",
}: StatsGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Wrapper>
      <section className="">
        <div className="">
          <motion.div
            className="py-10 sm:py-16 text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-4 font-bold text-3xl text-foreground sm:text-5xl">
              {title}
            </h2>
            <p className="mx-auto max-w-2xl text-foreground/70 text-lg">
              {description}
            </p>
          </motion.div>
          <div
            className="py-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            ref={ref}
          >
            {stats.map((stat, index) => (
              <motion.div
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 text-center transition-all hover:border-brand hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                key={stat.label}
                transition={{ duration: 0.6, delay: index * STAGGER_DELAY }}
              >
                <motion.div
                  animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                  className="mb-2 font-bold text-4xl text-brand lg:text-5xl"
                  initial={{ scale: 0.5 }}
                  transition={{
                    duration: 0.8,
                    delay: index * STAGGER_DELAY + VALUE_DELAY_OFFSET,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.value}
                </motion.div>
                <h3 className="mb-2 font-semibold text-foreground text-lg">
                  {stat.label}
                </h3>
                {stat.description && (
                  <p className="text-foreground/70 text-sm">
                    {stat.description}
                  </p>
                )}
                {/* Hover effect background */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default StatsSection;
