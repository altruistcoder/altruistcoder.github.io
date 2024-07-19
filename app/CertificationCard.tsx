import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal, Box } from "@mui/material";
import { fadeIn } from "./utils/motion"; // Adjust the import path as needed

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
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-[#090325] p-10 rounded-3xl w-full relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative mt-1">
          <img
            src={typeof course === "string" ? course : course.src}
            alt={name}
            className="w-full h-auto object-cover"
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
        {hovered && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black-200"
            onClick={handleOpen}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={typeof course === "string" ? course : course.src}
              alt={name}
              className="max-w-full max-h-full"
            />
          </motion.div>
        )}
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
