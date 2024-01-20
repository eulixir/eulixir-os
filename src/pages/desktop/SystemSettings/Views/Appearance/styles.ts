import styled from 'styled-components'

export const AppearanceContainer = styled.section`
  height: 400px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  background: ${({ theme }) => theme.apps.systemSettings.sectionBackground};
  border: 1px solid ${({ theme }) => theme.apps.systemSettings.sectionBorder};
`
export const AccentContainer = styled.div`
  & input[type='radio']:checked + input {
    background-color: #606062;
    background-image: linear-gradient(#255cd2, #1d52c1);
  }
  & input[type='radio']:checked + .rdo:after {
    opacity: 1;
    transform: scale(1);
    transition: all 0.15s ease;
  }
`

export const AccentRadio = styled.input`
  position: relative;
  display: block;
  float: left;
  width: 18px;
  height: 18px;
  border-radius: 10px;
  background-color: #606062;
  background-image: linear-gradient(#474749, #606062);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.15),
    inset 0 -1px 1px rgba(0, 0, 0, 0.15);
  transition: all 0.15s ease;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 6px;
    left: 6px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
    opacity: 0;
    transform: scale(0);
  }
`
