import {
    Button,
    FormControl,
    FormErrorMessage,
    HStack,
    Input,
    Textarea,
    Stack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (values: any) => {
        console.log(values);
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
                    width={60}
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
