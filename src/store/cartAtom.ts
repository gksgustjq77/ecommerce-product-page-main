import { atom } from "jotai";
import type { ProductType } from "../type/product/product";

export const cartAtom = atom<ProductType[]>([]);
