import type { NextPage } from 'next';
import { Button, Stack, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Title from '../components/Title/Title';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ContactSection from '../components/ContactSection/ContactSection';
import { scrollTo } from '../utils/scrollTo';
import { sectionNames } from '../utils/constants';
import { projects } from '../utils/sampleData';

const Home: NextPage = () => {
    return (
        <Stack spacing={24}>
            <Stack spacing={10}>
                <Title />
                <Stack w={{ base: '100%', md: '50%' }} spacing="2.5rem">
                    <Text fontSize="lg">
                        Welcome to my portfolio page! I&apos;m an enthusiastic maker and problem
                        solver, with an eye for detail, and a passion for software development. If
                        that sounds like someone you would like on your team,
                    </Text>
                    <Button
                        onClick={() => scrollTo({ id: sectionNames.contact })}
                        rightIcon={<ArrowForwardIcon />}
                        colorScheme="blue"
                        aria-label="Contact Me"
                        variant="outline"
                    >
                        Contact Me!
                    </Button>
                </Stack>
            </Stack>
            <ProjectsSection projects={projects.slice(0, 2)} partial />
            <AboutSection />
            <ContactSection />
        </Stack>
    );
};

export default Home;
