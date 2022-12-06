/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as C from '../../components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ChartBox = ({ platform }) => {
  const [chart, setChart] = useState();
  const [isChecked, setIsChecked] = useState(false);

  const clickedTrue = data => {
    setIsChecked(data);
  };

  const getData = async () => {
    await axios.get(`/data/${platform}.json`).then(res => {
      setChart(() => res.data.data);
    });
  };

  useEffect(() => {
    console.log(chart);
  }, [chart]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.mainDiv>
      <S.divStyle>
        <div>노래</div>
        <div css={{ marginLeft: '12%' }}>아티스트</div>
        <div>앨범</div>
      </S.divStyle>
      <S.dropDownBox>
        <C.DropDown setIsChecked={clickedTrue} />
      </S.dropDownBox>
      {chart?.map(chart => (
        <C.Chart
          isChecked={isChecked}
          rank={chart.rank}
          albumArt={chart.albumArt}
          title={chart.title}
          albumName={chart.albumName}
          artistName={chart.artistName}
          bf_day={chart.bf_day}
          key={chart.id}
        />
      ))}
    </S.mainDiv>
  );
};
export default ChartBox;
