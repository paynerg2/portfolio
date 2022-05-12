import { render } from '../../test/test-utils';
import { sectionNames } from '../../utils/constants';
import AboutSection from './AboutSection';

describe('About Me Section', () => {
    it('renders the componenent', () => {
        const component = render(<AboutSection />);
        expect(component).toMatchSnapshot();
    });

    it('contains the corresponding section id', () => {
        const result = render(<AboutSection />);

        const element = result.container.querySelector(`#${sectionNames.about}`);
        expect(element).toBeInTheDocument();
    });
});
