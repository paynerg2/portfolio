import { useColorMode, Switch } from '@chakra-ui/react';
import { useEffect } from 'react';

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';

    useEffect(() => {
        // Note: Simply calling the toggle doesn't work. Providing a delay, even of 0s fixes this.
        if (localStorage.getItem('chakra-ui-color-mode') === 'light' && colorMode === 'dark') {
            setTimeout(() => toggleColorMode(), 0);
        } else if (
            localStorage.getItem('chakra-ui-color-mode') === 'dark' &&
            colorMode === 'light'
        ) {
            setTimeout(() => toggleColorMode(), 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Switch
            position="fixed"
            top="1rem"
            right="1rem"
            color="green"
            isChecked={isDarkMode}
            onChange={toggleColorMode}
        />
    );
};

export default DarkModeSwitch;
