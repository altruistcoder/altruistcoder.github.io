import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal, Box } from "@mui/material";
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
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-[#232229] p-10 rounded-3xl w-full relative overflow-hidden"
        style={{ minHeight: "350px", maxHeight: "350px" }} // Set a consistent height
      >
        <div className="relative mt-1">
          <img
            src={typeof course === "string" ? course : course.src}
            alt={name}
            className="w-full h-auto object-cover"
            style={{ minHeight: "100%", maxHeight: "100%" }} // Ensure image fills the container
          />
        </div>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} by {company}
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
      </motion.div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            outline: "none",
            zIndex: 1300,
          }}
        >
          <img
            src={typeof course === "string" ? course : course.src}
            alt={name}
            style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default CertificationCard;