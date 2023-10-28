import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavBar onToggle={() => setIsOpen(true)} />
      <SideDrawer onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
}

export default App;
