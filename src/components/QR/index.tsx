import Img from "../Img";
import { QrDiv, QrLogo } from "../Main/Main.styled";
import Text from "../Text";

const QR = () => {
  return (
    <>
      <QrDiv>
        <QrLogo>
          <Img
            src="/assets/images/qr.svg"
            altTxt="Qr Code Image"
          />
        </QrLogo>
        <Text
          family="Helvetica"
          size="14px"
          lineHeight={"18px"}
          text={"To start a challenge scan a QR code with your phone"}
        />
      </QrDiv>
    </>
  );
};

export default QR;
