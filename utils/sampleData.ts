import { Project } from './interfaces';
import TrackrPreview from '../assets/Trackr-Preview.png';
import MediaLibraryPreview from '../assets/Media-Library-Preview.png';
import CaveBarMenuPreview from '../assets/Cave_Bar_Menu_Preview.png';
import PortfolioPreview from '../assets/Portfolio_Preview.png';

export const projects: Project[] = [
    {
        name: 'Trackr',
        description:
            'Job hunting assistant for aspiring software developers. Tracks applications, interviews, and more. Automatically generates charts to visualize the process.',
        //@ts-ignore
        image: TrackrPreview,
        githubRepo: 'https://github.com/paynerg2/application-tracker',
        liveWebsite: 'https://devjob-trackr.com',
        tags: [
            'React',
            'Redux Toolkit',
            'Typescript',
            'Styled Components',
            'Framer Motion',
            'Nivo',
            'NodeJS',
            'Express',
            'MongoDB',
            'Jest',
            'Netlify',
            'Heroku',
            'C#',
            '.NET Core',
        ],
    },
    {
        name: 'Media Library',
        description:
            'Personal media library catalog. Allows users to manage their collection, and keep it available to quickly reference while on the hunt for new additions.',
        //@ts-ignore
        image: MediaLibraryPreview,
        githubRepo: 'https://github.com/paynerg2/Media-Library',
        liveWebsite: 'https://cave-media-library.herokuapp.com',
        tags: [
            'React',
            'Redux',
            'Typescript',
            'Styled Components',
            'React Spring',
            'NodeJS',
            'Express',
            'MongoDB',
            'Jest',
            'Enzyme',
            'Heroku',
        ],
    },
    {
        name: 'Cave Bar Menu',
        description:
            'An elegant menu commissioned for a home bar. Lets guests view available drinks, search by spirit, flavor profile, and more.',
        //@ts-ignore
        image: CaveBarMenuPreview,
        githubRepo: 'https://github.com/paynerg2/cave-bar-menu',
        liveWebsite: 'https://cave-bar-menu.herokuapp.com',
        tags: ['Javascript', 'GatsbyJS', 'CSS3', 'GraphQL', 'Contentful', 'Heroku'],
    },
    {
        name: 'Portfolio',
        description:
            'The portfolio you are currently viewing. Take a behind-the-scenes look at how it was made!',
        //@ts-ignore
        image: PortfolioPreview,
        githubRepo: 'https://github.com/paynerg2/portfolio',
        liveWebsite: 'https://www.rodneypayne.dev',
        tags: ['Typescript', 'NextJS', 'ChakraUI', 'Framer Motion', 'Jest', 'Vercel'],
    },
];
