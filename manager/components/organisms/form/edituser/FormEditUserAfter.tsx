import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../../../hook";
import CText from "../../../atoms/text";

const CFormEditUserAfter = () => {
  const userAfterEdit = useAppSelector((state) => state.users.UserEdit);
  return (
    <Box>
      <Box display={"flex"}>
        <FormControl>
          <FormLabel fontWeight={"normal"} htmlFor="name.firstname">
            First Name
          </FormLabel>
          <Input
            readOnly
            defaultValue={userAfterEdit.first_name}
            name="first_name"
            id="first_name"
            type="text"
          />
        </FormControl>
        <FormControl ml={2}>
          <FormLabel fontWeight={"normal"} htmlFor="name.lastname">
            Last Name
          </FormLabel>
          <Input
            readOnly
            defaultValue={userAfterEdit.last_name}
            name="last_name"
            id="last_name"
            type="text"
          />
        </FormControl>
      </Box>
      <FormControl>
        <FormLabel fontWeight={"normal"} htmlFor="email">
          Email
        </FormLabel>
        <Input
          readOnly
          defaultValue={userAfterEdit.email}
          name="e"
          id="email"
          type="email"
        />
      </FormControl>
      <CText
        mt={3}
        fontStyle="italic"
        fontSize="12px"
        title={`Time update: ${userAfterEdit.updatedAt || ""}`}
      />
    </Box>
  );
};
export default CFormEditUserAfter;
