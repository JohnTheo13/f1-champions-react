import { Race } from "../../models/types";
import { driverName } from "../../utils/helpers";
import { ListItem, RacesContainer } from "./styles";

type Props = {
  races: Race[];
  driverId: string;
};
const RacesList = ({ races, driverId }: Props) => {
  return (
    <RacesContainer>
      <ul>
        {races.map((race) => {
          const champion = driverId === race.Results[0].Driver.driverId;
          return (
            <ListItem key={race.date} champion={champion}>
              <a
                href={race.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`wiki page for ${race.raceName}`}
              >
                {race.raceName}
              </a>
              <div aria-label={champion ? "season champion" : "race winner"}>
                {driverName(race.Results[0].Driver)}
              </div>
            </ListItem>
          );
        })}
      </ul>
    </RacesContainer>
  );
};

export default RacesList;
