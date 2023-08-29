import Img from "../Img";
import { HDiv,  LogoDiv } from "../Main/Main.styled";
import Text from "../Text";

type PropType = {
    text: string;
}

const Header = ({text} : PropType) => {
  return (
    <>
      <HDiv>
        <LogoDiv>
          <Img
            src="/assets/images/logo.svg"
            altTxt="Logo Image"
          />
        </LogoDiv>
        <Text 
            family="Helvetica"
            size="20px"
            bigTxt="16px"
            text={text}
            fweight={900}
        />

      </HDiv>
    </>
  );
};

export default Header;
