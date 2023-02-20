export interface Driver {
  driverId: string;
  permanentNumber?: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export interface StandingsList {
  season: string;
  round: string;
  DriverStandings: DriverStanding[];
}

export interface StandingsTable {
  driverStandings: string;
  StandingsLists: StandingsList[];
}

export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
}

export type SeasonMRD = {
  StandingsTable: StandingsTable;
} & MRData;

export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface Time {
  time: string;
  millis?: string;
}

export interface AverageSpeed {
  units: string;
  speed: string;
}

export interface FastestLap {
  rank: string;
  lap: string;
  Time: Time;
  AverageSpeed: AverageSpeed;
}

export interface Result {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time: Time;
  FastestLap: FastestLap;
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  Results: Result[];
}

export interface RaceTable {
  season: string;
  position: string;
  Races: Race[];
}

export type RacesMRD = {
  RaceTable: RaceTable;
} & MRData;

export interface ApiData<T> {
  MRData: T;
}
