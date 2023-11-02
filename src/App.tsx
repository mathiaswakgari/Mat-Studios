import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";
import SideBar from "./components/SideBar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import color from "./color";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
        bg={color.bgColor}
      >
        <GridItem area={"navbar"}>
          <NavBar
            onSearch={(searchTerm) => setSearchTerm(searchTerm)}
            onToggle={() => setIsOpen(true)}
          />
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
