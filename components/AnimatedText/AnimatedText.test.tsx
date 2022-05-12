import { render, screen } from '../../test/test-utils';
import { AnimatedText } from './AnimatedText';

const mock = function () {
    return {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    };
};
window.IntersectionObserver = jest.fn().mockImplementation(mock);

describe('Animated Text Component', () => {
    it('renders the component', () => {
        const component = render(<AnimatedText text="test" animationType={0} />);
        expect(component).toMatchSnapshot();
    });

    it('renders the given text', () => {
        const text = 'admndj7843mdfk8as;??*';
        render(<AnimatedText text={text} animationType={0} />);

        const renderedText = screen.getByLabelText(text);
        expect(renderedText).toBeInTheDocument();
    });
});
