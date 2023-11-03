import React, { Dispatch } from "react";
import { CategroyAction } from "../reducers/categoryReducer";

interface CategoryContextType {
  category: string;
  dispatch: Dispatch<CategroyAction>;
}

const CategoryContext = React.createContext<CategoryContextType>(
  {} as CategoryContextType
);

export default CategoryContext;
