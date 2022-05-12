import { render } from '@testing-library/react';
import AppContext from '../../utils/appContext';
import SkillsList from './SkillsList';

describe('Skills List Component', () => {
    it('renders the component', () => {
        const selectedTags = ['test', 'test'];
        const setSelectedTags = jest.fn();
        const component = render(
            <AppContext.Provider value={{ selectedTags, setSelectedTags }}>
                <SkillsList />
            </AppContext.Provider>
        );
        expect(component).toMatchSnapshot();
    });
});
