import {
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

const ForgotPasswordSent = () => {
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
                Successfully Sent
              </Text>
              <Text textStyle={"p2"} color={"black.60"}>
                We have sent instructions on how to reset your password to{" "}
                <Text as={"span"} color={"p.black"} fontWeight={"bold"}>
                  jenny.wilson@gmail.com
                </Text>
                . Please follow the instructions from the email.
              </Text>
            </Stack>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPasswordSent;
