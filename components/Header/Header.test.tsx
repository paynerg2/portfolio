import { render } from '../../test/test-utils';
import Header from './Header';

describe('Header Component', () => {
    describe('Desktop Window Size', () => {
        it('renders the component', () => {
            const component = render(<Header />);
            expect(component).toMatchSnapshot();
        });
    });

    describe('Mobile Window Size', () => {
        Object.defineProperty(window, 'innerHeight', {
            writable: true,
            configurable: true,
            value: 150,
        });
        window.dispatchEvent(new Event('resize'));

        it('renders the component', () => {
            expect(window.innerHeight).toBe(150);
            const component = render(<Header />);
            expect(component).toMatchSnapshot();
        });
    });
});
