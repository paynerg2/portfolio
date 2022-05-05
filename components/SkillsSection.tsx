import { Heading, Stack, Tooltip } from '@chakra-ui/react';
import SkillsList from './SkillsList';

interface Props {
    id: string;
}

const SkillsSection = ({ id }: Props) => {
    //TODO: Missing: Gatsby, Next, Github, Netlify, Contentful, Styled-Components, Chakra UI
    return (
        <Stack id={id} spacing="2em">
            <Tooltip
                label="Try clicking on an icon to find projects I've used that skill for!"
                placement="top-start"
                bg={'blue.300'}
                color="white"
                openDelay={300}
            >
                <Heading>Skills</Heading>
            </Tooltip>
            <SkillsList />
        </Stack>
    );
};

export default SkillsSection;
