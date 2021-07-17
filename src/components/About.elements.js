import styled from 'styled-components'

export const AboutWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 800px) {
        max-width: 100%;
        flex-basis: 100%;
        disaply: flex;
        justify-content: center;
    }
`

export const SectionHeading = styled.p`
    display: flex;
    width: 100%;
    font-weight: bold;
    font-size: 2.2rem;
    color: #F1F1E6;
    justify-content: center;
    padding-bottom: 25px;

@media screen and (max-width: 1100px) {
    font-size: 1.4rem;
}
`

export const BlueText = styled.span`
    font-weight: bold;
    font-size: 2.2rem;
    color: #00ADB5;

@media screen and (max-width: 1100px) {
    font-size: 1.8rem;
}

@media screen and (max-width: 375px) {
    font-size: 1.4rem;
}
`

export const AboutImageWrapper = styled.div`
    display: flex;
`
export const AboutImage = styled.img`
    height: 450px;
    width: 450px;

@media screen and (max-width: 1100px) {
    height: 340px;
    width: 100%;
}
`
export const AboutParagraphWrapper = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    margin-bottom: 4rem;
`

export const AboutParagraphText = styled.p`
    font-size: 1.6rem;
    color: #F1F1E6;
    margin: auto;
    width: 50%;

@media screen and (max-width: 1100px) {
    width: 100%;
    margin: 0;
    font-size: 1.4rem;
}
`

export const SvgWrapper = styled.div`
    display: flex;
    padding-left: 100px;
    padding-right: 100px;
    justify-content: space-around;
    padding-bottom: 75px;

@media screen and (max-width: 1100px) {
    padding-left: 0;
    padding-right: 0;
    justify-content: space-around;
}
`
export const Svg = styled.img`
    height: 64px;
    width: 64px;

@media screen and (max-width: 400px) {
    height: 44px;
    width: 44px;
}
`