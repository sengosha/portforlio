import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const AppNavbar = () => {
  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <Navbar.Brand className="mr-3 font-weight-bold" href="#">YOU SHIH WEI</Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Link href="/portfolios">
              <a className="nav-link mr-3">
                Portfolios
              </a>
            </Link>
            <Nav.Link href="/forum/categories" className="mr-3">
              Forum
            </Nav.Link>
            <Nav.Link href="#" className="mr-3">
              Cv
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" className="mr-3">
              Sign In
            </Nav.Link>
            <Nav.Link href="#" className="mr-3 btn btn-success bg-green-2 bright">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default AppNavbar;
