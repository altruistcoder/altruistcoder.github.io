import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";

const fadeIn = (
  direction: string = "up",
  type: string = "spring",
  delay: number = 0,
  duration: number = 0.75
) => {
  return {
    initial: {
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
      },
    },
  };
};

const hoverVariant = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
};

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string | StaticImageData;
  source_code_link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const handleGitHubClick = () => {
    if (typeof window !== "undefined") {
      window.open(source_code_link, "_blank");
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex-1"
    >
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="p-5 rounded-2xl w-full h-full relative"
        style={{
          backgroundColor: "#232229",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={typeof image === "string" ? image : image.src}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute top-0 right-0 m-3">
            <motion.div
              variants={hoverVariant}
              whileHover="hover"
              onClick={handleGitHubClick}
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
              }}
            >
              <GitHubIcon style={{ fontSize: 20, color: "white" }} />
            </motion.div>
          </div>
        </div>

        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              style={{ backgroundColor: `${tag.color}` }}
              className="text-[14px] box-border h-8 m-1 p-4 flex justify-center items-center w-22 rounded-xl hover:bg-blue-700"
            >
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
