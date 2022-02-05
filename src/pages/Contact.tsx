import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { InputText } from "../components/contactForm/InputText";
import FormContact from "../components/contactForm/FormContact";

export const Contact = () => {
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        minWidth={{ base: 300, md: 600 }}
        p={6}
        m="10px auto"
      >
        <Center>
          <Heading as="h2">Contact</Heading>
        </Center>
        <FormContact />
      </Box>
    </>
  );
};