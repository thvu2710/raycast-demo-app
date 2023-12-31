import styled from "styled-components";
import bg from "@assets/bg.png";
import additionalBanner2 from "@assets/additional_banner2.png";

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

export const RaycastForTeamBannerWrapper = styled.div`
  background: linear-gradient(95deg, #3ac4f5 2.68%, #0e0e8a 95.69%);
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
  @media screen and (max-width: 640px) {
    font-size: 45px;
    line-height: 20px;
  }
`;

export const HLBigTitle = styled(MainTitle)`
  background: linear-gradient(271deg, #7000ff 0%, #f13dd4 55.78%, #f83a3a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-style: italic;

  @media screen and (max-width: 640px) {
    font-size: 30px;
  }
`;

export const BlendWrapper = styled.div`
  position: absolute;
`;

export const AdditionInfo2Wrapper = styled.div`
  background-image: url(${additionalBanner2.src});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: bottom;
  position: relative;

  @media screen and (max-width: 640px) {
    background: none;
  }
`;
