import { motion } from 'framer-motion';

const transition = (OgComponent) => {
    return () => {
        return (
            <>
                <OgComponent />
                <motion.div
                    className='fixed top-0 left-0 w-[100%] h-screen bg-black origin-bottom'
                    initial={{ scaleY: 1 }} // Start visible
                    animate={{ scaleY: 0 }} // Scale down
                    exit={{ scaleY: 1 }} // Scale back up when exiting
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />

                <motion.div
                    className='fixed top-0 left-0 w-[100%] h-screen bg-black origin-top'
                    initial={{ scaleY: 1 }} // Start visible
                    animate={{ scaleY: 0 }} // Scale down
                    exit={{ scaleY: 1 }} // Scale back up when exiting
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
            </>
        );
    }
}

export default transition;
