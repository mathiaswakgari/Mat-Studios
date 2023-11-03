interface SetCatergory {
  type: "SET";
  categroy: string;
}

interface GetCategory {
  type: "GET";
}

type CategroyAction = SetCatergory | GetCategory;

const categoryReducer = (state: string, action: CategroyAction): string => {
  if (action.type === "SET") return action.categroy;
  if (action.type === "GET") return state;
  return state;
};

export default categoryReducer;
