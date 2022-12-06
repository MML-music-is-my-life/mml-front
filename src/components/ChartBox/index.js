/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as C from '../../components';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const ChartBox = ({ platform }) => {
  const [chart, setChart] = useState();

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
      <div
        css={css`
          width: 93%;
          height: 50px;
          display: flex;
          justify-content: flex-end;
          margin: 0 auto;
        `}
      >
        <C.DropDown />
      </div>
      {chart?.map(chart => (
        <C.Chart
          rank={chart.rank}
          albumArt={chart.albumArt}
          title={chart.title}
          albumName={chart.albumName}
          artistName={chart.artistName}
          key={chart.id}
        />
      ))}
    </S.mainDiv>
  );
};
export default ChartBox;
