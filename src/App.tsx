import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";
import SideBar from "./components/SideBar";
import { Box } from "@chakra-ui/react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavBar onToggle={() => setIsOpen(true)} />
      <SideDrawer onClose={() => setIsOpen(false)} isOpen={isOpen} />
      <Box paddingTop={"55px"}>
        <SideBar />
      </Box>
    </>
  );
}

export default App;
