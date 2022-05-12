import { Heading, Stack } from '@chakra-ui/react';
import OutlineLabel from '../OutlineLabel/OutlineLabel';
import SkillsList from '../SkillsList/SkillsList';

interface Props {
    id: string;
}

const SkillsSection = ({ id }: Props) => {
    return (
        <Stack id={id} spacing="2em">
            <Heading>Skills</Heading>
            <OutlineLabel label="Select skills to see which projects were made with them" pt={6}>
                <SkillsList />
            </OutlineLabel>
        </Stack>
    );
};

export default SkillsSection;
