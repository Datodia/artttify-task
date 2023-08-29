import Header from "../Header";
import Img from "../Img";
import QR from "../QR";
import Reward from "../Rewards";
import Text from "../Text";
import {
  Container,
  SDiv,
  TxtDiv,
  Wrapper,
  ImageDiv,
  GradientDiv,
  SBtn,
  DeskImgDiv,
  RDiv,
  TxtWrapper,
  RewardDiv,
} from "./Main.styled";
const MainCard = () => {
  return (
    <Wrapper>
      <Container>
        <SDiv>
          <TxtDiv>
            <Header text={"Swimming Pool"} />
            <TxtWrapper>
              <Text
                family="Helvetica"
                size="14px"
                color="var(--secondaryColor)"
                bigTxt="16px"
                fweight={400}
                text={`
                Donec dictum tristique porta. Etiam convallis lorem lobortis nulla
                molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis
                elit sed
                `}
              />
            </TxtWrapper>
            <TxtWrapper>
              <Text
                family="Helvetica"
                size="14px"
                bigTxt="16px"
                text={`
                Acquire 1,000 views using this filter and receive a voucher code
                worth $40 for each product" might sound more formal and clear
                `}
              />
            </TxtWrapper>
            <RDiv>
              <RewardDiv>
                <Reward
                  title={"Reward"}
                  imgSrc={"/assets/images/gift.svg"}
                  altTxt={"Gift"}
                  rewardTxt={"iPhone 14 Pro"}
                />
              </RewardDiv>
              <div>
                <Reward
                  title={"Task"}
                  imgSrc={"/assets/images/insta.svg"}
                  altTxt={"Insta Photo"}
                  rewardTxt={"10 000 views"}
                />
              </div>
            </RDiv>
            <ImageDiv>
              <GradientDiv>
                <SBtn>Start challenge</SBtn>
              </GradientDiv>
            </ImageDiv>
            <QR />
          </TxtDiv>
          <DeskImgDiv>
            <Img
              src="/assets/images/DsktImg.svg"
              radius="10px"
              altTxt="Desktop Image"
            />
          </DeskImgDiv>
        </SDiv>
      </Container>
    </Wrapper>
  );
};

export default MainCard;
