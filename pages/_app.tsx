import '../styles/globals.css';
import { useState } from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import AppContext from '../utils/appContext';
import Layout from '../components/Layout/Layout';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    return (
        <AppContext.Provider value={{ selectedTags, setSelectedTags }}>
            <ChakraProvider theme={theme}>
                <CSSReset />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </AppContext.Provider>
    );
}

export default MyApp;
