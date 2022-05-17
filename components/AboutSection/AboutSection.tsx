import { Box, Divider, Heading, Stack, Text, VStack, Wrap } from '@chakra-ui/react';
import OutlineLabel from '../OutlineLabel/OutlineLabel';
import { icons } from '../../utils/skillIcons';
import { sectionNames } from '../../utils/constants';

const AboutSection = () => {
    return (
        <Stack id={sectionNames.about} direction="column" gap={6}>
            <Box alignSelf={{ base: 'center', md: 'flex-start' }}>
                <Heading>About Me</Heading>
                <Divider orientation="horizontal" w={100} ml={10} mb={5} h={1} />
            </Box>
            <Stack direction={{ base: 'column-reverse', md: 'row' }}>
                <Text
                    fontSize="xl"
                    textAlign={{ base: 'center', md: 'left' }}
                    flexGrow={1}
                    h="fit-content"
                    w={{ base: '100%', md: '50vw' }}
                    mt={{ base: 6, md: 0 }}
                >
                    My name is Rodney Payne. I&apos;ve always fostered a desire to learn,
                    understand, and engage with interesting and difficult topics. During my graduate
                    studies, I started writing programs to analyze data and control laboratory
                    systems, which led to a passion for building solutions with code.
                </Text>
                <VStack w={{ base: '100%', md: '50vw' }} h="fit-content" maxW="100%">
                    <Heading size="md">Appalachian State University</Heading>
                    <Divider orientation="horizontal" w={100} h={1} />
                    <Text color="blue.300">M.S. Engineering Physics</Text>
                    <Heading size="md">Appalachian State University</Heading>
                    <Divider orientation="horizontal" w={100} h={1} />
                    <Text color="blue.300">B.S. Mathematics, Applied Physics</Text>
                </VStack>
            </Stack>
            <Text fontSize="xl" textAlign={{ base: 'center', md: 'left' }}>
                Now, I&apos;m constantly dabbling with new technologies to find the best way to
                solve problems and keep up with the ever-changing landscape of software development.
            </Text>
            <OutlineLabel label="What I've worked with recently">
                <Wrap spacing={{ base: 1, md: 5 }}>
                    {(
                        [
                            'React',
                            'NextJS',
                            'Typescript',
                            'Javascript',
                            'Express',
                            'MongoDB',
                            'CSharp',
                        ] as (keyof typeof icons)[]
                    ).map((language) => icons[language])}
                </Wrap>
            </OutlineLabel>
        </Stack>
    );
};

export default AboutSection;
