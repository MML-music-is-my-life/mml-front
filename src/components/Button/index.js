/** @jsxImportSource @emotion/react */
import * as S from './style';

const Button = ({ platform }) => {
  const melonSite = 'https://www.melon.com/chart/';
  const genieSite = 'https://www.genie.co.kr/chart/top200';
  const bugsSite = 'https://music.bugs.co.kr/chart/track/realtime/total';
  const vibeSite = 'https://vibe.naver.com/chart';
  return (
    <>
      <S.backgroundButton
        css={{
          display: window.location.pathname === '/' && 'none',
          background:
            window.location.pathname === '/melon'
              ? '#E5FAEB'
              : window.location.pathname === '/genie'
              ? '#EBF7FF'
              : window.location.pathname === '/bugs'
              ? '#FFECEB'
              : window.location.pathname === '/vibe'
              ? '#f4ebfb'
              : '#FFEFE1',
        }}
      >
        <S.buttonText
          href={
            platform === 'melon'
              ? melonSite
              : platform === 'genie'
              ? genieSite
              : platform === 'bugs'
              ? bugsSite
              : vibeSite
          }
          target="_blank"
        >
          들으러 가기
        </S.buttonText>
      </S.backgroundButton>
    </>
  );
};

export default Button;
