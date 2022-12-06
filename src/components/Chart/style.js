import styled from '@emotion/styled';

export const divBox = styled.div`
  width: 90%;
  height: 16%;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  margin: 20px auto;
  align-items: center;
  box-shadow: 3px 4px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  box-sizing: border-box;
`;

export const rankText = styled.div`
  width: 30px;
  height: 120px;
  line-height: 128px;
  font-size: 3rem;
  font-weight: 600;
  margin-left: 10px;
`;

export const titleBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: left; */
`;

export const titleImg = styled.img`
  width: 90px;
  height: 90px;
  align-self: center;
  margin-right: 20px;
`;

export const textDiv = styled.a`
  width: 10vw;
  color: #000;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;

  &:hover {
    color: #616161;
    text-decoration: underline;
  }
`;

export const changeChart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60px;
`;
