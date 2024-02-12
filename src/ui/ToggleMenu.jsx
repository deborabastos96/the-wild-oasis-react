import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import styled from "styled-components";
import { device } from "../utils/constants";

const StyledToggle = styled.div`
  font-size: 0;
  cursor: pointer;
  padding: 0.5rem;
  display: block;
  position: relative;
  z-index: 5;

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-brand-600);
    transition: all 0.3s;
  }

  @media only screen and ${device.tabLand} {
    display: none;
  }
`;

function ToggleMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <StyledToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <HiMiniXMark /> : <HiBars3 />}
    </StyledToggle>
  );
}

export default ToggleMenu;
