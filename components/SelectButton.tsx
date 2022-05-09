import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactNode, useContext, useEffect, useState } from 'react';
import AppContext from '../utils/appContext';

interface Props {
    children: ReactNode;
    name: string;
}

const SelectButton = ({ children, name }: Props) => {
    const [isSelected, setIsSelected] = useState(false);
    const router = useRouter();
    const { selectedTags, setSelectedTags } = useContext(AppContext);

    // Persist selected state across pages
    useEffect(() => {
        if (selectedTags.includes(name)) {
            setIsSelected(true);
        }
    }, []);

    const handleClick = () => {
        // Update context
        if (!selectedTags.includes(name)) {
            setSelectedTags((prev) => [...prev, name]);
        } else {
            setSelectedTags((prev) => prev.filter((tag) => tag !== name));
        }

        // Remove focus outline to avoid confusion
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }

        setIsSelected((prev) => !prev);

        // Navigate if on the homepage
        if (router.pathname !== 'projects') {
            router.push('projects');
        }
    };
    return (
        <Button
            onClick={handleClick}
            variant="unstyled"
            h="fit-content"
            p={1}
            boxShadow={isSelected ? 'outline' : 'none'}
        >
            {children}
        </Button>
    );
};

export default SelectButton;
