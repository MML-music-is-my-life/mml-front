import styled from '@emotion/styled';

export const container = styled.div`
  width: 150px;
  background: #fff;
  box-shadow: 0 4px 5px 0 #00000026;
  position: relative;
  border-radius: 10px 10px 0 0;
`;

export const dropDown = styled.input`
  left: 0;
  visibility: hidden;
  position: absolute;

  &:checked + label > div {
    transform: rotate(-360deg);
  }

  &:checked + label + div {
    display: block;
    border-top: 1px solid #00000026;
  }
`;

export const dropDownLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  transition: transform 250ms ease-out;
  transform: rotate(-180deg);
`;

export const list = styled.li`
  height: 48px;
  line-height: 48px;
  text-align: center;

  &:hover {
    background: #f2f2f2;
    cursor: pointer;
  }
`;

export const contentBox = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  left: 0;
  background: white;
  box-shadow: 0 4px 5px 0 #00000026;
`;
