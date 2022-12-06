import * as I from '../../assets/svg';
import * as S from './style';

const Chart = ({
  isChecked,
  rank,
  albumArt,
  title,
  albumName,
  artistName,
  bf_day,
}) => {
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
        <S.changeChart css={{ color: bf_day < 0 ? '#1F35FF' : '#FF1F1F' }}>
          {/* <I.ChartStay />
          <span></span> */}
          {!isChecked ? (
            <I.ChartStay />
          ) : bf_day < 0 ? (
            <>
              <I.ChartDown />
              <span>{bf_day * -1}</span>
            </>
          ) : bf_day > 0 && bf_day < 900 ? (
            <>
              <I.ChartUp />
              <span>{bf_day}</span>
            </>
          ) : bf_day === 0 ? (
            <I.ChartStay />
          ) : (
            bf_day === 999 && <I.ChartNew />
          )}
        </S.changeChart>
      </S.divBox>
    </>
  );
};

export default Chart;
