import Img from "../Img";
import { GiftDiv, TastTxt } from "../Main/Main.styled";
import Text from "../Text";

type PropType = {
  title: string;
  imgSrc: string;
  altTxt: string;
  rewardTxt: string;
};

const Reward = ({ title, imgSrc, altTxt, rewardTxt }: PropType) => {
  return (
    <>
      <TastTxt>{title}</TastTxt>
      <GiftDiv>
        <Img 
            src={imgSrc} 
            altTxt={altTxt}     
        />
        <Text 
            family="Nekst"
            size="20px"
            bigTxt="24px"
            text={rewardTxt}
        />
      </GiftDiv>
    </>
  );
};

export default Reward;
