/**
 * Utils & helper functions
 */

import { Driver } from "../models/types";

const driverName = (driver: Driver): string =>
  `${driver.givenName} ${driver.familyName}`;

export { driverName };
