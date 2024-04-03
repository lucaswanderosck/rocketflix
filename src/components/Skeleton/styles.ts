import styled, { keyframes } from 'styled-components'

const wavesLines = keyframes({
  '0%': {
    backgroundPosition: '-468px 0',
  },
  '100%': {
    backgroundPosition: '468px 0',
  },
})

const wavesSquares = keyframes({
  '0%': {
    backgroundPosition: '-468px 0',
  },
  '100%': {
    backgroundPosition: '468px 0',
  },
})

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

export const Square = styled.div`
  width: 168px;

  > div {
    height: 100%;
    border-radius: 6px;
    background: rgba(130, 130, 130, 0.2);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(8%, rgba(130, 130, 130, 0.2)),
      color-stop(18%, rgba(130, 130, 130, 0.3)),
      color-stop(33%, rgba(130, 130, 130, 0.2))
    );
    background: linear-gradient(
      to right,
      rgba(130, 130, 130, 0.2) 8%,
      rgba(130, 130, 130, 0.3) 18%,
      rgba(130, 130, 130, 0.2) 33%
    );
    background-size: 800px 100px;
    animation: ${wavesSquares} 2s infinite ease-out;
  }
`

export const Lines = styled.div`
  flex: 1;

  .line {
    height: 20px;
    margin-bottom: 6px;
    border-radius: 2px;
    background: rgba(130, 130, 130, 0.2);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(8%, rgba(130, 130, 130, 0.2)),
      color-stop(18%, rgba(130, 130, 130, 0.3)),
      color-stop(33%, rgba(130, 130, 130, 0.2))
    );
    background: linear-gradient(
      to right,
      rgba(130, 130, 130, 0.2) 8%,
      rgba(130, 130, 130, 0.3) 18%,
      rgba(130, 130, 130, 0.2) 33%
    );
    background-size: 800px 100px;
    animation: ${wavesLines} 2s infinite ease-out;
  }

  .h8 {
    height: 8px !important;
  }
  .h10 {
    height: 10px !important;
  }
  .h12 {
    height: 12px !important;
  }
  .h14 {
    height: 14px !important;
  }
  .h17 {
    height: 17px !important;
  }
  .h20 {
    height: 20px !important;
  }
  .h25 {
    height: 25px !important;
  }
  .w25 {
    width: 25% !important;
  }
  .w40 {
    width: 40% !important;
  }
  .w50 {
    width: 50% !important;
  }
  .w75 {
    width: 75% !important;
  }
  .mb14 {
    margin-bottom: 14px !important;
  }

  .mt12 {
    margin-top: 12px !important;
  }
`
