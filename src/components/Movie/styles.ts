import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 252px;
  display: flex;
  gap: 2rem;
  margin-top: 32px;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`

export const Poster = styled.div`
  position: relative;

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 8px;

    @media (max-width: 768px) {
      width: 100%;
      object-fit: contain;
      margin-bottom: 20px;
    }
  }
`

export const Rating = styled.span`
  position: absolute;
  bottom: -20px;
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
  font-size: 0.75rem;
  font-weight: bold;

  span {
    font-size: 0.375rem;
    font-weight: normal;
    margin-bottom: 0.25rem;
  }
`

export const MovieDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.subtitle};
  margin-top: 0.75rem;
`

export const MovieName = styled.h2`
  color: ${({ theme }) => theme.title};
  font-size: 1.25rem;
  font-weight: bold;

  ${({ as }) =>
    as === 'a' &&
    `
    &:hover {
      text-decoration: underline;
    }
  `}
`

export const MovieInfos = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 0.75rem;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    margin-right: 1rem;

    svg {
      margin-right: 0.25rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    justify-content: center;
  }
`
