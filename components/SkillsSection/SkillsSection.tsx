import { Heading, Stack } from '@chakra-ui/react';
import OutlineLabel from '../OutlineLabel/OutlineLabel';
import SkillsList from '../SkillsList/SkillsList';

interface Props {
    id: string;
}

const SkillsSection = ({ id }: Props) => {
    return (
        <Stack id={id} spacing="2em">
            <Heading alignSelf={{ base: 'center', md: 'flex-start' }}>Skills</Heading>
            <OutlineLabel label="Select skills to filter" pt={6}>
                <SkillsList />
            </OutlineLabel>
        </Stack>
    );
};

export default SkillsSection;
