import { Box, Button, Divider, Heading, Stack, Wrap } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import AnimatedProjectCard from './AnimatedProjectCard';
import { sectionNames } from '../utils/constants';
import { Project } from '../utils/interfaces';
import Link from 'next/link';

interface Props {
    projects: Project[];
    partial: boolean;
}

const ProjectsSection = ({ projects, partial = false }: Props) => {
    const getSlideProps = (index: number) => {
        return {
            offsetX: index % 2 === 0 ? -100 : 100,
            transition: {
                enter: {
                    duration: 0.8,
                },
            },
        };
    };

    return (
        <Stack id={sectionNames.projects} spacing="1em" align="flex-end" justify="right">
            <Box alignSelf="flex-start">
                <Heading>Personal Projects</Heading>
                <Divider
                    alignSelf="flex-start"
                    orientation="horizontal"
                    w={100}
                    ml={10}
                    mb={5}
                    h={1}
                />
            </Box>
            <Wrap spacing="2em" justify="center">
                {projects.map((project, index) => (
                    <AnimatedProjectCard
                        key={`${index}-${project.name}`}
                        project={project}
                        slideFadeProps={getSlideProps(index)}
                    />
                ))}
            </Wrap>
            {partial && (
                <Link href={'/projects'} passHref>
                    <Button w={140} size="lg" variant="ghost" rightIcon={<ArrowRightIcon />}>
                        See More
                    </Button>
                </Link>
            )}
        </Stack>
    );
};

export default ProjectsSection;
