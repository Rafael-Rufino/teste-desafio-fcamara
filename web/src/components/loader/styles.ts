import styled, { keyframes } from 'styled-components'

export const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Spinner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SpinnerDot = styled.div`
  position: absolute;
  z-index: 20;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-top-color: transparent;
  border-left-color: transparent;
  border-style: solid;
  border-width: 2px;
  animation: ${spinAnimation} 1s linear infinite;
`
