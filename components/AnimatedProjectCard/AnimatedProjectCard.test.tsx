import { render } from '../../test/test-utils';
import AnimatedProjectCard from '../AnimatedProjectCard/AnimatedProjectCard';
import { projects } from '../../test/testData';

const mock = function () {
    return {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    };
};
window.IntersectionObserver = jest.fn().mockImplementation(mock);

describe('Animated Project Card componenet', () => {
    it('renders the component', () => {
        const component = render(
            <AnimatedProjectCard project={projects[0]} slideFadeProps={undefined} />
        );
        expect(component).toMatchSnapshot();
    });
});
