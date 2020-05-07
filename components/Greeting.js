import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  from { 
    transform: translateY(100%); 
  }
  to { 
    transform: translateX(0); 
  }
`
const Text = styled.div`
  font-family: 'SF Pro Display';
  letter-spacing: -0.05em;
  font-size: 44px;
  display: flex;
  flex-wrap: wrap;
  line-height: 100%;
  color: #252841;
  transition: font-size 240ms;

  @media (min-width: 768px) {
    font-size: 64px;
  }

  @media (min-width: 992px) {
    font-size: 80px;
  }

`

const Wrap = styled.div`
  overflow: hidden;

  > div {
    transform: translateY(100%);
    margin-right: 8px;
    animation: ${slideUp} 400ms forwards cubic-bezier(0.25, 1, 0.5, 1);

    @media (min-width: 1200px) {
      margin-right: 16px;
    }
  }
`

const Word = styled.div`
  font-weight: 500;
`

const Name = styled.div`
  font-weight: 800;
  padding-bottom: 8px;
`
const Greeting = () => {
  return (
    <Text>
      <Wrap>
        <Word>
          Hello,
        </Word>
      </Wrap>
      <Wrap>
        <Word style={{ animationDelay: '180ms'}}>
          I'm
        </Word>
      </Wrap>
      <Wrap>
        <Name style={{ animationDelay: '360ms'}}>
          Humphrey
        </Name>
      </Wrap>
    </Text>
  )
}

export default Greeting