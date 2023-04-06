import React from "react";
import { Box, Badge, Grid, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { CharactersContext } from "../../context/charactersContext";
import Pagination from "../Pagination/Pagination";

const Characters = () => {
  const { characters } = useContext(CharactersContext);

  const { origin } = characters
  console.log(origin)

  return (
    <>
      <Box padding={6}>
        <Pagination />
        <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={6} paddingY={6}>
          {characters.map((character, idx) => (
            <Box
              position={"relative"}
              top={0}
              left={0}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={idx}
            >
              <Box padding={6} borderRadius={"full"} >

                <Image borderRadius={"full"} src={character.image} />
              </Box>
              <Box p="6" display={"flex"} flexDirection={"column"} gap={2}>
                <Box position={"absolute"} top={0} left={0} display="flex" padding={2} alignItems="baseline">
                  {character.status == "Alive" ? (
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      {character.status}
                    </Badge>
                  ) : (
                    <Badge borderRadius="full" px="2" colorScheme="red">
                      {character.status}
                    </Badge>
                  )}
                </Box>

                <Box>
                  <Box as="span" color="#00B0C8" fontSize="2xl" textAlign={"center"}>
                    {character.name}
                  </Box>
                </Box>
                <Box>
                  <Box as="span" color="gray.300" fontSize="sm">
                    Origin: {character.origin.name}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Characters;
