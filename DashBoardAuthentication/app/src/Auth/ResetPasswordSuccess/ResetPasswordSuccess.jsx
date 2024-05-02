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

const ResetPasswordSuccess = () => {
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
                Password Reset Done
              </Text>
              <Text textStyle={"p2"} color={"black.60"}>
                Now you can access you account.
              </Text>
            </Stack>
            <Box w={"full"}>
              <Link to={"/signin"}>
                <Button w={"full"} fontWeight={"medium"}>
                  Sign In
                </Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ResetPasswordSuccess;
