import { useCallback, useState } from 'react'
import { getRacesData } from '../../models/getRequest'
import { Race, StandingsList } from '../../models/types'
import { driverName } from '../../utils/helpers'
import Button from '../Button'
import Modal from '../Modal'
import RacesList from '../RacesList'
import { SeasonContainer } from './styles'

const Season = ({ season, DriverStandings }: StandingsList) => {
  const [showModal, setShowModal] = useState(false)
  const [races, setRaces] = useState<Race[]>([])

  const getRaces = useCallback(async () => {
    if (races.length === 0) {
      const response = await getRacesData(season)
      setRaces(response)
    }
    setShowModal(true)
  }, [races, season])

  const onclick = () => {
    getRaces()
  }
  const driversName = driverName(DriverStandings[0].Driver)
  return (
    <SeasonContainer>
      <Button aria-label="click to see winners per race" onClick={onclick}>
        {season}
      </Button>
      <a href={DriverStandings[0].Driver.url} target="_blank" rel="noreferrer" aria-label={`wiki page for the ${season} season champion ${driversName}`}>
        {driversName}
      </a>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          title={`Race Winners of season: ${season}`}
        >
          <RacesList
            driverId={DriverStandings[0]?.Driver?.driverId}
            races={races}
          />
        </Modal>
      )}
    </SeasonContainer>
  )
}

export default Season
