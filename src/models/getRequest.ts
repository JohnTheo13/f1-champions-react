import api from "../services/api";
import { ApiData, SeasonMRD, StandingsList, RacesMRD, Race } from "./types";

const getSeasonsData = async (): Promise<StandingsList[]> => {
  const res = await api.get<ApiData<SeasonMRD>>(
    "driverStandings/1.json?offset=55"
  );
  return res.MRData.StandingsTable.StandingsLists;
};

const getRacesData = async (season: string): Promise<Race[]> => {
  const res = await api.get<ApiData<RacesMRD>>(
    `${season}/results/1.json`
  );
  return res.MRData.RaceTable.Races;
};

export { getSeasonsData, getRacesData };
