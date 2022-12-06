import { useState } from 'react';
import * as I from '../../assets/svg';
import * as S from './style';
const DropDown = ({ setIsChecked }) => {
  const [select, setSelect] = useState('순위 변동');
  const [checked, setChecked] = useState('');

  return (
    <S.container>
      <S.dropDown
        onClick={() =>
          checked === '' ? setChecked('checked') : setChecked('')
        }
        id="dropdown"
        type="checkbox"
        className={checked}
      />
      <S.dropDownLabel htmlFor="dropdown">
        <span>{select}</span>
        <S.Icon>
          <I.Arrow />
        </S.Icon>
      </S.dropDownLabel>
      <S.contentBox>
        <ul>
          <S.list
            onClick={() => {
              setSelect('1일 전');
              setChecked('');
              setIsChecked(true);
            }}
          >
            1일 전
          </S.list>
        </ul>
      </S.contentBox>
    </S.container>
  );
};

export default DropDown;
