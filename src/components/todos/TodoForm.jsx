import {
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

export default function TodoForm({ handleSubmit }) {
  const { register, handleSubmit : formSubmit } = useForm();



  return (
    <FormControl as="form" my="2rem" onSubmit={formSubmit(handleSubmit)}>
      <InputGroup>
        <Input
        ref={register({required : true})}
          placeholder='Add todos...'
          name="body"
          border="none"
          backgroundColor="inherit"
          borderBottom="1px solid black"
          borderTop="1px solid black"
          borderRadius="0"
          _focus={{ outline: "none" }}
        />
        <InputRightElement
          children={
            <IconButton
              backgroundColor="inherit"
              type="submit"
              icon="add"
              color="orange.500"
              _hover={{ backgroundColor: "inherit", transform: "scale(1.2)" }}
            />
          }
        />
      </InputGroup>
    </FormControl>
  );
}
