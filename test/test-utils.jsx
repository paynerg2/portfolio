import { render } from '@testing-library/react';
import AppContext from '../utils/appContext';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';

const Providers = ({ children }) => {
    const [selectedTags, setSelectedTags] = useState([]);
    return (
        <AppContext.Provider value={{ selectedTags, setSelectedTags }}>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </AppContext.Provider>
    );
};

const customRender = (ui, options = {}) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
