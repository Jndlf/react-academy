/**
 * Übung 5: Promise
 *******************************************/

import { getARejectedPromise } from "./ex5-promise";
import getAFulfilledPromise from "./ex5-promise";

getAFulfilledPromise().then((result: string) => {
  console.log(result);
});

getAFulfilledPromise()
  .then((result: string) => getARejectedPromise())
  .catch((error: string) => console.log(error));