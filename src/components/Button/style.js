import styled from '@emotion/styled';

export const backgroundButton = styled.div`
  width: 166px;
  height: 55px;
  box-shadow: 0px 4px 4px rgba(75, 98, 81, 0.16);
  border-radius: 8px;
  box-sizing: border-box;
  position: fixed;
  right: 3vw;
  top: 17vh;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.1s;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
  &:active {
    filter: brightness(85%);
    transform: scale(1);
  }
`;

export const buttonText = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
  line-height: 55px;
  text-align: center;
  color: #000;
  text-decoration: none;
  font-size: 1.18rem;
  font-weight: 500;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;
