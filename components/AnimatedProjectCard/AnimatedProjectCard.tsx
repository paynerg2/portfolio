import { SlideFade, SlideFadeProps, WrapItem } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { Project } from '../../utils/interfaces';
import ProjectCard from '../ProjectCard/ProjectCard';

interface Props {
    project: Project;
    slideFadeProps: Partial<SlideFadeProps>;
}

const AnimatedProjectCard = ({ project, slideFadeProps }: Props) => {
    const [ref, inView] = useInView();
    return (
        <SlideFade key={`${project.name}`} in={inView} {...slideFadeProps}>
            <WrapItem ref={ref}>
                <ProjectCard project={project} />
            </WrapItem>
        </SlideFade>
    );
};

export default AnimatedProjectCard;
