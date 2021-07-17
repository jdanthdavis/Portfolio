import {
    AboutWrapper,
    SectionHeading,
    BlueText,
    AboutImageWrapper,
    AboutImage,
    AboutParagraphWrapper,
    AboutParagraphText,
    SvgWrapper,
    Svg,
} from './About.elements'
import { Element } from 'react-scroll'

const elementStyle = {
    height: '100%',
    width: '100%',
}

const About = () => {
    return (
        <>
            <AboutWrapper>
                <Element id='about' style={elementStyle}>
                    <SectionHeading>
                        <BlueText>Who&nbsp;</BlueText>I am
                    </SectionHeading>
                    <AboutParagraphWrapper>
                        {/* <AboutImageWrapper>
                            <AboutImage src={require('../images/coding.svg').default}/>
                        </AboutImageWrapper> */}
                        <AboutParagraphText>
                            TextTextTextTextTextText
                            TextTextTextTextTextText
                            TextTextTextTextTextText
                            TextTextTextTextTextText
                            TextTextTextTextTextText
                        </AboutParagraphText>
                    </AboutParagraphWrapper>
                    <SectionHeading>
                        <BlueText>Technologies&nbsp;</BlueText>that I use
                    </SectionHeading>
                    <SvgWrapper>
                        <Svg src={require('../images/html5.svg').default}/>
                        <Svg src={require('../images/css.png').default}/>
                        <Svg src={require('../images/react.png').default}/>
                        <Svg src={require('../images/js.png').default}/>
                        <Svg src={require('../images/java.svg').default}/>
                    </SvgWrapper>
                    <SectionHeading>
                        <BlueText>Tools&nbsp;</BlueText>that I use
                    </SectionHeading>
                    <SvgWrapper>
                        <Svg src={require('../images/git.png').default}/>
                        <Svg src={require('../images/vscode.png').default}/>
                        <Svg src={require('../images/boot.svg').default}/>
                        <Svg src={require('../images/core.png').default}/>
                    </SvgWrapper>
                </Element>
            </AboutWrapper>
        </>
    )
}

export default About