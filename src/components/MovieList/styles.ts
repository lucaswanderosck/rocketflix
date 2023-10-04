import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 32px;
  position: relative;

  > img {
    width: 168px;
    height: 252px;
    object-fit: cover;
    margin-right: 32px;
    border-radius: 8px;
  }

  > div {
    > h2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    > p {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.subtitle};

      ~ div {
        margin-top: 8px;
        display: flex;
        font-size: 12px;

        > p {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: block;
    text-align: center;

    > img {
      margin-bottom: 16px;
    }
  }
`;

export const Avaliacao = styled.span`
  background-color: #102d70;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  outline: 2px solid #ccc;
  outline-offset: -4px;
  position: absolute;
  bottom: -20px;
  left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;

  > span {
    font-size: 6px;
    font-weight: normal;
    margin-bottom: 4px;
  }

  @media (max-width: 768px) {
    bottom: 224px;
    left: 82px;
  }
`;

export const Generos = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;
