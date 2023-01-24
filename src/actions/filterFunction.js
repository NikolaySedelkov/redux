import { FILTER_CHANGE, FILTER_FULL} from "./actionProduct.js";

export function changeFilter(value) {
  return {type: FILTER_CHANGE, payload: value};
}

export function fullFilter(value) {
  return {type: FILTER_FULL, payload: value};
}