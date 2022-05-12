import { render } from '@testing-library/react';
import Main from './Main';

describe('Main Component', () => {
    it('renders the component', () => {
        const children = <div>test</div>;

        const component = render(<Main>{children}</Main>);
        expect(component).toMatchSnapshot();
    });
});
