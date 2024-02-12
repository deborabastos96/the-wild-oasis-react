import styled, { css } from "styled-components";
import { device } from "../utils/constants";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media only screen and ${device.phone} {
    flex-direction: row;
  }

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
