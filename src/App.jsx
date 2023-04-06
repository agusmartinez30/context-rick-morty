import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Box, Container } from "@chakra-ui/react";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Container maxW={"100%"} bgColor={"#0A2647"} padding={0}>
        <Box maxW="1280px" margin={"0 auto"}>
          <Home />
        </Box>
      </Container>
    </>
  );
}

export default App;
