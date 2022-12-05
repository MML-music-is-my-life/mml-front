/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import * as I from '../../assets/svg';
import * as S from './style';
import * as C from '../../components';
import melonImg from '../../assets/img/melon.png';
import genieImg from '../../assets/img/genie.png';
import bugsImg from '../../assets/img/bugs.png';
import vibeImg from '../../assets/img/vibe.png';
const PageBase = () => {
  return (
    <S.MainDiv>
      <Link
        to={'/'}
        css={css`
          margin-bottom: 70px;
        `}
      >
        <I.Logo />
      </Link>
      <S.ContentsBox
        css={{
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
        <S.LogosBox>
          <Link to={'/melon'}>
            <S.LogoBackground
              css={{
                background:
                  window.location.pathname === '/melon' ? '#E5FAEB' : 'white',
              }}
            >
              <img src={melonImg} alt="melon"></img>
            </S.LogoBackground>
          </Link>
          <Link to={'/genie'}>
            <S.LogoBackground
              css={{
                background:
                  window.location.pathname === '/genie' ? '#EBF7FF' : 'white',
              }}
            >
              <img src={genieImg} alt="genie"></img>
            </S.LogoBackground>
          </Link>
          <Link to={'/bugs'}>
            <S.LogoBackground
              css={{
                background:
                  window.location.pathname === '/bugs' ? '#FFECEB' : 'white',
              }}
            >
              <img src={bugsImg} alt="bugs"></img>
            </S.LogoBackground>
          </Link>
          <Link to={'/vibe'}>
            <S.LogoBackground
              css={{
                background:
                  window.location.pathname === '/vibe' ? '#f4ebfb' : 'white',
              }}
            >
              <img src={vibeImg} alt="vibe"></img>
            </S.LogoBackground>
          </Link>
        </S.LogosBox>
        <S.ChartBox>
          {window.location.pathname === '/' ? (
            `플랫폼 로고를 클릭하여 음원 순위를 확인해보세요!`
          ) : (
            <C.ChartBox />
          )}
        </S.ChartBox>
      </S.ContentsBox>
    </S.MainDiv>
  );
};

export default PageBase;
