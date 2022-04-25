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
    Link,
    Button,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useRef } from 'react';

const Header = () => {
    const headerColor = useColorModeValue('gray.50', 'gray.900');
    const headerTextColor = useColorModeValue('gray.900', 'white');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const menuButtonRef = useRef(null);

    const handleToggle = () => (isOpen ? onClose() : onOpen());

    // TODO: Refactor into separate component that handles its own display logic
    const getNavLinks = (viewport: string) => {
        const direction = viewport === 'desktop' ? 'row' : 'column';
        const display = viewport === 'desktop' ? 'none' : 'flex';
        return (
            <Stack
                direction={{ base: 'column', md: direction }}
                display={{ base: display, md: 'flex' }}
                width={{ base: 'fill', md: 'auto' }}
                alignItems="center"
                justify="center"
                flexGrow={1}
                spacing={10}
            >
                <NextLink href="/projects" passHref>
                    <Link>
                        <Button colorScheme="white" variant="link">
                            Projects
                        </Button>
                    </Link>
                </NextLink>
                <NextLink href="/skils" passHref>
                    <Link>
                        <Button colorScheme="white" variant="link">
                            Skills
                        </Button>
                    </Link>
                </NextLink>
                <NextLink href="/about" passHref>
                    <Link>
                        <Button colorScheme="white" variant="link">
                            About
                        </Button>
                    </Link>
                </NextLink>
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
