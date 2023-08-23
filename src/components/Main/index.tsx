import styled from 'styled-components'
const MainCard = () => {
  return (
    <Container>
        <div>
            <div>
                <HDiv>
                    <LogoDiv>
                        <img src="/assets/images/logo.svg" alt="" />

                    </LogoDiv>
                    <HTxt>Swimming Pool</HTxt>
                </HDiv>
                <SecTxt>
                    Donec dictum tristique porta. Etiam convallis lorem lobortis nulla molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit sed
                </SecTxt>
                <Desc>
                    Acquire 1,000 views using this filter and receive a voucher code worth $40 for each product" might
                    sound more formal and clear
                </Desc>
                <RDiv>
                    <div>
                        {/* <p>task</p> */}
                        <GiftDiv>
                            <img src="/assets/images/gift.svg" alt="" />
                            <GiftTxt>iPhone 14 pro</GiftTxt>
                        </GiftDiv>
                    </div>
                    <div>
                        {/* <p>reward</p> */}
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
            </div>
            <div>surati</div>
        </div>
    </Container>
  )
}

export default MainCard

const Container = styled.div`
    width: 375px;
    margin: auto;
    background-color: var(--bg);
    margin-top: 30px;
    border-radius: 24px 24px 0px 0px;
    padding: 16px;
`
const FlexDiv = styled.div`
    display: flex;
`
const HDiv = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`
const LogoDiv = styled.div`
    width: 49px;
    height: 49px;
    background-color: var(--white);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HTxt = styled.h2`
    color: white;
    font-family: "Helvetica";
    font-size: 20px;
`

const SecTxt = styled.p`
    font-family: "Helvetica";
    line-height: 18px;
    font-size: 14px;
    color: var(--secondaryColor);
    margin-top: 24px;
`

const Desc = styled(SecTxt)`
    color: var(--white);
    margin-top: 14px;
`

const RDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`
const GiftTxt = styled.h3`
    font-family: "Nekst";
    font-size: 24px;
    color: var(--white);
`
const GiftDiv = styled(FlexDiv)`
    gap: 10px;
    align-items: center;
`

const InsTxt = styled.h4`
    font-family: "Helvetica";
    font-size: 14px;
    color: var(--white);
`

const ImageDiv = styled.div`
    background-image: url('/assets/images/mobImg.svg');
    height: 580px;
    border-radius: 16px;
    margin-top: 30px;
    position: relative;
`

const GradientDiv = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: end;
    width: 100%;
    bottom: 0;
    height: 200px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%);
`

const SBtn = styled.button`
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
`   