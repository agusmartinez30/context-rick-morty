import { Text, Box } from "@chakra-ui/react";
import {
  CharactersContext,
  CharactersProvider,
} from "../../context/charactersContext";

// comps
import { Characters } from "../../components";

const Home = () => {
  return (
    <>
    <Box display={"flex"} justifyContent="center">
      <Text fontSize={{base:"26px", md: "36px"}}>Rick and Morty API</Text>
    </Box>
      <CharactersProvider>
        <Characters />
      </CharactersProvider>
    </>
  );
};

export default Home;
