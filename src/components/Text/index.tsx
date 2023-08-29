import styled  from "styled-components"


type PropType = {
    size: string;
    family: "Helvetica" | "Nekst";
    color?: string;
    text?: string;
    bigTxt?: string;
    hide?: "none" | "flex";
    fweight?: number | string;
    lineHeight?: string;
}

const Text = ({ text, fweight, lineHeight, size,bigTxt, family, hide, color = "white"}: PropType) => {
  return (
    <>
       <SText 
        size={size} 
        hide={hide} 
        family={family} 
        color={color} 
        bigTxt={bigTxt}
        fweight={fweight}
        lineHeight={lineHeight}
        >{text}</SText>
    </>
  )
}


const SText = styled.p<PropType>`
    font-size: ${(props) => props.size};
    font-family: ${props => props.family};
    color: ${props => props.color};
    font-weight: ${props => props.fweight};
    line-height: ${props => props.lineHeight};

    @media screen and (width > 1300px) {
        font-size: ${(props) => props.bigTxt};
    }
`

export default Text