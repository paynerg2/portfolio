import { Button, Stack } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Head from 'next/head';
import AppContext from '../../utils/appContext';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import SkillsSection from '../../components/SkillsSection/SkillsSection';
import { projects } from '../../utils/sampleData';

const Projects = () => {
    const { selectedTags } = useContext(AppContext);
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        // Filter tags by partial string match (i.e. Redux matches Redux and Redux Toolkit)
        setFilteredProjects(
            projects.filter((project) =>
                selectedTags.every((tag) => project.tags.some((e) => e.indexOf(tag) >= 0))
            )
        );
    }, [selectedTags]);

    return (
        <>
            <Head>
                <title>Rodney Payne | Projects</title>
                <meta
                    name="Projects"
                    content="An interactive list of a select few of my personal projects."
                />
            </Head>
            <Stack flexDir="column" spacing={10} minH="100vh">
                <Link href="/" passHref>
                    <Button
                        w="fit-content"
                        p={2}
                        justifySelf="left"
                        leftIcon={<ArrowLeftIcon />}
                        variant="ghost"
                    >
                        Go Back
                    </Button>
                </Link>
                <SkillsSection id="skills" />
                <ProjectsSection projects={filteredProjects} partial={false} />
            </Stack>
        </>
    );
};

export default Projects;
