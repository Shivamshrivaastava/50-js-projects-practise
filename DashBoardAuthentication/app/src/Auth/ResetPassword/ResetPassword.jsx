import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import Card from "../../components/Card";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Formik, Form, Field } from "formik";

import { object, string, ref } from "yup";

let forgotPasswordValidationSchema = object({
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("New Password is required"),
  repeatPassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Repeat Password is required"),
});

const ResetPassword = () => {
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
          <Text mt={4} fontWeight={"medium"} textStyle={"h1"}>
            Reset Password
          </Text>
          <Text textStyle={"p2"} color={"black.60"} mt={"4"}>
            Enter your new password.
          </Text>
          <Formik
            initialValues={{
              password: "",
              repeatPassword: "",
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
                    <Field name="password">
                      {({ field, meta }) => {
                        return (
                          <FormControl
                            isInvalid={!!(meta.error && meta.touched)}
                          >
                            <FormLabel htmlFor="password">
                              New Password
                            </FormLabel>
                            <Input
                              {...field}
                              name="password"
                              type="password"
                              placeholder="Enter your new password..."
                            />
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        );
                      }}
                    </Field>
                    <Field name="repeatPassword">
                      {({ field, meta }) => {
                        return (
                          <FormControl
                            isInvalid={!!(meta.error && meta.touched)}
                          >
                            <FormLabel htmlFor="repeatPassword">
                              Repeat New Password
                            </FormLabel>
                            <Input
                              {...field}
                              name="repeatPassword"
                              type="password"
                              placeholder="Enter the repeat password..."
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

export default ResetPassword;
