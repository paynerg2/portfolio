import { render } from '@testing-library/react';
import ContactSection from './ContactSection';

describe('Contact Section', () => {
    it('renders the component', () => {
        const component = render(<ContactSection />);
        expect(component).toMatchSnapshot();
    });
});
