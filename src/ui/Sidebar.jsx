import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { device } from "../utils/constants";

const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  min-width: 26rem;
  background-color: var(--color-grey-0);
  padding: 8rem 2.4rem 3.2rem;
  border-right: 1px solid var(--color-grey-100);
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isMenuOpen }) =>
    $isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
  z-index: 4;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  box-shadow: var(--shadow-lg);

  @media only screen and ${device.tabLand} {
    grid-row: 1 / -1;
    position: relative;
    padding: 3.2rem 2.4rem;
    transform: translateX(0);
    box-shadow: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  background: ${({ $isMenuOpen }) =>
    $isMenuOpen ? "rgb(111, 111, 111, 0.5)" : "rgb(111, 111, 111, 0)"};
  z-index: 2;

  @media only screen and ${device.tabLand} {
    width: 0;
    height: 0;
    z-index: -1;
  }
`;

function Sidebar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <StyledSidebar $isMenuOpen={isMenuOpen}>
      <Overlay $isMenuOpen={isMenuOpen} />
      <Logo />
      <MainNav setIsMenuOpen={setIsMenuOpen} />
    </StyledSidebar>
  );
}

export default Sidebar;
