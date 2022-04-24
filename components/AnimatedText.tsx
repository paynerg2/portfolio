import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
    children: string;
}
export const AnimatedText = ({ children }: Props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    // Start the animation when scrolled into view
    useEffect(() => {
        if (inView) {
            controls.start('after');
        }
    }, [controls, inView]);

    return (
        <AnimatePresence>
            <motion.h2
                ref={ref}
                style={{ height: '30px' }}
                variants={letterContainerVariants}
                initial={'before'}
                animate={controls}
                exit={'before'}
                key={children}
                aria-label={children}
            >
                {children.split('').map((word: string, index: number) => (
                    <div key={`word-${word}-${index}`} style={{ display: 'inline-block' }}>
                        {Array.from(word).map((letter, index) => (
                            <motion.span
                                key={`${index}-${letter}`}
                                style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    width: 'auto',
                                }}
                                variants={letterVariants}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </motion.span>
                        ))}
                        {'\u00A0'}
                    </div>
                ))}
            </motion.h2>
        </AnimatePresence>
    );
};

const letterContainerVariants = {
    before: {
        transition: {
            staggerChildren: 0.015,
        },
    },
    after: {
        transition: {
            staggerChildren: 0.03,
        },
    },
};

const letterVariants = {
    before: {
        opacity: 0,
        y: 20,
        transition: {
            type: 'spring',
            damping: 12,
            siffness: 200,
        },
    },
    after: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 12,
            stiffness: 200,
        },
    },
};
