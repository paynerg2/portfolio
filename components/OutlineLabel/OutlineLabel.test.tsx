import { render, screen } from '@testing-library/react';
import OutlineLabel from './OutlineLabel';

describe('Outline Label', () => {
    it('renders the component', () => {
        const container = render(<OutlineLabel label="test">Test</OutlineLabel>);
        expect(container).toMatchSnapshot();
    });

    it('Displays the given label', () => {
        const labelText = 'testvalue';
        render(
            <OutlineLabel label={labelText}>
                <div>children</div>
            </OutlineLabel>
        );

        const label = screen.getByLabelText(labelText);

        expect(label).toBeInTheDocument();
    });
});
