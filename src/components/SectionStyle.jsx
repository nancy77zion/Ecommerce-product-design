import styled from 'styled-components'
import { devices } from '../devices'

export const SectionThumbnail = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  justify-items: start;
  margin-top: 10px;
`

export const Section = styled.section`
  max-width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  display: grid;
  gap: 40px;

  @media ${devices.xs} {
    display: flex;
    flex-direction: column;
    
  }

  @media ${devices.lg} {
    grid-template-columns: 50% 50%;
    
  }
`
