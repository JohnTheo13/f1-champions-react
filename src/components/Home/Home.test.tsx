/* eslint-disable testing-library/no-wait-for-side-effects */
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { getRacesData, getSeasonsData } from "../../models/getRequest";
import { races, seasons } from "../../__tests__/fixtures/resonses";
import Home from "./index";

jest.mock("../../models/getRequest", () => ({
  getSeasonsData: jest.fn(),
  getRacesData: jest.fn(),
}));

const mockGetRaces = getRacesData as jest.MockedFunction<typeof getRacesData>;
const mockGetSeason = getSeasonsData as jest.MockedFunction<
  typeof getSeasonsData
>;

beforeEach(() => {
  jest.resetAllMocks();
  mockGetSeason.mockResolvedValue(seasons);
  mockGetRaces.mockResolvedValue(races);
});
describe("Home page tests", () => {
  test("Seasons are rendered", async () => {
    render(
      <div id="root">
        <Home />
      </div>
    );

    await waitFor(() => {
      expect(screen.getByText("2005")).toBeDefined();
    });
    expect(mockGetSeason).toBeCalled();

    await waitFor(() => fireEvent.click(screen.getByText("2005")));
    expect(mockGetRaces).toBeCalled();
    await waitFor(() => {
      expect(screen.getByText(races[0].raceName)).toBeDefined();
    });
  });
  test("Races races are not refetched", async () => {
    render(
      <div id="root">
        <Home />
      </div>
    );

    await waitFor(() => fireEvent.click(screen.getByText("2005")));
    expect(mockGetRaces).toBeCalled();
    await waitFor(() => {
      fireEvent.click(screen.getByText("X"));
      fireEvent.click(screen.getByText("2005"));
    });
    expect(mockGetRaces).toBeCalledTimes(1);
  });
  test("Different race visible in modal", async () => {
    render(
      <div id="root">
        <Home />
      </div>
    );

    await waitFor(() => fireEvent.click(screen.getByText("2005")));
    expect(mockGetRaces).toBeCalled();
    await waitFor(() => {
      fireEvent.click(screen.getByText("X"));
      fireEvent.click(screen.getByText("2006"));
    });
    expect(mockGetRaces).toBeCalledTimes(2);
    expect(screen.getByText(races[1].raceName)).toBeDefined();
  });
});
