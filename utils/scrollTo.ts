interface Props {
    id: string;
    before?: () => void;
    after?: () => void;
}

export const scrollTo = ({ id, before, after }: Props) => {
    if (before !== undefined) {
        before();
    }

    // Some actions, such as closing the menu cancel the scroll animation if their animation has not finished beforehand
    // Small delay added to account for this
    setTimeout(() => {
        const section = document.querySelector(`#${id}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 200);

    if (after !== undefined) {
        after();
    }
};
