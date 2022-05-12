import { fireEvent, render, screen } from '@testing-library/react';
import ProjectsSection from './ProjectsSection';
import { projects } from '../../test/testData';
import { sectionNames } from '../../utils/constants';

const mock = function () {
    return {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    };
};
window.IntersectionObserver = jest.fn().mockImplementation(mock);

jest.mock(
    'next/link',
    () =>
        ({ children }: any) =>
            children
);

describe('Project Section', () => {
    describe('contains the corresponding section id when', () => {
        describe('receives partial=false', () => {
            it('and expected project parameter', () => {
                const component = render(<ProjectsSection projects={projects} partial={false} />);
                const element = component.container.querySelector(`#${sectionNames.projects}`);

                expect(element).toBeInTheDocument();
            });

            it('and empty project parameter', () => {
                const component = render(<ProjectsSection projects={[]} partial={false} />);
                const element = component.container.querySelector(`#${sectionNames.projects}`);

                expect(element).toBeInTheDocument();
            });
        });

        describe('receives partial=true', () => {
            it('and expected project parameter', () => {
                const component = render(<ProjectsSection projects={projects} partial={true} />);
                const element = component.container.querySelector(`#${sectionNames.projects}`);

                expect(element).toBeInTheDocument();
            });

            it('and empty project parameter', () => {
                const component = render(<ProjectsSection projects={[]} partial={true} />);
                const element = component.container.querySelector(`#${sectionNames.projects}`);

                expect(element).toBeInTheDocument();
            });
        });
    });

    it('displays a link to the /projects route when partial=true', () => {
        const component = render(<ProjectsSection projects={projects} partial={true} />);

        const renderedButton = component.getByRole('button', { name: 'See More' });
        expect(renderedButton).toBeInTheDocument();
    });

    it('does not display a link to the /projects route when partial=false', () => {
        const component = render(<ProjectsSection projects={projects} partial={false} />);

        const renderedButton = component.queryByText('See More');
        expect(renderedButton).not.toBeInTheDocument();
    });
});
