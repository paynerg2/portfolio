import { Project } from '../utils/interfaces';
import MediaLibraryPreview from '../assets/Media-Library-Preview.png';
import TrackrPreview from '../assets/Trackr-Preview.png';

export const projects: Project[] = [
    {
        name: 'Trackr',
        description:
            'Job hunting assistant for aspiring software developers. Tracks applications, interviews, and more. Automatically generates charts to visualize the process.',
        //@ts-ignore
        image: TrackrPreview,
        githubRepo: 'https://github.com/paynerg2/trackr',
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
        ],
    },
    {
        name: 'Media Library',
        description:
            'Personal media library catalog. Allows users to keep the contents of their collection on hand while on the hunt for new additions.',
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
            'Express',
            'MongoDB',
            'Jest',
            'Enzyme',
            'Heroku',
        ],
    },
];
