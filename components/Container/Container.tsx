import { Flex, useColorMode, FlexProps } from '@chakra-ui/react';

const Container = (props: FlexProps) => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            bg="gray.900"
            color="white"
            {...props}
        />
    );
};

export default Container;
