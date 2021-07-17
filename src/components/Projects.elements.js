import styled from 'styled-components'
import { BiLinkExternal } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'

export const ProjectsWrapper = styled.section`
  display: flex;
  height: 100%;
  width: 1300px;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
@media screen and (max-width: 1100px) {
  max-width: 100%;
  flex-basis: 100%;
  display: flex;
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
  font-size: 1.6rem;
}
@media screen and (max-width: 375px) {
  font-size: 1.4rem;
}
`

export const BlueText = styled.span`
  font-weight: bold;
  font-size: 2.2rem;
  color: #00A5B4;
@media screen and (max-width: 1100px) {
  font-size: 1.6rem;
}
@media screen and (max-width: 375px) {
  font-size: 1.4rem;
}
`

export const ProjectCardStart = styled.div`
  position: relative;
  display: flex;
  width: 740px;
  height: 280px;
  left: 460px;
  margin-bottom: 50px;
  background: #A5ABBD;
  box-shadow: 8px 8px 20px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  overflow: hidden;
  perspective: 1px;
  &:hover {
    transform: scale(1.030);
    transition: all 0.25s ease-out;
  }
  
@media screen and (max-width: 1100px) {
  display: flex;
  left: 0px;
  width: 950px;
  justify-content: center;
}
@media screen and (max-width: 1000px) {
  display: flex;
  left: 0px;
  width: 100%;
  height: 350px;
  justify-content: center;
}
`

export const ProjectCardEnd = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 740px;
  height: 280px;
  background: #F1F1E6;
  box-shadow: 8px 8px 20px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  overflow: hidden;
  perspective: 1px;
  margin-bottom: 50px;
  &:hover {
    transform: scale(1.030);
    transition: all 0.25s ease-out;
  }
@media screen and (max-width: 1100px) {
  display: flex;
  left: 0px;
  width: 950px;
  justify-content: center;
}
@media screen and (max-width: 1000px) {
  display: flex;
  left: 0px;
  width: 100%;
  height: 350px;
  justify-content: center;
}
`

export const ProjectCardDetailWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #A5ABBD;
`

export const ProjectCardTitle = styled.h1`
  background: #A5ABBD;
  margin-top: 15px;
  margin-left: 15px;
`

export const ProjectDescription = styled.p`
  font-size: 1.2rem;
  background: #A5ABBD;
  padding-left: 15px;
  padding-right: 15px;
`

export const TechWrapper = styled.div`
  background: #A5ABBD;
`

export const ProjectCardTech = styled.span`
  display: flex;
  border: 2px solid #00A5B4;
  background: #A5ABBD;
  border-radius: 5px;
  margin-bottom: auto;
  margin-top: auto;
  margin-left: 10px;
  padding: 5px;
`

export const LinkWrapper = styled.div`
  background: #A5ABBD;
`

export const DemoLink = styled.a`
  background: #A5ABBD;
  font-size: 30px;
  color: black;
  padding-left: 55px;
  padding-right: 25px;
@media screen and (max-width: 1000px) {
  padding: 0;
}
`

export const RepoLink = styled.a`
  background: #A5ABBD;
  color: black;
@media screen and (max-width: 1000px) {
  padding: 0;
}
`

export const DemoIcon = styled(BiLinkExternal)`
  font-size: 30px;
  background: #A5ABBD;
`

export const RepoIcon = styled(AiFillGithub)`
  font-size: 30px;
  background: #A5ABBD;
`