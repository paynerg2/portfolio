import {
    Button,
    FormControl,
    FormErrorMessage,
    HStack,
    Input,
    Textarea,
    Stack,
    useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();
    const toast = useToast();

    const onSubmit = async (values: any) => {
        console.log(values);

        const { name, email, subject, message } = values;
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message,
            }),
        })
            .then((res) => {
                toast({
                    title: 'Message sent',
                    description: `Your message has been sent successfully. I'll get back to you soon!`,
                    status: 'success',
                    duration: 6000,
                    isClosable: true,
                });
            })
            .catch((error) => {
                toast({
                    title: 'Error',
                    description: `Something went wrong. Try again in a few minutes.`,
                    status: 'error',
                    duration: 6000,
                    isClosable: true,
                });
            });

        reset();
    };

    return (
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="column" spacing={5}>
                <HStack spacing={5}>
                    <FormControl isInvalid={errors.name}>
                        <Input
                            id="name"
                            placeholder="Name"
                            {...register('name', {
                                required: 'This field is required',
                            })}
                            height={16}
                        />
                        <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.email}>
                        <Input
                            id="email"
                            placeholder="Email"
                            {...register('email', {
                                required: 'This field is required',
                            })}
                            height={16}
                            type="email"
                        />
                        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                    </FormControl>
                </HStack>
                <FormControl isInvalid={errors.subject}>
                    <Input
                        id="subject"
                        placeholder="Subject"
                        {...register('subject', {
                            required: 'This field is required',
                        })}
                        height={16}
                    />
                    <FormErrorMessage>{errors?.subject?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.message}>
                    <Textarea
                        id="message"
                        placeholder="Message"
                        {...register('message', {
                            required: 'This field is required',
                        })}
                        size="lg"
                        height={200}
                    />
                    <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
                </FormControl>
                <Button
                    height={16}
                    width={{ base: '100%', md: 60 }}
                    alignSelf="flex-end"
                    colorScheme="gray"
                    isLoading={isSubmitting}
                    type="submit"
                >
                    Submit
                </Button>
            </Stack>
        </form>
    );
};

export default ContactForm;
