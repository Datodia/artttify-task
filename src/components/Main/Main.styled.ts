import styled from "styled-components";
export const Wrapper = styled.div`
  @media screen and (width > 1300px) {
    display: flex;
    justify-content: end;
  }
`;

export const Container = styled.div`
  width: 375px;
  margin: auto;
  background-color: var(--bg);
  margin-top: 30px;
  border-radius: 24px 24px 0px 0px;
  padding: 16px;

  @media screen and (width > 1300px) {
    width: 1296px;
    padding: 117px 250px 117px 99px;
    margin: 12px 0;
    border-radius: 24px 0px 0px 24px;
  }
`;
export const FlexDiv = styled.div`
  display: flex;
`;
export const HDiv = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;
export const LogoDiv = styled.div`
  width: 49px;
  height: 49px;
  background-color: var(--white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (width > 1300px) {
    width: 56px;
    height: 56px;
  }
`;

export const HTxt = styled.h2`
  color: white;
  font-family: "Helvetica";
  font-size: 20px;
  @media screen and (width > 1300px) {
    font-size: 16px;
  }
`;

export const SecTxt = styled.p`
  font-family: "Helvetica";
  line-height: 18px;
  font-size: 14px;
  color: var(--secondaryColor);
  margin-top: 24px;
  @media screen and (width > 1300px) {
    margin-top: 30px;
    font-size: 16px;
  }
`;

export const Desc = styled(SecTxt)`
  color: var(--white);
  margin-top: 14px;
  @media screen and (width > 1300px) {
    font-size: 14px;
    margin-top: 20px;
  }
`;
export const TastTxt = styled.p`
  font-family: "Helvetica";
  color: var(--white);
  font-size: 14px;
  display: none;
  margin: 30px 0 15px 0;
  @media screen and (width > 1300px) {
    display: flex;
  }
`;

export const RDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
export const RewardDiv = styled.div`
  @media screen and (width > 1300px) {
    order: 1;
  }
`;

export const GiftTxt = styled.h3`
  font-family: "Nekst";
  font-size: 24px;
  color: var(--white);
`;
export const GiftDiv = styled(FlexDiv)`
  gap: 10px;
  align-items: center;
`;

export const InsTxt = styled.h4`
  font-family: "Helvetica";
  font-size: 14px;
  color: var(--white);
`;

export const ImageDiv = styled.div`
  background-image: url("/assets/images/mobImg.svg");
  height: 580px;
  border-radius: 16px;
  margin-top: 30px;
  position: relative;
  @media screen and (width > 1300px) {
    display: none;
  }
`;

export const GradientDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  bottom: 0;
  height: 200px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

export const SBtn = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: var(--button);
  font-family: "Nekst";
  font-size: 16px;
  color: var(--white);
  margin-bottom: 30px;
  border: 1px solid white;
  border-bottom: transparent;
`;

export const SDiv = styled.div`
  @media screen and (width > 1300px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const DeskImgDiv = styled.div`
  @media screen and (width > 1300px) {
    width: 360px;
    background-image: url("/assets/images/DsktImg.svg");
    border-radius: 10px;
    height: 600px;
  }
`;

export const TxtDiv = styled.div`
  @media screen and (width > 1300px) {
    width: 50%;
  }
`;

export const QrDiv = styled.div`
  display: none;
  @media screen and (width > 1300px) {
    margin-top: 160px;
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

export const QrLogo = styled.div`
  min-width: 132px;
  height: 132px;
  border-radius: 20px;
  background-color: var(--qrBg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QrTxt = styled.h4`
  color: var(--white);
  font-family: "Helvetica";
  font-size: 14px;
  line-height: 18px;
`;
