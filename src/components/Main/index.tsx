import {
  Container,
  SDiv,
  TxtDiv,
  Wrapper,
  HDiv,
  LogoDiv,
  HTxt,
  SecTxt,
  Desc,
  RDiv,
  RewardDiv,
  TastTxt,
  GiftDiv,
  GiftTxt,
  InsTxt,
  ImageDiv,
  GradientDiv,
  SBtn,
  QrDiv,
  QrLogo,
  QrTxt,
  DeskImgDiv,
} from "./Main.styled";
const MainCard = () => {
  return (
    <Wrapper>
      <Container>
        <SDiv>
          <TxtDiv>
            <HDiv>
              <LogoDiv>
                <img src="/assets/images/logo.svg" alt="" />
              </LogoDiv>
              <HTxt>Swimming Pool</HTxt>
            </HDiv>
            <SecTxt>
              Donec dictum tristique porta. Etiam convallis lorem lobortis nulla
              molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis
              elit sed
            </SecTxt>
            <Desc>
              Acquire 1,000 views using this filter and receive a voucher code
              worth $40 for each product" might sound more formal and clear
            </Desc>
            <RDiv>
              <RewardDiv>
                <TastTxt>Reward</TastTxt>
                <GiftDiv>
                  <img src="/assets/images/gift.svg" alt="" />
                  <GiftTxt>iPhone 14 pro</GiftTxt>
                </GiftDiv>
              </RewardDiv>
              <div>
                <TastTxt>Task</TastTxt>
                <GiftDiv>
                  <img src="/assets/images/insta.svg" alt="" />
                  <InsTxt>1000 views</InsTxt>
                </GiftDiv>
              </div>
            </RDiv>
            <ImageDiv>
              <GradientDiv>
                <SBtn>Start challenge</SBtn>
              </GradientDiv>
            </ImageDiv>
            <QrDiv>
              <QrLogo>
                <img src="/assets/images/qr.svg" alt="" />
              </QrLogo>
              <QrTxt>To start a challenge scan a QR code with your phone</QrTxt>
            </QrDiv>
          </TxtDiv>
          <DeskImgDiv></DeskImgDiv>
        </SDiv>
      </Container>
    </Wrapper>
  );
};

export default MainCard;
