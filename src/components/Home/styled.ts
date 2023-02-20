import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  > div.seasons__container {
    display: flex;
    flex-direction: column;
    min-height: 500px;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 4px;
    width: 100%;
  }
  > button {
    max-width: 390px;
  }
`

export default StyledContainer
