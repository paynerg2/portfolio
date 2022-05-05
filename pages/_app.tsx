import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react';
import AppContext from '../utils/appContext';
import Layout from '../components/Layout';
import { useState } from 'react';

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
