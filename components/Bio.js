import styled, { keyframes } from 'styled-components'

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const Text = styled.div`
  max-width: 720px;
  padding-left: 4px;
  font-weight: 700;
  opacity: 0;
  font-size: 28px;
  line-height: 1.25;
  letter-spacing: -0.05em;
  transform: translateY(-16px);
  animation: ${fadeDown} 800ms forwards cubic-bezier(0.25, 1, 0.5, 1);
  animation-delay: 1.4s;
`
const Bio = () => {
  return (
    <Text>
      I’m a front-end web developer and product designer based in Laguna, Philippines. 
    </Text>
  )
}

export default Bio