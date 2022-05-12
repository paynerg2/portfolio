import { render } from '@testing-library/react';
import Title from './Title';

const mock = function () {
    return {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    };
};
window.IntersectionObserver = jest.fn().mockImplementation(mock);

describe('Title Component', () => {
    it('renders the component', () => {
        const component = render(<Title />);
        expect(component).toMatchSnapshot();
    });
});
