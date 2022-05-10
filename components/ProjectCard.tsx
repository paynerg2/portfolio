import { useState } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    useColorModeValue,
    Heading,
    Tag,
    Stack,
    Button,
    Icon,
    HStack,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { Project } from '../utils/interfaces';

interface Props {
    project: Project;
}

const ProjectCard = ({ project }: Props) => {
    const { name, description, image, githubRepo, liveWebsite, tags } = project;
    const [isHovered, setIsHovered] = useState(false);

    const getSourceLinks = () => {
        return (
            <>
                <Button
                    as="a"
                    href={githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    colorScheme="blue"
                    variant="outline"
                    size="lg"
                    rightIcon={<Icon as={FaGithub} />}
                >
                    See Code
                </Button>
                <Button
                    as="a"
                    href={liveWebsite}
                    target="_blank"
                    colorScheme="blue"
                    variant="outline"
                    size="lg"
                    rightIcon={<ExternalLinkIcon />}
                >
                    View Site
                </Button>
            </>
        );
    };

    return (
        <Stack spacing={4} w="full" alignItems="center" justifyContent="center" wrap="wrap">
            <Box
                bg={useColorModeValue('white', 'gray.900')}
                h="35em"
                maxW="sm"
                minW="25em"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                overflow="hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image src={image} alt={`${name}-preview`} />
                <Stack p="1.5em" spacing={4} justifyContent="center" alignItems="center">
                    <Heading color={useColorModeValue('blue.700', 'blue.300')}>{name}</Heading>
                    <Box textAlign="center">{description}</Box>
                    <Flex justifyContent="center" flexWrap="wrap">
                        {tags.map((tag) => (
                            <Tag colorScheme="blue" mr={2} mb={2} key={`${name}-${tag}`}>
                                {tag}
                            </Tag>
                        ))}
                    </Flex>
                </Stack>

                {/* Overlay */}
                <Box
                    position="absolute"
                    opacity={isHovered ? 1 : 0}
                    width="100%"
                    height="100%"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    zIndex={2}
                    backdropFilter="auto"
                    backdropBlur="sm"
                >
                    <Flex
                        w="100%"
                        h="100%"
                        flexDir="column"
                        align="center"
                        justify="center"
                        gap={4}
                    >
                        {getSourceLinks()}
                    </Flex>
                </Box>
            </Box>
            <HStack spacing={8} display={{ base: 'block', md: 'none' }}>
                {getSourceLinks()}
            </HStack>
        </Stack>
    );
};

export default ProjectCard;
