import {
    Stack,
    Heading,
    Flex,
    useDisclosure,
    useColorModeValue,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Button,
    Icon,
    Box,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import { sectionNames } from '../utils/constants';
import { scrollTo as scroll } from '../utils/scrollTo';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
    const headerColor = useColorModeValue('gray.50', 'gray.900');
    const headerTextColor = useColorModeValue('gray.900', 'white');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const menuButtonRef = useRef(null);

    const handleToggle = () => (isOpen ? onClose() : onOpen());

    const scrollTo = (id: string) => {
        scroll({ id, before: onClose });
    };

    // TODO: Refactor into separate component that handles its own display logic
    const getNavLinks = (viewport: string) => {
        const direction = viewport === 'desktop' ? 'row' : 'column';
        const display = viewport === 'desktop' ? 'none' : 'flex';
        return (
            <Stack
                direction={{ base: 'column', md: direction }}
                display={{ base: display, md: 'flex' }}
                width={{ base: 'fill', md: 'fill' }}
                align="center"
                justify="center"
                flexGrow={1}
                spacing={10}
            >
                <Button
                    onClick={() => scrollTo(sectionNames.projects)}
                    colorScheme="white"
                    variant="link"
                >
                    Projects
                </Button>
                <Button
                    onClick={() => scrollTo(sectionNames.skills)}
                    colorScheme="white"
                    variant="link"
                >
                    Skills
                </Button>
                <Button
                    onClick={() => scrollTo(sectionNames.about)}
                    colorScheme="white"
                    variant="link"
                >
                    About Me
                </Button>
                <Button
                    onClick={() => scrollTo(sectionNames.contact)}
                    colorScheme="white"
                    variant="link"
                >
                    Contact
                </Button>
                <Button
                    as="a"
                    href="https://resume.creddle.io/resume/jltrgnkt9gg"
                    target="_blank"
                    rel="noreferrer noopener"
                    colorScheme="white"
                    variant="outline"
                >
                    Resume
                </Button>
            </Stack>
        );
    };

    return (
        <Flex
            as="nav"
            wrap="wrap"
            w="100vw"
            padding={6}
            mb={12}
            bg={headerColor}
            color={headerTextColor}
        >
            {/* Mobile Nav */}
            <IconButton
                ref={menuButtonRef}
                onClick={handleToggle}
                display={{ base: 'block', md: 'none' }}
                aria-label="Menu"
                icon={<HamburgerIcon boxSize={8} />}
            />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={menuButtonRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerCloseButton />
                        <Heading>Sections</Heading>
                    </DrawerHeader>

                    <DrawerBody>{getNavLinks('mobile')}</DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* Desktop Nav */}
            {getNavLinks('desktop')}
        </Flex>
    );
};

export default Header;
