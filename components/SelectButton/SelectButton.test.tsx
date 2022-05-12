import { fireEvent, render } from '@testing-library/react';
import AppContext from '../../utils/appContext';
import SelectButton from './SelectButton';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Select Button Component', () => {
    afterEach(() => {
        useRouter.mockClear();
    });

    const context = {
        selectedTags: [],
        setSelectedTags: jest.fn(),
    };

    it('renders the component', () => {
        const component = render(
            <AppContext.Provider value={context}>
                <SelectButton name="test">Text</SelectButton>
            </AppContext.Provider>
        );
        expect(component).toMatchSnapshot();
    });

    it('updates application context when selected', () => {
        useRouter.mockImplementationOnce(() => ({
            push: jest.fn(),
        }));

        const name = 'asdlfimew843n';
        const component = render(
            <AppContext.Provider value={context}>
                <SelectButton name={name}>Text</SelectButton>
            </AppContext.Provider>
        );

        expect(context.setSelectedTags).toHaveBeenCalledTimes(0);

        fireEvent.click(component.getByText('Text'));

        expect(context.setSelectedTags).toHaveBeenCalledTimes(1);
    });

    it('pushes /projects to the router if not already on the /projects route', () => {
        useRouter.mockImplementationOnce(() => ({
            pathname: '/',
            push: jest.fn,
        }));

        const name = 'asdlfimew843n';
        const component = render(
            <AppContext.Provider value={context}>
                <SelectButton name={name}>Text</SelectButton>
            </AppContext.Provider>
        );

        fireEvent.click(component.getByText('Text'));

        // The mock is called once while checking pathname, then once more
        // while calling router.push
        expect(useRouter.mock.calls.length).toBe(2);
    });
});
