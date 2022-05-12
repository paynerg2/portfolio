import { Container, ContainerProps } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
    text: string;
    animationType: number;
    [x: string]: any; //TODO: Replace with appropriate props if possible instead of using this workaround.
}

type AnimationStates = 'before' | 'after';

// Create custom Motion component to allow for Chakra & Motion props to both be passed
const ChakraHeading = motion<ContainerProps>(Container);

export const AnimatedText = ({ text, animationType, ...props }: Props) => {
    const [variant, setVariant] = useState<AnimationStates>('before');
    const [ref, inView] = useInView();

    // Start the animation when scrolled into view
    useEffect(() => {
        if (inView) {
            setVariant('after');
        }
    }, [inView]);

    return (
        <AnimatePresence>
            <ChakraHeading
                ref={ref}
                variants={letterContainerVariants}
                initial={'before'}
                animate={variant}
                key={text}
                aria-label={text}
                m={0}
                p={0}
                {...props}
            >
                {Array.from(text).map((letter, index) => (
                    <motion.span
                        key={`${index}-${letter}`}
                        style={{
                            position: 'relative',
                            display: 'inline-block',
                            width: 'auto',
                        }}
                        variants={letterVariants[animationType % letterVariants.length]}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
                {'\u00A0'}
            </ChakraHeading>
        </AnimatePresence>
    );
};

// =======Animation Properties===========

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

const transition = {
    type: 'spring',
    damping: 12,
    stiffness: 200,
};

const transition2 = {
    type: 'spring',
    damping: 25,
    stiffness: 200,
};

const letterVariants = [
    {
        before: {
            opacity: 0,
            y: 20,
            transition: transition,
        },
        after: {
            opacity: 1,
            y: 0,
            transition: transition,
        },
    },
    {
        before: {
            opacity: 0,
            x: 40,
            transition: transition2,
        },
        after: {
            opacity: 1,
            x: 0,
            transition: transition2,
        },
    },
    {
        before: {
            opacity: 0,
            transition: transition2,
        },
        after: {
            opacity: 1,
            transition: transition2,
        },
    },
];
