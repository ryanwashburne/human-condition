import { Img } from './'
import styled from '@emotion/styled'

export default styled(Img)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`