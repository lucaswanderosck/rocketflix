import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 32px;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

export const MovieLogo = styled.div`
  position: relative;

  > img {
    width: 168px;
    height: 252px;
    object-fit: cover;
    margin-right: 32px;
    border-radius: 8px;

    @media (max-width: 768px) {
      width: 100%;
      object-fit: contain;
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  > span {
    position: absolute;
    bottom: -12px;
    left: 8px;
    width: 40px;
    height: 40px;
    background-color: #102d70;
    outline: 2px solid #ccc;
    outline-offset: -4px;
    border-radius: 50%;
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
      left: 100px;
      bottom: 4px;
    }
  }
`;

export const MovieDetails = styled.div``;

export const MovieDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.subtitle};
  margin-top: 12px;
`;

export const MovieTitle = styled.h2`
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
  font-weight: bold;

  ${({ as }) =>
    as === "a" &&
    `
    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const MovieInfos = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 12px;

  > li {
    list-style: none;
    display: flex;
    align-items: center;
    margin-right: 16px;

    > svg {
      margin-right: 4px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 16px;
    justify-content: center;
  }
`;
