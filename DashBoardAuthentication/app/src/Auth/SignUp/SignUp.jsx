import {
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../../components/Card";

import { Formik, Form, Field } from "formik";

import { object, string, ref } from "yup";
import { useMutation } from "react-query";
import { signUpUser } from "../../api/Query/userQuery";
import { useState } from "react";

let signUpValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Repeat Password is required"),
});

const SignUp = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const toast = useToast();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signUpUser,
    onSuccess: (data) => {
      navigate("/register-email-verify", {
        state: { email },
      });
    },
    onError: (error) => {
      toast({
        title: "SignUp Error",
        description: error.message,
        status: "error",
      });
    },
  });

  return (
    <Container>
      <Center minH={"100vh"}>
        <Card>
          <Text fontWeight={"medium"} textStyle={"h1"}>
            Welcome to Crypto App
          </Text>
          <Text textStyle={"p2"} color={"black.60"} mt={"4"}>
            Create a free account by filling data below.
          </Text>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              mutate({
                firstName: values.name,
                lastName: values.surname,
                email: values.email,
                password: values.password,
              });
              setEmail(values.email);
            }}
            validationSchema={signUpValidationSchema}
          >
            {() => {
              return (
                <Form>
                  <Stack mt={10} spacing={6}>
                    <Flex gap={4}>
                      <Field name="name">
                        {({ field, meta }) => {
                          return (
                            <FormControl
                              isInvalid={!!(meta.error && meta.touched)}
                            >
                              <FormLabel htmlFor="name">Name</FormLabel>
                              <Input
                                {...field}
                                name="name"
                                placeholder="Enter your name..."
                              />
                              <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                          );
                        }}
                      </Field>
                      <Field name="surname">
                        {({ field, meta }) => {
                          return (
                            <FormControl
                              isInvalid={!!(meta.error && meta.touched)}
                            >
                              <FormLabel htmlFor="surname">Surname</FormLabel>
                              <Input
                                {...field}
                                name="surname"
                                placeholder="Enter your surname..."
                              />
                              <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                          );
                        }}
                      </Field>
                    </Flex>
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
                    <Field name="password">
                      {({ field, meta }) => {
                        return (
                          <FormControl
                            isInvalid={!!(meta.error && meta.touched)}
                          >
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                              {...field}
                              name="password"
                              type="password"
                              placeholder="Enter your password..."
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
                              Repeat Password
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
                    <Checkbox defaultChecked>
                      <Text textStyle={"p3"}>
                        I agree with{" "}
                        <Text as="span" color={"p.purple"}>
                          Terms & Conditions.
                        </Text>
                      </Text>
                    </Checkbox>

                    <Button
                      isLoading={isLoading}
                      type="submit"
                      textStyle={"p3"}
                    >
                      Create account
                    </Button>
                    <Text
                      textStyle={"p3"}
                      color={"black.60"}
                      textAlign={"center"}
                    >
                      Already have an account?{" "}
                      <Link to={"/signin"}>
                        <Text as="span" color={"p.purple"}>
                          Log In
                        </Text>
                      </Link>
                    </Text>
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

export default SignUp;
