import type { NextPage } from 'next';
import Container from '../components/Container';
import Main from '../components/Main';
import DarkModeSwitch from '../components/DarkModeSwitch';
import Header from '../components/Header';
import Title from '../components/Title';
import { Button, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Home: NextPage = () => {
    const ctaVariant = useColorModeValue('solid', 'outline');

    return (
        <Container height="400vh">
            <Header />
            <Main spacing="2.5rem">
                <Title />
                <Stack w={{ base: '100%', md: '50%' }} spacing="2.5rem">
                    <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aperiam
                        repellendus animi corrupti itaque quam perspiciatis quia libero totam.
                        Dolores nobis quia enim, nostrum maiores amet libero dignissimos esse
                        facilis?
                    </Text>
                    <Button
                        rightIcon={<ArrowForwardIcon />}
                        colorScheme="blue"
                        aria-label="Contact Me"
                        variant={ctaVariant}
                    >
                        Contact Me!
                    </Button>
                </Stack>
            </Main>
            <DarkModeSwitch />
        </Container>
    );
};

export default Home;
