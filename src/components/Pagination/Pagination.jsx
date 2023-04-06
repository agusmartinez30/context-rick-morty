import {
  Box,
  Text,
  Button,
  Select,
  Input
} from "@chakra-ui/react";
import { useContext } from "react";
import { CharactersContext } from "../../context/charactersContext";

const Pagination = () => {
  const { results, prevPage, nextPage, pages, goToPage, actualPage } =
    useContext(CharactersContext);

  return (
    <Box
      display={"flex"}
      flexFlow="row wrap"
      justifyContent={"center"}
      alignItems={"center"}
      padding={2}
      paddingY={6}
      gap={4}
      borderBottom="1px solid gray"
    >
      <Box>
        <Text color="#66CE5D">Total results: {results} </Text>
      </Box>
      <Box
        display={"flex"}
        alignItems="center"
        gap={4}
        border="1px solid gray"
        borderRadius={"md"}
      >
        <Box padding={2} borderRadius="md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
          </svg>
        </Box>
        <Input
          placeholder="EX. rick"
          data-type="search"
          onChange={(e) => goToPage("", e)}
          border="unset"
          _focusVisible={{ border: "none" }}
          color="#00B0C8"
        />
      </Box>
      <Box>
        <Text color="#66CE5D">
          Page: {actualPage} of {pages}{" "}
        </Text>
      </Box>
      <Box display={"flex"} alignItems="center">
        <Text color="#66CE5D" width={"100%"}>Go to page </Text>
        <Select
          data-type="goTo"
          placeholder="Select option"
          value={actualPage}
          onChange={(e) => goToPage("", e)}
          color="#00B0C8"
        >
          {Array.from(Array(pages).keys()).map((page) => (
            <option key={page + 1} value={page + 1}>
              {page + 1}
            </option>
          ))}
        </Select>
      </Box>

      <Box display={"flex"} gap={4}>
        {prevPage && (
          <Button
            backgroundColor={"#66CE5D"}
            color={"#fff"}
            data-type="prev"
            onClick={(e) => goToPage(prevPage, e)}
          >
            Prev
          </Button>
        )}
        {nextPage && (
          <Button
            backgroundColor={"#66CE5D"}
            color={"#fff"}
            data-type="next"
            onClick={(e) => goToPage(nextPage, e)}
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Pagination;
