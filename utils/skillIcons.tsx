//@ts-nocheck
//TODO: Just create svg files for each of these directly from Devicon. React-devicon's library is incomplete - it doesn't even have Next!
import IconChakraUI from '../assets/icons/chakra_ui_logo.svg';
import IconContentful from '../assets/icons/contentful_logo.svg';
import IconCsharp from 'react-devicon/csharp/original/CsharpOriginal.svg';
import IconCss3 from 'react-devicon/css3/original/Css3Original.svg';
import IconExpress from 'react-devicon/express/original/ExpressOriginal.svg';
import IconGatsbyJS from '../assets/icons/gatsby_logo.svg';
import IconGraphQL from '../assets/icons/graphql_logo.svg';
import IconHeroku from 'react-devicon/heroku/original/HerokuOriginal.svg';
import IconHtml5 from 'react-devicon/html5/original/Html5Original.svg';
import IconJavascript from 'react-devicon/javascript/original/JavascriptOriginal.svg';
import IconMongodb from 'react-devicon/mongodb/original-wordmark/MongodbOriginalWordmark.svg';
import IconNetlify from '../assets/icons/netlify_logo.svg';
import IconNextJS from '../assets/icons/nextjs_logo.svg';
import IconNodejs from 'react-devicon/nodejs/original/NodejsOriginal.svg';
import IconPython from 'react-devicon/python/original/PythonOriginal.svg';
import IconReact from 'react-devicon/react/original/ReactOriginal.svg';
import IconSass from 'react-devicon/sass/original/SassOriginal.svg';
import IconStyledComponents from '../assets/icons/styled_components_logo.svg';
import IconTypescript from 'react-devicon/typescript/plain/TypescriptPlain.svg';
import IconVercel from '../assets/icons/vercel_logo.svg';
import { WrapItem } from '@chakra-ui/react';
import SelectButton from '../components/SelectButton';
import Image from 'next/image';
import { skillIconSize } from '../utils/constants';

export const icons = {
    React: (
        <SelectButton key="React" name="React">
            <WrapItem>
                <Image alt="React" src={IconReact} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    Typescript: (
        <SelectButton key="Typescript" name="Typescript">
            <WrapItem>
                <Image alt="Typescript" src={IconTypescript} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    Javascript: (
        <SelectButton key="Javascript" name="Javascript">
            <WrapItem>
                <Image alt="Javascript" src={IconJavascript} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    HTML5: (
        <SelectButton key="HTML5" name="HTML5">
            <WrapItem>
                <Image alt="HTML5" src={IconHtml5} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    CSS3: (
        <SelectButton key="CSS3" name="CSS3">
            <WrapItem>
                <Image alt="CSS3" src={IconCss3} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    Sass: (
        <SelectButton key="Sass" name="Sass">
            <WrapItem>
                <Image alt="Sass" src={IconSass} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    CSharp: (
        <SelectButton key="CSharp" name="C#">
            <WrapItem>
                <Image alt="C#" src={IconCsharp} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    NodeJS: (
        <SelectButton key="NodeJS" name="NodeJS">
            <WrapItem>
                <Image alt="NodeJS" src={IconNodejs} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    Express: (
        <SelectButton key="Express" name="Express">
            <WrapItem>
                <Image alt="Express" src={IconExpress} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    Python: (
        <SelectButton key="Python" name="Python">
            <WrapItem>
                <Image alt="Python" src={IconPython} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    MongoDB: (
        <SelectButton key="MongoDB" name="MongoDB">
            <WrapItem>
                <Image alt="MongoDB" src={IconMongodb} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    Heroku: (
        <SelectButton key="Heroku" name="Heroku">
            <WrapItem>
                <Image alt="Heroku" src={IconHeroku} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    ChakraUI: (
        <SelectButton key="ChakraUI" name="ChakraUI">
            <WrapItem>
                <Image alt="Heroku" src={IconChakraUI} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    GraphQL: (
        <SelectButton key="GraphQL" name="GraphQL">
            <WrapItem>
                <Image alt="GraphQL" src={IconGraphQL} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    Netlify: (
        <SelectButton key="Netlify" name="Netlify">
            <WrapItem>
                <Image alt="Netlify" src={IconNetlify} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    StyledComponents: (
        <SelectButton key="StyledComponents" name="Styled Components">
            <WrapItem>
                <Image alt="StyledComponents" src={IconStyledComponents} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    Vercel: (
        <SelectButton key="Vercel" name="Vercel">
            <WrapItem>
                <Image alt="Vercel" src={IconVercel} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    NextJS: (
        <SelectButton key="NextJS" name="NextJS">
            <WrapItem>
                <Image alt="NextJS" src={IconNextJS} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    Contentful: (
        <SelectButton key="Contentful" name="Contentful">
            <WrapItem>
                <Image alt="Contentful" src={IconContentful} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
    GatsbyJS: (
        <SelectButton key="GatsbyJS" name="GatsbyJS">
            <WrapItem>
                <Image alt="GatsbyJS" src={IconGatsbyJS} {...skillIconSize} />
            </WrapItem>
        </SelectButton>
    ),
};
