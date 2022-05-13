import { ReactNode } from 'react';
import Container from '../Container/Container';
import Header from '../Header/Header';
import Main from '../Main/Main';

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <Container pb={40}>
            <Header />
            <Main spacing={10}>{children}</Main>
        </Container>
    );
};

export default Layout;
