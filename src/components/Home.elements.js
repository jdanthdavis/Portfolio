import styled from 'styled-components'

export const HomeWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

@media only screen and (max-width: 800px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    }
`

export const MainRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export const MainColumn = styled.div`
    flex: 1;
    max-width: 38%;
    flex-basis: 50%;

@media screen and (max-width: 800px) {
    max-width: 100%;
    flex-basis: 100%;
    disaply: flex;
    justify-content: center;
}
`
export const HelloWrapper = styled.div`
    justify-content: center;
    align-items:center;
`

export const Hello = styled.h1`
    font-size: 2.0rem;
    color: #00A5B4;
    font-weight: bold;

@media screen and (max-width: 800px) {
    font-size: 1.5rem;
}
`

export const About = styled.h1`
    font-size: 1.9rem;
    color: #F1F1E6;

@media screen and (max-width: 800px) {
    font-size: 1.3rem;
}
`
export const ImgWrapper = styled.div`
    padding-top: 4rem;
    height: 500px;
    width: 500px;

@media screen and (max-width: 1100px) {
    height: 620px;
    width: 620px;
}

@media screen and (max-width: 900px) {
    height: 600px;
    width: 600px;
}

@media screen and (max-width: 800px) {
    height: 390px;
    width: 390px;
}
`