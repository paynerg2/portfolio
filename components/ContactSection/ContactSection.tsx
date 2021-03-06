import { Box, Heading, HStack, Stack, Text, Divider, Icon, IconButton } from '@chakra-ui/react';
import { sectionNames } from '../../utils/constants';
import ContactForm from '../ContactForm';
import { MdOutlineMailOutline, MdPhoneAndroid } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
    const contrastingTextColor = 'blue.300';
    const headingStyles = {
        size: 'md',
    };

    return (
        <Stack id={sectionNames.contact} gap={{ base: 2, md: 2 }} align="flex-start">
            <Box w="fit-content" alignSelf={{ base: 'center', md: 'flex-start' }}>
                <Heading>Contact Me</Heading>
                <Divider orientation="horizontal" w={100} ml={10} h={1} />
            </Box>
            <Text
                color={contrastingTextColor}
                alignSelf={{ base: 'center', md: 'flex-start' }}
                textAlign="center"
            >
                Have any questions, or want to work with me? Send me a message!
            </Text>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                pt={4}
                spacing={10}
                justify="center"
                w="100%"
            >
                <ContactForm />
                <Stack
                    spacing={5}
                    display="flex"
                    flexGrow={1}
                    direction="column"
                    w={{ base: '100%', md: '25%' }}
                    align="center"
                >
                    <Stack direction="row" align="center" gap={1}>
                        <Icon as={MdOutlineMailOutline} />
                        <Heading {...headingStyles}>Email</Heading>
                    </Stack>
                    <Text color={contrastingTextColor}>paynerg2@gmail.com</Text>
                    <Stack direction="row" align="center" gap={1}>
                        <Icon as={MdPhoneAndroid} />
                        <Heading {...headingStyles}>Phone</Heading>
                    </Stack>
                    <Text color={contrastingTextColor}>(919)-428-0993</Text>
                    <HStack spacing={4}>
                        <IconButton
                            as="a"
                            href="https://github.com/paynerg2"
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={<FaGithub />}
                            aria-label="Github"
                        />
                        <IconButton
                            as="a"
                            href="https://linkedin.com/in/paynerg2"
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={<FaLinkedin />}
                            aria-label="LinkedIn"
                        />
                    </HStack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ContactSection;
