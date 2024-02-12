import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { device } from "../utils/constants";
import { useToggleMenu } from "../context/ToggleMenuContext";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media only screen and ${device.tabLand} {
    grid-template-columns: 26rem 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  background: ${({ $isMenuOpen }) => ($isMenuOpen ? "rgba(0, 0, 0, 0.5)" : "")};
  z-index: ${({ $isMenuOpen }) => ($isMenuOpen ? 2 : -1)};
  backdrop-filter: blur(4px);

  @media only screen and ${device.tabLand} {
    width: 0;
    height: 0;
    z-index: -1;
  }
`;

function AppLayout() {
  const { isMenuOpen, closeMenu } = useToggleMenu();

  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Overlay $isMenuOpen={isMenuOpen} onClick={closeMenu} />
    </StyledAppLayout>
  );
}

export default AppLayout;
