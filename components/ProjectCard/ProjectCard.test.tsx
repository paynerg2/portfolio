import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { projects } from '../../test/testData';

describe('Project Card', () => {
    it('renders the component', () => {
        const component = render(<ProjectCard project={projects[0]} />);
        expect(component).toMatchSnapshot();
    });

    it('displays a heading with the given project name', () => {
        const { name } = projects[0];
        render(<ProjectCard project={projects[0]} />);

        const heading = screen.getByRole('heading');
        expect(heading.firstChild.textContent).toEqual(name);
    });

    it('displays the given description', () => {
        const { description } = projects[0];
        render(<ProjectCard project={projects[0]} />);

        const renderedDescription = screen.getByText(description);
        expect(renderedDescription).toBeInTheDocument();
    });

    it('displays all of the given tags', () => {
        const component = render(<ProjectCard project={projects[0]} />);

        projects[0].tags.forEach((tag) => {
            const renderedTag = component.getByText(tag);
            expect(renderedTag).toBeInTheDocument();
        });
    });

    describe('Project Card Overlay', () => {
        it('is not initially visible', () => {
            render(<ProjectCard project={projects[0]} />);

            const overlay = screen.getAllByTestId('github_link')[0];
            expect(overlay).not.toBeVisible();
        });

        it('is visible when hovered', async () => {
            render(<ProjectCard project={projects[0]} />);
            fireEvent.mouseOver(screen.getByAltText(`${projects[0].name}-preview`));
            await waitFor(() => screen.getAllByTestId('github_link'));

            const overlay = screen.getAllByTestId('github_link')[0];
            expect(overlay).toBeInTheDocument();
            expect(overlay).toBeVisible();
        });
    });
});
