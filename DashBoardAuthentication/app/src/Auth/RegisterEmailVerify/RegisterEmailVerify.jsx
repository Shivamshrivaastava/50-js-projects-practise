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

import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";

const RegisterEmailVerify = () => {
  const location = useLocation();
  const email = location.state?.email ?? "";

  if (email === "") {
    return <Center h={"100vh"}> Invalid Email</Center>;
  }

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
            <Icon as={MdEmail} boxSize={12} color={"p.purple"} />
            <Stack textAlign={"center"} spacing={4}>
              <Text textStyle={"h4"} color={"p.black"} fontWeight={"medium"}>
                Email Verification
              </Text>
              <Text textStyle={"p2"} color={"black.60"}>
                We have sent you an email verification to{" "}
                <Text as={"span"} color={"p.black"} fontWeight={"bold"}>
                  {email}
                </Text>
                . If you didn’t receive it, click the button below.
              </Text>
            </Stack>
            <Button w={"full"} variant={"outline"}>
              Re-Send Email
            </Button>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default RegisterEmailVerify;
