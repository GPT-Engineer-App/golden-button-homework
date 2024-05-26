import React from "react";
import { Container, VStack, Input, Textarea, Button, Heading, FormControl, FormLabel, IconButton } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const HomeworkSubmissionPage = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="black" color="white">
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl" mb={6}>
          Submit Your Homework
        </Heading>

        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter your name" bg="white" color="black" />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" bg="white" color="black" />
        </FormControl>

        <FormControl id="homework" isRequired>
          <FormLabel>Homework</FormLabel>
          <Textarea placeholder="Enter your homework details" bg="white" color="black" />
        </FormControl>

        <Button rightIcon={<FaPaperPlane />} colorScheme="yellow" variant="solid" size="lg" bg="gold" color="black" _hover={{ bg: "yellow.500" }}>
          Submit
        </Button>
      </VStack>
    </Container>
  );
};

export default HomeworkSubmissionPage;
