import { ReactNode } from 'react';
import Container from './Container';
import DarkModeSwitch from './DarkModeSwitch';
import Header from './Header';
import Main from './Main';

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <Container pb={40}>
            <Header />
            <Main spacing={10}>{children}</Main>
            <DarkModeSwitch />
        </Container>
    );
};

export default Layout;
