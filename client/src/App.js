import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import {
  TopSection,
  AnnouncementSection,
  AcademySection,
  PartnerSection,
} from "./components/section";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  useEffect(() => {
    WebFont.load({
      custom: { families: ["Dalelands"] },
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        className="App"
        maxWidth="false"
        component="main"
        sx={{ overflow: "hidden", position: "relative" }}
      >
        <TopSection />
        <AnnouncementSection />
        <AcademySection />
        <PartnerSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;
