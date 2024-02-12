import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import ToggleMenu from "./ToggleMenu";
import { device } from "../utils/constants";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  @media only screen and ${device.tabLand} {
    justify-content: flex-end;
  }
`;

const UserInfo = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <ToggleMenu />
      <UserInfo>
        <UserAvatar />
        <HeaderMenu />
      </UserInfo>
    </StyledHeader>
  );
}

export default Header;
