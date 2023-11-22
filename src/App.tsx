import { useReducer, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";
import SideBar from "./components/SideBar";
import { Box, Grid, GridItem, Show, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import color from "./color";
import categoryReducer from "./reducers/categoryReducer";
import CategoryContext from "./contexts/categoryContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, dispatch] = useReducer(categoryReducer, "home");

  return (
    <>
      <CategoryContext.Provider value={{ category, dispatch }}>
        <SideDrawer onClose={() => setIsOpen(false)} isOpen={isOpen} />
        <Grid
          templateAreas={{
            lg: `"navbar    navbar"
             "sidebar   main"
             "footer    footer"`,
            base: `
                  "navbar navbar"
                  "main    main"
                  "footer   footer"
             `,
          }}
          templateColumns={{
            base: `80px 1fr`,
          }}
          bg={color.bgColor}
        >
          <GridItem area={"navbar"}>
            <NavBar onToggle={() => setIsOpen(true)} />
          </GridItem>
          <Show above="lg">
            <GridItem area={"sidebar"}>
              <SideBar
                selectedCategory={category}
                onCategoryClick={(category: string) =>
                  dispatch({ type: "SET", categroy: category })
                }
              />
            </GridItem>
          </Show>
          <GridItem
            marginTop={"55px"}
            area={"main"}
            height={"calc(100vh - 95px)"}
            overflowY={"scroll"}
            paddingY={5}
            paddingX={5}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Outlet />
          </GridItem>
          <GridItem
            area={"footer"}
            h={"40px"}
            alignItems={"center"}
            display={"flex"}
            justifyContent={"center"}
            borderTop={"1px"}
            borderTopColor={color.hoverColor}
          >
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              textAlign={"center"}
              color={color.textColor}
            >
              ©2023 Mathias Wakgari™️. All rights reserved.
            </Text>
          </GridItem>
        </Grid>
      </CategoryContext.Provider>
    </>
  );
}

export default App;
