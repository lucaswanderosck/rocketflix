import styled from "styled-components";

export const Container = styled.header`
  margin-top: 96px;
  text-align: center;

  h1 > {
    font-size: 40px;
    font-weight: bold;
  }

  > img {
    width: 86px;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    margin-top: 32px;

    h1 {
      font-size: 32px;
    }
  }
`;
