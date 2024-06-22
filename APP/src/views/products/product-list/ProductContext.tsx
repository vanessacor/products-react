import { Product } from "../../../products/models";
import { createContext } from "react";

export const ProductContext = createContext<Product[]>([]);
