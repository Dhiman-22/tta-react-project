
import { Flex, Center, Box, Text } from "@chakra-ui/react";

//Flex :- we generally used flex to make boxes horizontally align
//Center :- if we do anything in between the center tags that thing show in the center of the box.
//Box :-We generally use it to make a box.
//Text :- We use it to write text content.

export default function App() {
  return (
    <Box m="20px" border="1px solid black">
      <Flex>
        <Center w="30%" h="20vh" fontWeight="bold" border="1px solid black">
          Lorem Ipsum
        </Center>
        <Center w="70%" h="20vh" border="1px solid black" textAlign="right">
          <Text w="100%" mr="10px" fontWeight="bold">
            Link
          </Text>
        </Center>
      </Flex>
      <Flex>
        <Center w="50%" h="50vh" border="1px solid black">
          <Text w="70%" textAlign="center" fontWeight="bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet
          </Text>
        </Center>
        <Center w="50%" h="50vh" border="1px solid black" fontWeight="bold">
          Lorem
        </Center>
      </Flex>
      <Box w="100%" h="25vh" border="1px solid black">
        <Text m="40px" w="35%" textAlign="center" fontWeight="bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet
        </Text>
      </Box>
    </Box>
  );
}
