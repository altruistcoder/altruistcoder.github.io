import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./utils/motion";

interface CertificationCardProps {
  index: number;
  name: string;
  designation: string;
  company: string;
  image: string | StaticImageData;
  url: string;
  course: string | StaticImageData;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  index,
  name,
  designation,
  company,
  image,
  url,
  course,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-[#1c1b22] p-10 rounded-3xl flex flex-col"
    whileHover={{
      scale: 1.05, // Slightly enlarge the card
      transition: { duration: 0.3 },
    }}
    whileTap={{
      scale: 0.95, // Slightly shrink the card when clicked
      transition: { duration: 0.3 },
    }}
    style={{ height: "100%" }} // Ensure equal height for all cards
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      {/* Image */}
      <motion.img
        src={typeof course === "string" ? course : course.src}
        alt={name}
        className="w-full h-[200px] object-cover"
        whileHover={{ scale: 1.1 }} // Enlarge the image on hover
        transition={{ duration: 0.3 }}
        style={{ cursor: "pointer", borderRadius: "10px" }}
      />

      {/* Certification Details */}
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={typeof image === "string" ? image : image.src}
            alt={`certification_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </a>
      </div>
      <p className="mt-4 text-secondary text-[12px]">
        {designation} by {company}
      </p>
    </div>
  </motion.div>
);

export default CertificationCard;
