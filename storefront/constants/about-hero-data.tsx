import { Briefcase, LinkIcon, Users } from "lucide-react";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const heroData = {
  title: "About us",
  subtitle:
    "Meet the brand that was born from the experience, knowledge and needs of those who use the tool every day.",

  stats: [
    {
      value: "15,2K",
      label: "Active customers",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      value: "4,5K",
      label: "Suppliers",
      icon: <Briefcase className="h-5 w-5 text-primary" />,
    },
    {
      value: "50+",
      label: "Countries",
      icon: <LinkIcon className="h-5 w-5 text-primary" />,
    },
  ],
  images: [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900?q=80&w=2070&auto=format&fit=crop",
  ],
};
