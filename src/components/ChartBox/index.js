/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as C from '../../components';
import axios from 'axios';
import { useEffect, useState } from 'react';
const ChartBox = () => {
  const [melon, setMelon] = useState();

  const melonData = () => {
    axios.get('/data/melon.json').then(res => {
      setMelon(res.data.data);
    });
  };

  useEffect(() => {
    melonData();
    console.log(melon);
  }, [melon]);

  return (
    <S.mainDiv>
      <S.divStyle>
        <div>노래</div>
        <div
          css={css`
            margin-left: 15%;
          `}
        >
          아티스트
        </div>
        <div>앨범</div>
      </S.divStyle>
      {melon?.map(chart => (
        <C.Chart
          rank={chart.rank}
          albumArt={chart.albumArt}
          title={chart.title}
          albumName={chart.albumName}
          artistName={chart.artistName}
        />
      ))}
    </S.mainDiv>
  );
};
export default ChartBox;
