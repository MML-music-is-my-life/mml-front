import * as I from '../../assets/svg';
import * as S from './style';

const Chart = ({ rank, albumArt, title, albumName, artistName }) => {
  return (
    <>
      <S.divBox>
        <S.rankText>{rank}</S.rankText>
        <S.titleBox>
          <S.titleImg src={albumArt} alt={title} />
          <S.textDiv>{title}</S.textDiv>
        </S.titleBox>
        <S.textDiv>{artistName}</S.textDiv>
        <S.textDiv>{albumName}</S.textDiv>
        <S.changeChart>
          <I.ChartStay />
          <span></span>
        </S.changeChart>
      </S.divBox>
    </>
  );
};

export default Chart;
