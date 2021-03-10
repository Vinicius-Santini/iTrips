import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Random word here for tests purposes,Random word here for tests
        purposes,Random word here for tests purposes,Random word here for tests
        purposes,
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
