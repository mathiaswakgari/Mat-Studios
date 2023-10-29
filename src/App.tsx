import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";
import SideBar from "./components/SideBar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"navbar    navbar"
             "sidebar   main"`,
        }}
        templateColumns={{
          base: `80px 1fr`,
        }}
      >
        <GridItem area={"navbar"}>
          <NavBar onToggle={() => setIsOpen(true)} />
        </GridItem>
        <GridItem marginTop={"55px"} area={"sidebar"}>
          <SideDrawer onClose={() => setIsOpen(false)} isOpen={isOpen} />
          <Box>
            <SideBar />
          </Box>
        </GridItem>
        <GridItem
          marginTop={"55px"}
          area={"main"}
          bg={"red.50"}
          height={"calc(100vh - 55px)"}
          overflowY={"scroll"}
          paddingY={5}
          paddingX={5}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
