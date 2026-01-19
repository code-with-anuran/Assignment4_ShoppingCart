import type { ProductType } from "../interface/interface";

export type CartAction =
  | { type: "ADD"; product: ProductType }
  | { type: "REMOVE"; id: number }
  | { type: "INCREASE"; id: number }
  | { type: "DECREASE"; id: number };
