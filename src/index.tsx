import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createTheme,
  MantineColorsTuple,
  MantineProvider,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const accDriveColors: MantineColorsTuple = [
  "#effcea",
  "#e3f2da",
  "#c6e5b6",
  "#a8d68f",
  "#8dc96d",
  "#7dc257",
  "#74be4c",
  "#62a73c",
  "#559434",
  "#468027",
];

const theme = createTheme({
  colors: {
    accDriveColors,
  },
});

root.render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <ModalsProvider>
        <App />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
