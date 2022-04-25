import { Flex, useColorMode, FlexProps } from '@chakra-ui/react';

const Container = (props: FlexProps) => {
    const { colorMode } = useColorMode();

    const backgroundColor = { light: 'gray.50', dark: 'gray.900' };
    const color = { light: 'black', dark: 'white' };

    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            bg={backgroundColor[colorMode]}
            color={color[colorMode]}
            {...props}
        />
    );
};

export default Container;
