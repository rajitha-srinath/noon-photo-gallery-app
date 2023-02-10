import styled from "styled-components";
import Link from "next/link";
import { Home } from "@styled-icons/boxicons-solid/Home";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Link href="/">
          <NavLink>
            <HomeLabel>Home</HomeLabel>
            <HomePage />
          </NavLink>
        </Link>
        <Link href="/liked">
          <NavLink>
            <LikeLabel>Liked</LikeLabel>
            <LikedPage />
          </NavLink>
        </Link>
      </Nav>
    </div>
  );
};

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  background-color: rgba(227, 34, 102);
  display: flex;
  justify-content: space-around;
  overflow-x: auto;

  @media (min-width: 600px) {
    position: static;
  }
`;
const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;
const HomePage = styled(Home)`
  color: white;
  width: 50px;
  height: 50px;
  @media (min-width: 600px) {
    display: none;
  }
`;
const LikedPage = styled(HeartFill)`
  color: white;
  width: 50px;
  height: 50px;
  @media (min-width: 600px) {
    display: none;
  }
`;
const HomeLabel = styled.label`
  font-size: large;
  font-weight: bold;
  color: white;
  @media (max-width: 600px) {
    display: none;
  }
`;
const LikeLabel = styled.label`
  font-size: large;
  font-weight: bold;
  color: white;
  @media (max-width: 600px) {
    display: none;
  }
`;

export default Navbar;
