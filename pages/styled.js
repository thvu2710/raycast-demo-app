import styled from "styled-components";
import bg from "@assets/bg.png";

export const MainBannerWrapper = styled.div`
  background-image: url(${bg.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const ProductivityBannerWrapper = styled.div`
  background: linear-gradient(
    106deg,
    #ffa7a7 0.63%,
    #a30cb5 56.52%,
    #00173a 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 660px;
  width: 100%;
`;

const MainTitle = styled.div`
  text-align: center;
  font-family: Inter;
  font-size: 80px;
  font-weight: 700;
  line-height: 88px;
  letter-spacing: 1.2px;
`;

export const BigTitle = styled(MainTitle)`
  color: #fff;
  font-style: normal;
`;

export const HLBigTitle = styled(MainTitle)`
  background: linear-gradient(271deg, #7000ff 0%, #f13dd4 55.78%, #f83a3a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-style: italic;
`;

export const BlendWrapper = styled.div`
  position: absolute;
`;
