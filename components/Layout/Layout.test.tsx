import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout Component', () => {
    it('renders the component', () => {
        const children = <div>test</div>;

        const component = render(<Layout>{children}</Layout>);
        expect(component).toMatchSnapshot();
    });
});
