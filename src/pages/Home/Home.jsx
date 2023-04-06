import { Text, Box, Image } from "@chakra-ui/react";
import {
  CharactersContext,
  CharactersProvider,
} from "../../context/charactersContext";

// comps
import { Characters } from "../../components";

const Home = () => {
  return (
    <>
    <Box  display={"flex"} justifyContent="center">
      <Image width="350px" src="https://occ-0-2773-2433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdlsO0LP022AtLRcPlik-5uWGqVS90oIr1Wy70ULe7-qyaW-Y3a9zUgndw6Q6KuHX2gH_Vd3Nxnl6EOU38_ep9ApNbNfn2Krr6hLj6fhs_eZ.png?r=976" />
    </Box>
      <CharactersProvider>
        <Characters />
      </CharactersProvider>
    </>
  );
};

export default Home;
