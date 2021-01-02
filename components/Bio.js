import styled, { keyframes } from 'styled-components'
import GithubLogo from './icons/GithubLogo'
import TwitterLogo from './icons/TwitterLogo'
import InstagramLogo from './icons/InstagramLogo'
import MailIcon from './icons/MailIcon'

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
  font-size: 18px;
  color: #363036;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.05em;
  transition: font-size 240ms;

  @media (min-width: 768px) {
    padding-left: 2px;
    font-size: 24px;
    font-weight: 700;
  }

  @media (min-width: 992px) {
    padding-left: 4px;
    font-size: 28px;
  }
`

const Line = styled.div`
  opacity: 0;
  transform: translateY(-16px);
  margin-top: ${props => props.padded ? '16px' : 0};
  animation: ${fadeDown} 800ms forwards cubic-bezier(0.25, 1, 0.5, 1);
`

const Anchor = styled.a`
  opacity: 0.5;
  transition: opacity 240ms;

  & + & {
    margin-left: 16px;
  }

  &:hover {
    opacity: 1;
  }

  > svg {
    fill: #464662 
  }
`

const Bio = () => {
  const socials = [
    {
      link: "https://github.com/humphreylitan",
      component: GithubLogo
    },
    {
      link: "https://instagram.com/humphreylitan",
      component: InstagramLogo
    },
    {
      link: "https://twitter.com/hplitan",
      component: TwitterLogo
    },
    {
      link: "mailto:hhplitan@gmail.com",
      component: MailIcon
    }
  ]
  return (
    <Text>
      <Line style={{animationDelay: '1.1s'}}>
        I’m a front-end web developer and designer.
      </Line>

      <Line style={{animationDelay: '1.2s'}} padded>
        {
          socials.map(social =>
            <Anchor href={social.link} target="_blank">
              <social.component />
            </Anchor>
          )
        }
      </Line>
    </Text>
  )
}

export default Bio