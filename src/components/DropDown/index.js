/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as I from '../../assets/svg';
import * as S from './style';
const DropDown = () => {
  return (
    <>
      <div className="App">
        <S.container>
          <S.dropDown id="dropdown" type="checkbox" />
          <S.dropDownLabel for="dropdown">
            <span>순위 변동</span>
            <S.Icon>
              <I.Arrow />
            </S.Icon>
          </S.dropDownLabel>
          <S.contentBox>
            <ul>
              <S.list>순위 변동</S.list>
              <S.list>1일 전</S.list>
            </ul>
          </S.contentBox>
        </S.container>
      </div>
    </>
  );
};

export default DropDown;
