/** @jsxImportSource @emotion/react */
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
          <S.textDiv
            href={`https://www.youtube.com/results?search_query=${title}`}
            target="_blank"
          >
            {title}
          </S.textDiv>
        </S.titleBox>
        <S.textDiv
          href={`https://www.google.com/search?q=${artistName}&rlz=1C5CHFA_enKR982KR985&oq=${artistName}&aqs=chrome..69i57j69i60l3.571j0j15&sourceid=chrome&ie=UTF-8`}
          target="_blank"
        >
          {artistName}
        </S.textDiv>
        <S.textDiv
          href={`https://www.google.com/search?q=${albumName}&rlz=1C5CHFA_enKR982KR985&oq=${albumName}&aqs=chrome..69i57j69i60l3.571j0j15&sourceid=chrome&ie=UTF-8`}
          target="_blank"
        >
          {albumName}
        </S.textDiv>
        <S.changeChart css={{ color: bf_day < 0 ? '#1F35FF' : '#FF1F1F' }}>
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
