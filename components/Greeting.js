import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  from { 
    opacity: 0;
    transform: translateY(100%); 
  }
  to { 
    transform: translateX(0); 
    opacity: 1;
  }
`
const Text = styled.div`
  font-family: 'SF Pro Display';
  letter-spacing: -0.05em;
  font-size: 44px;
  display: flex;
  flex-wrap: wrap;
  line-height: 100%;
  background: linear-gradient(105.49deg, #2591DF -5.27%, #B719EF 43.58%, #E80680 91.41%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: font-size 240ms;

  @media (min-width: 768px) {
    font-size: 64px;
  }

  @media (min-width: 992px) {
    font-size: 96px;
  }

`

const Wrap = styled.div`
  overflow: hidden;

  > div {
    transform: translateY(100%);
    margin-right: 8px;
    animation: ${slideUp} 1.5s forwards cubic-bezier(0.25, 1, 0.5, 1);

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
  padding: 0 8px 8px 0;
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
        <Word style={{ animationDelay: '200ms'}}>
          I'm
        </Word>
      </Wrap>
      <Wrap>
        <Name style={{ animationDelay: '400ms'}}>
          Humphrey
        </Name>
      </Wrap>
    </Text>
  )
}

export default Greeting