import {
    ProjectsWrapper,
    SectionHeading,
    BlueText,
    ProjectCardDetailWrap,
    ProjectCardTitle,
    ProjectCardStart,
    ProjectDescription,
    ProjectCardTech,
    ProjectCardEnd,
    TechWrapper,
    LinkWrapper,
    DemoLink,
    DemoIcon,
    RepoLink,
    RepoIcon
} from './Projects.elements'
import { Element } from 'react-scroll'
import {
    project1,
    project2,
    project3,
    project4,
    project5
} from '../data/projectData'

const elementStyle = {
    height: '100%',
    width: '100%',
}

const Projects = () => {
    return (
        <>
            <ProjectsWrapper>
                <Element id='projects' style={elementStyle} >
                    <SectionHeading>
                        <BlueText>Previous&nbsp;</BlueText>Projects
                    </SectionHeading>
                    <ProjectCardStart>
                        {project1.map((project, index) => (
                            <ProjectCardDetailWrap>
                                <ProjectCardTitle key={index.title1}>{project.name}</ProjectCardTitle>
                                <ProjectDescription key={index.description1}>{project.description}</ProjectDescription>
                                {project.technology.map((technology) => (
                                    <TechWrapper>
                                        <ProjectCardTech key={index.technology1}>{technology}</ProjectCardTech>
                                    </TechWrapper>
                                ))}
                                <LinkWrapper>
                                    <DemoLink key={index.demo1} href={project.demo} target='_blank'>
                                        <DemoIcon />
                                    </DemoLink>
                                    <RepoLink key={index.repo1} href={project.repo} target='_blank'>
                                        <RepoIcon />
                                    </RepoLink>
                                </LinkWrapper>
                            </ProjectCardDetailWrap>
                        ))}
                    </ProjectCardStart>
                    <ProjectCardEnd>
                        {project2.map((project, index) => (
                            <ProjectCardDetailWrap>
                                <ProjectCardTitle key={index.title2}>{project.name}</ProjectCardTitle>
                                <ProjectDescription key={index.description2}>{project.description}</ProjectDescription>
                                {project.technology.map((technology) => (
                                    <TechWrapper>
                                        <ProjectCardTech key={index.technology2}>{technology}</ProjectCardTech>
                                    </TechWrapper>
                                ))}
                                <LinkWrapper>
                                    <DemoLink key={index.demo2} href={project.demo} target='_blank'>
                                        <DemoIcon />
                                    </DemoLink>
                                    <RepoLink key={index.repo2} href={project.repo} target='_blank'>
                                        <RepoIcon />
                                    </RepoLink>
                                </LinkWrapper>
                            </ProjectCardDetailWrap>
                        ))}
                    </ProjectCardEnd>
                    <ProjectCardStart>
                        {project3.map((project, index) => (
                            <ProjectCardDetailWrap>
                                <ProjectCardTitle key={index.title3}>{project.name}</ProjectCardTitle>
                                <ProjectDescription key={index.description3}>{project.description}</ProjectDescription>
                                {project.technology.map((technology) => (
                                    <TechWrapper>
                                        <ProjectCardTech key={index.technology3}>{technology}</ProjectCardTech>
                                    </TechWrapper>
                                ))}
                                <LinkWrapper>
                                    <DemoLink key={index.demo3} href={project.demo} target='_blank'>
                                        <DemoIcon />
                                    </DemoLink>
                                    <RepoLink key={index.repo3} href={project.repo} target='_blank'>
                                        <RepoIcon />
                                    </RepoLink>
                                </LinkWrapper>
                            </ProjectCardDetailWrap>
                        ))}
                    </ProjectCardStart>
                    <ProjectCardEnd>
                        {project4.map((project, index) => (
                            <ProjectCardDetailWrap>
                                <ProjectCardTitle key={index.title4}>{project.name}</ProjectCardTitle>
                                <ProjectDescription key={index.description3}>{project.description}</ProjectDescription>
                                {project.technology.map((technology) => (
                                    <TechWrapper>
                                        <ProjectCardTech key={index.technology3}>{technology}</ProjectCardTech>
                                    </TechWrapper>
                                ))}
                                <LinkWrapper>
                                    <DemoLink key={index.demo5} href={project.demo} target='_blank'>
                                        <DemoIcon />
                                    </DemoLink>
                                    <RepoLink key={index.repo5} href={project.repo} target='_blank'>
                                        <RepoIcon />
                                    </RepoLink>
                                </LinkWrapper>
                            </ProjectCardDetailWrap>
                        ))}
                    </ProjectCardEnd>
                    <ProjectCardStart>
                        {project5.map((project, index) => (
                            <ProjectCardDetailWrap>
                                <ProjectCardTitle key={index.title5}>{project.name}</ProjectCardTitle>
                                <ProjectDescription key={index.description5}>{project.description}</ProjectDescription>
                                {project.technology.map((technology) => (
                                    <TechWrapper>
                                        <ProjectCardTech key={index.technology4}>{technology}</ProjectCardTech>
                                    </TechWrapper>
                                ))}
                                <LinkWrapper>
                                    <DemoLink key={index.demo5} href={project.demo} target='_blank'>
                                        <DemoIcon />
                                    </DemoLink>
                                    <RepoLink key={index.repo5} href={project.repo} target='_blank'>
                                        <RepoIcon />
                                    </RepoLink>
                                </LinkWrapper>
                            </ProjectCardDetailWrap>
                        ))}
                    </ProjectCardStart>
                </Element>
            </ProjectsWrapper>
        </>
    )
}

export default Projects