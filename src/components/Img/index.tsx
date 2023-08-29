import { styled } from 'styled-components'


type PropType = {
    src?: string;
    radius?: string;
    altTxt?: string;
}

const Img = ({src, radius,altTxt}: PropType) => {
  return (
    <>
    <SImg  
        src={src}
        radius={radius}
        alt={altTxt}
    />
    </>
  )
}

const SImg = styled.img<PropType>`
    border-radius: ${props => props.radius};
`
export default Img