import React from "react";
import { Box, Badge, Grid, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { CharactersContext } from "../../context/charactersContext";
import Pagination from "../Pagination/Pagination";

const Characters = () => {
  const { characters } = useContext(CharactersContext);

  return (
    <>
      <Box padding={6}>
        <Pagination />
        <Grid templateColumns={{base: "repeat(2, 1fr)", md: "repeat(4, 1fr)"}} gap={6} paddingY={2}>
          {characters.map((character, idx) => (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={idx}
            >
              <Image src={character.image} />
              <Box p="6">
                <Box display="flex" alignItems="baseline">
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
                  <Box as="span" color="gray.600" fontSize="sm">
                    Name: {character.name}
                  </Box>
                </Box>
                <Box>
                  <Box as="span" color="gray.600" fontSize="sm">
                    Species: {character.species}
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
