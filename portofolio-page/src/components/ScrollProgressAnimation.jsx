import React from "react";
import { useScroll, motion } from "framer-motion";

const ScrollProgressAnimation = () => {
    const {scrollYProgress} = useScroll();

    return (
        <>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    transformOrigin: "left",
                    backgroundColor: "#0284c7",
                    position: "sticky",
                    top: 0,
                    width: "100%",
                    height: "5px"
                }}
            />
        </>
    )
}

export default ScrollProgressAnimation;