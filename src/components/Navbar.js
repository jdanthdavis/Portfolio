import {
    Nav,
    NavMenu,
    NavLogo,
    NavContainer,
    StyledLink
} from './Navbar.elements'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo>
                        JDAnth.
                    </NavLogo>
                    <NavMenu>
                        <StyledLink>
                            <Link
                                activeClass="active"
                                to='about'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                    About
                                </Link>
                        </StyledLink>
                        <StyledLink>
                        <Link
                            activeClass="active"
                            to='projects'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            >
                                Projects
                            </Link>
                        </StyledLink>
                        <StyledLink>
                        <Link
                            activeClass="active"
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            >
                                Contact
                            </Link>
                        </StyledLink>
                    </NavMenu>
                </NavContainer>
            </Nav>
            </>
    )
}

export default Navbar