import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// const theme = extendTheme({
//   styles: {
//     global: (props: any) => ({
//       body: {
//         bg: mode("#ebf7f0", "#141405")(props),
//         color: mode("#141405", "#fafaeb")(props),
//       },
//     }),
//   },
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
