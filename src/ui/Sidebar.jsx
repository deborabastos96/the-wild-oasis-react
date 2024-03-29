import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { device } from "../utils/constants";
import { useToggleMenu } from "../context/ToggleMenuContext";
// import Uploader from "../data/Uploader";

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

function Sidebar() {
  const { isMenuOpen } = useToggleMenu();

  return (
    <StyledSidebar $isMenuOpen={isMenuOpen}>
      <Logo />
      <MainNav />
      {/* <Uploader /> */}
    </StyledSidebar>
  );
}

export default Sidebar;
