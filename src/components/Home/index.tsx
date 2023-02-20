import { useCallback, useEffect, useState } from 'react'
import { getSeasonsData } from '../../models/getRequest'
import { StandingsList } from '../../models/types'
import Button from '../Button'
import CollapsingContainer from '../CollapsingContainer'
import Season from '../Season'
import SlideShow from '../SlideShow'

import StyledContainer from './styled'

const slideShowImages = [
  { src: '/images/first.jpg', alt: 'f1 car 1' },
  { src: '/images/second.jpg', alt: 'f1 car 2' },
  { src: '/images/third.jpg', alt: 'f1 car 3' },
  { src: '/images/fourth.jpg', alt: 'f1 car 4' }
]

const Home = () => {
  const [show, setShow] = useState(true)
  const [seasons, setSeasons] = useState<StandingsList[]>([])

  const getSeasons = useCallback(async () => {
    const response = await getSeasonsData()
    setSeasons(response)
  }, [])

  useEffect(() => {
    getSeasons()
  }, [getSeasons])

  return (
    <StyledContainer>
      <Button onClick={() => setShow(!show)}>Slide Show</Button>
      <CollapsingContainer collapsed={show} height="160px">
        <SlideShow images={slideShowImages} />
      </CollapsingContainer>
      <div className="seasons__container">
        {seasons.map(season => (
          <Season {...season} key={season.season} />
        ))}
      </div>
    </StyledContainer>
  )
}

export default Home
