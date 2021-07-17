import styled from 'styled-components'

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;

@media only screen and (max-width: 1200px) {
    padding: 100;
    }
`
export const NavLogo = styled.p`
    font-style: italic;
    color: #F1F1E6;
    justify-self: flex-start;
    text-decoration: none;
    font-size 2.1rem;
    display: flex;
    align-items: center;

@media only screen and (max-width: 1200px) {
    font-size 1.3rem;
    }
`
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`
export const StyledLink = styled.li`
    color: #F1F1E6;
    display: flex;
    font-size: 1.6rem;
    align-items: center;
    text-decoration: none;
    padding: 1rem 1rem;
    cursor: pointer;

@media only screen and (max-width: 1200px) {
    font-size: 1rem;
    }
`

export const ResumeLink = styled.a`
    color: #F1F1E6;
    display: flex;
    font-size: 1.6rem;
    align-items: center;
    text-decoration: none;
    padding: 05.rem 1rem;
    cursor: pointer;

@media only screen and (max-width: 1200px) {
    font-size: 1rem;
    }
`