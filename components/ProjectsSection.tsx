import ProjectCard, { Project } from './ProjectCard';
import TrackrPreview from '../assets/Trackr-Preview.png';
import MediaLibraryPreview from '../assets/Media-Library-Preview.png';
import { Button, Heading, SlideFade, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { useInView } from 'react-intersection-observer';

const projects: Project[] = [
    {
        name: 'Trackr',
        description:
            'Job hunting assistant for aspiring software developers. Tracks applications, interviews, and more. Automatically generates charts to visualize the process.',
        //@ts-ignore
        image: TrackrPreview,
        githubRepo: 'https://github.com/paynerg2/trackr',
        liveWebsite: 'https://devjob-trackr.com',
        tags: [
            'React',
            'Redux Toolkit',
            'Typescript',
            'Styled Components',
            'Framer Motion',
            'Nivo',
            'Express',
            'MongoDB',
            'Jest',
            'Netlify',
            'Heroku',
        ],
    },
    {
        name: 'Media Library',
        description:
            'Personal media library catalog. Allows users to keep the contents of their collection on hand while on the hunt for new additions.',
        //@ts-ignore
        image: MediaLibraryPreview,
        githubRepo: 'https://github.com/paynerg2/Media-Library',
        liveWebsite: 'https://cave-media-library.herokuapp.com',
        tags: [
            'React',
            'Redux',
            'Typescript',
            'Styled Components',
            'React Spring',
            'Express',
            'MongoDB',
            'Jest',
            'Enzyme',
            'Heroku',
        ],
    },
];

interface Props {
    id: string;
}

const ProjectsSection = ({ id }: Props) => {
    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();

    return (
        <Stack id={id} spacing="1em" align="flex-end" justify="right">
            <Heading alignSelf="flex-start">Personal Projects</Heading>
            <Wrap spacing="2em" justify="center">
                <SlideFade
                    in={inView1}
                    offsetX={-100}
                    transition={{
                        enter: {
                            duration: 0.8,
                        },
                    }}
                    key={`${projects[0].name}`}
                >
                    <WrapItem ref={ref1}>
                        <ProjectCard project={projects[0]} />
                    </WrapItem>
                </SlideFade>
                <SlideFade
                    in={inView2}
                    offsetX={100}
                    transition={{
                        enter: {
                            duration: 0.8,
                        },
                    }}
                    key={`${projects[1].name}`}
                >
                    <WrapItem ref={ref2}>
                        <ProjectCard project={projects[1]} />
                    </WrapItem>
                </SlideFade>
            </Wrap>
            <Button w={140} size="lg" variant="ghost" rightIcon={<ArrowRightIcon />}>
                See More
            </Button>
        </Stack>
    );
};

export default ProjectsSection;
