"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { TimelineProps } from "@/types/timeline";
import Wrapper from "./wrapper";

export function Timeline({ items, className }: TimelineProps) {
  if (!items || items.length === 0) {
    return (
      <div
        className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 py-8", className)}
      >
        <p className="text-center text-muted-foreground">
          No timeline items to display
        </p>
      </div>
    );
  }

  return (
    <Wrapper>
      <section
        className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 py-8", className)}
        role="list"
        aria-label="Timeline of events and milestones"
      >
        <div className="relative">
          <div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <motion.div
            className="absolute left-4 sm:left-6 top-0 w-px bg-primary origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{
              scaleY: 1,
              transition: {
                duration: 1.2,
                ease: "easeOut",
                delay: 0.2,
              },
            }}
            viewport={{ once: true }}
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-12 relative">
            {items.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                  viewport={{ once: true, margin: "-30px" }}
                  role="listitem"
                  aria-label={`Timeline item ${index + 1}: ${item.title}`}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="relative shrink-0">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        tabIndex={0}
                        role="img"
                        aria-label={`Avatar for ${item.title}`}
                      >
                        <div className="w-14 h-14 sm:w-20 sm:h-20 bg-muted shadow-lg rounded-full relative z-10 flex justify-center items-center">
                          {item.image}
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      className="flex-1 min-w-0"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card
                        className={cn(
                          "border transition-all duration-300 hover:shadow-md relative",
                          "bg-card/50 backdrop-blur-sm",
                          "group-hover:border-primary/30",
                        )}
                      >
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                            <div className="flex-1 min-w-0">
                              <motion.h3
                                className="text-lg sm:text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300"
                                layoutId={`title-${index}`}
                              >
                                {item.title}
                              </motion.h3>

                              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                                {item.category && (
                                  <span className="font-medium">
                                    {item.category}
                                  </span>
                                )}
                                {item.category && item.date && (
                                  <span
                                    className="w-1 h-1 bg-muted-foreground rounded-full"
                                    aria-hidden="true"
                                  />
                                )}
                                {item.date && (
                                  <time dateTime={item.date}>{item.date}</time>
                                )}
                              </div>
                            </div>
                          </div>

                          <motion.p
                            className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {item.description}
                          </motion.p>

                          <div
                            className="h-1 bg-muted rounded-full overflow-hidden"
                            role="progressbar"
                            aria-valuenow={
                              item.status === "completed"
                                ? 100
                                : item.status === "current"
                                  ? 65
                                  : 25
                            }
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`Progress for ${item.title}`}
                          >
                            <motion.div
                              className={cn("h-full rounded-full")}
                              initial={{ width: 0 }}
                              animate={{
                                width:
                                  item.status === "completed"
                                    ? "100%"
                                    : item.status === "current"
                                      ? "65%"
                                      : "25%",
                              }}
                              transition={{
                                duration: 1.2,
                                delay: index * 0.2 + 0.8,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="absolute left-4 sm:left-6 -bottom-6 transform -translate-x-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.4,
                delay: items.length * 0.1 + 0.3,
                type: "spring",
                stiffness: 400,
              },
            }}
            viewport={{ once: true }}
            aria-hidden="true"
          >
            <div className="w-3 h-3 bg-primary rounded-full shadow-sm" />
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
}
