import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "../../components/Card";

import { BsFillPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const RegisterSuccessful = () => {
  return (
    <Container>
      <Center minH={"100vh"}>
        <Card
          p={{
            base: "8",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing={6}>
            <Icon as={BsFillPatchCheckFill} boxSize={12} color={"green"} />
            <Stack textAlign={"center"} spacing={4}>
              <Text textStyle={"h4"} color={"p.black"} fontWeight={"medium"}>
                Successfully Registration
              </Text>
              <Text textStyle={"p2"} color={"black.60"}>
                Hurray! You have successfully created your account. Enter the
                app to explore all it’s features.
              </Text>
            </Stack>
            <Box w={"full"}>
              <Link to={"/signin"}>
                <Button w={"full"} fontWeight={"medium"}>
                  Enter the App
                </Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default RegisterSuccessful;
