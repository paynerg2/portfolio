import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AnimatedText } from '../AnimatedText/AnimatedText';

const descriptors = ['Web Developer', 'Math Enthusiast', 'Science Fiction Fan'];

const Title = () => {
    const [index, setIndex] = useState(0);
    const highlightColor = useColorModeValue('blue.500', 'blue.200');

    useEffect(() => {
        const modulus = descriptors.length;
        setTimeout(() => {
            setIndex((index + 1) % modulus);
        }, 6000);
    });

    return (
        <Box>
            <Box h="1.5em">
                <AnimatedText
                    animationType={index}
                    color={highlightColor}
                    fontSize="xl"
                    fontWeight="semibold"
                    text={descriptors[index]}
                />
            </Box>
            <Heading size="4xl" m={0}>
                Rodney Payne
            </Heading>
        </Box>
    );
};

export default Title;
