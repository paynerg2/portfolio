import { Box, BoxProps, chakra } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props extends BoxProps {
    children: ReactNode;
    label: string;
}

const Label = chakra('label', {
    baseStyle: {
        position: 'absolute',
        top: -6,
        left: 3, // Add  to padding (2) to match Box padding (5)
        color: 'blue.300',
        background: 'gray.900',
        p: 2,
        zIndex: 100,
        fontSize: 20,
    },
});

const OutlineLabel = ({ children, label, ...props }: Props) => {
    return (
        <Box
            position="relative"
            border="2px"
            borderColor="blue.300"
            borderRadius="md"
            p={5}
            m={20}
            {...props}
        >
            <Label aria-label={label}>{label}</Label>
            {children}
        </Box>
    );
};

export default OutlineLabel;
