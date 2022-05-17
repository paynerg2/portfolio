import { Wrap } from '@chakra-ui/react';
import { icons } from '../../utils/skillIcons';

const SkillsList = () => {
    return (
        <Wrap spacing={1}>
            {(Object.keys(icons) as (keyof typeof icons)[]).map((key) => icons[key])}
        </Wrap>
    );
};

export default SkillsList;
