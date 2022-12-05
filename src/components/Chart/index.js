import * as I from '../../assets/svg';
import * as S from './style';

const Chart = () => {
  return (
    <>
      <S.divBox>
        <S.rankText>1</S.rankText>
        <S.titleBox>
          <S.titleImg
            src="https://cdnimg.melon.co.kr/cm2/album/images/109/03/868/10903868_20220330103544_500.jpg/melon/resize/120/quality/80/optimize"
            alt=""
          />
          <S.textDiv>사건의 지평선</S.textDiv>
        </S.titleBox>
        <S.textDiv>윤하 (YOUNHA)</S.textDiv>
        <S.textDiv>
          YOUNHA 6th Album Repackage 'END THEORY : Final Edition'
        </S.textDiv>
        <S.changeChart>
          <I.ChartStay />
          <span></span>
        </S.changeChart>
      </S.divBox>
    </>
  );
};

export default Chart;
