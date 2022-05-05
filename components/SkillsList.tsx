//@ts-nocheck
//TODO: Just create svg files for each of these directly from Devicon. React-devicon's library is incomplete - it doesn't even have Next!
import IconCsharp from 'react-devicon/csharp/original/CsharpOriginal.svg';
import IconCss3 from 'react-devicon/css3/original/Css3Original.svg';
import IconExpress from 'react-devicon/express/original/ExpressOriginal.svg';
import IconHeroku from 'react-devicon/heroku/original/HerokuOriginal.svg';
import IconHtml5 from 'react-devicon/html5/original/Html5Original.svg';
import IconJavascript from 'react-devicon/javascript/original/JavascriptOriginal.svg';
import IconMongodb from 'react-devicon/mongodb/original-wordmark/MongodbOriginalWordmark.svg';
import IconNodejs from 'react-devicon/nodejs/original/NodejsOriginal.svg';
import IconPython from 'react-devicon/python/original/PythonOriginal.svg';
import IconReact from 'react-devicon/react/original/ReactOriginal.svg';
import IconSass from 'react-devicon/sass/original/SassOriginal.svg';
import IconTypescript from 'react-devicon/typescript/plain/TypescriptPlain.svg';
import { Wrap, WrapItem } from '@chakra-ui/react';
import SelectButton from './SelectButton';
import Image from 'next/image';

const SkillsList = () => {
    const size = {
        height: '80',
        width: '80',
    };

    return (
        <Wrap spacing={2}>
            <SelectButton name="React">
                <WrapItem>
                    <Image alt="React" src={IconReact} {...size} />
                </WrapItem>
            </SelectButton>
            <SelectButton name="Typescript">
                <WrapItem>
                    <Image alt="Typescript" src={IconTypescript} {...size} />
                </WrapItem>
            </SelectButton>
            <SelectButton name="Javascript">
                <WrapItem>
                    <Image alt="Javascript" src={IconJavascript} {...size} />
                </WrapItem>
            </SelectButton>
            <SelectButton name="HTML5">
                <WrapItem>
                    <Image alt="HTML5" src={IconHtml5} {...size} />
                </WrapItem>
            </SelectButton>
            <SelectButton name="CSS3">
                <WrapItem>
                    <Image alt="CSS3" src={IconCss3} {...size} />
                </WrapItem>
            </SelectButton>
            <SelectButton name="Sass">
                <WrapItem>
                    <Image alt="Sass" src={IconSass} {...size} />
                </WrapItem>
            </SelectButton>
            <SelectButton name="C#">
                <WrapItem>
                    <Image alt="C#" src={IconCsharp} {...size} />
                </WrapItem>
            </SelectButton>
            <SelectButton name="NodeJS">
                <WrapItem>
                    <Image alt="NodeJS" src={IconNodejs} {...size} />
                </WrapItem>
            </SelectButton>
            <SelectButton name="Express">
                <WrapItem>
                    <Image alt="Express" src={IconExpress} {...size} />
                </WrapItem>
            </SelectButton>
            <SelectButton name="Python">
                <WrapItem>
                    <Image alt="Python" src={IconPython} {...size} />
                </WrapItem>
            </SelectButton>
            <SelectButton name="MongoDB">
                <WrapItem>
                    <Image alt="MongoDB" src={IconMongodb} {...size} />
                </WrapItem>
            </SelectButton>
            <SelectButton name="Heroku">
                <WrapItem>
                    <Image alt="Heroku" src={IconHeroku} {...size} />
                </WrapItem>
            </SelectButton>
        </Wrap>
    );
};

export default SkillsList;
