import styled from 'styled-components'

export const Container = styled.button`
  appearance: none;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.title};
  margin: 2rem 0;
  color: #000;
  cursor: pointer;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: bold;
  opacity: 1;
  padding: 1rem 1.5rem;
  position: relative;
  text-rendering: geometricprecision;
  transition:
    opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  &::before {
    animation: opacityFallbackOut 0.5s step-end forwards;
    backface-visibility: hidden;
    background-color: ${({ theme }) => theme.bgButton};
    clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateZ(0);
    transition:
      clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
      -webkit-clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 100%;
    border-radius: 4px;
  }

  &:hover::before {
    animation: opacityFallbackIn 0s step-start forwards;
    clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
  }

  &:after {
    background-color: ${({ theme }) => theme.title};
  }

  > span {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > img {
      width: 36px;
    }

    > span {
    }
  }

  ~ p {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.title};
    text-align: center;
    max-width: 384px;
    width: 100%;
  }
`
