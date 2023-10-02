import styled from "styled-components";

export const Container = styled.button`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.bgButton};
  border: 2px solid #1a1a1a;
  font-size: 12px;
  font-weight: bold;
  color: #000;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #fff;
  }

  > img {
    width: 36px;
  }
`;
