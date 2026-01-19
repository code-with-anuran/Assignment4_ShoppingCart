import { createContext } from "react";


import type { CartContextType } from "../../typescript/interface/interface";

export const CartContext = createContext<CartContextType | undefined>(undefined);