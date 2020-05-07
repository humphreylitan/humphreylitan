import styled from 'styled-components'
import Greeting from '../components/Greeting'
import Bio from '../components/Bio'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 0 80px;
  }
`
export default function Home() {
  return (
    <Container>
      <Greeting />     
      <Bio /> 
    </Container>
  )
}
