import {
  Button,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import Card from "../../components/Card";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Formik, Form, Field } from "formik";

import { object, string } from "yup";

let forgotPasswordValidationSchema = object({
  email: string().email("Email is invalid").required("Email is required"),
});

const ForgotPassword = () => {
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
          <Link to={"/signin"}>
            <Icon as={AiOutlineArrowLeft} boxSize={6} />
          </Link>
          <Text mt={4} fontWeight={"medium"} textStyle={"h1"}>
            Forgot Password
          </Text>
          <Text textStyle={"p2"} color={"black.60"} mt={"4"}>
            Enter your email address for which account you want to reset your
            password.
          </Text>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={forgotPasswordValidationSchema}
          >
            {() => {
              return (
                <Form>
                  <Stack mt={8} spacing={6}>
                    <Field name="email">
                      {({ field, meta }) => {
                        return (
                          <FormControl
                            isInvalid={!!(meta.error && meta.touched)}
                          >
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input
                              {...field}
                              name="email"
                              type="email"
                              placeholder="Enter your email..."
                            />
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        );
                      }}
                    </Field>

                    <Stack>
                      <Button type="submit" textStyle={"p3"}>
                        Reset Password
                      </Button>
                    </Stack>
                  </Stack>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPassword;
