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
    animation: ${slideUp} 800ms forwards cubic-bezier(0.25, 1, 0.5, 1);

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
  const words = [
    {
      string: "Hello,",
      component: Word
    },
    {
      string: "I'm",
      component: Word
    },
    {
      string: "Humphrey",
      component: Name
    }
  ]
  return (
    <Text>
      {
        words.map((word, idx) => 
          <Wrap>
            <word.component style={{ animationDelay: `${(idx + 1) * 200}ms`}}>
              {word.string}
            </word.component>
          </Wrap>
        )
      }
    </Text>
  )
}

export default Greeting