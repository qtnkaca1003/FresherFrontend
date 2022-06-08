import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import apiUser from "../../../../api/User";
import { useAppDispatch } from "../../../../hook";
import { addUserEdit } from "../../../../redux/slices/userSlices";
import { IUser } from "../../../../types/interface";
import CButton from "../../../Atoms/Button/button";
import CFromInput from "../../../Molecules/FormItem/item";
const dataEdit = {
  email: "george.bluth@reqres.in",
  first_name: "George",
  last_name: "Bluth",
};
interface IFormEditUser {
  data?: IUser;
}
const CFormEditUser = (CFormEditUserProps: IFormEditUser) => {
  const methods = useForm();
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>();
  const onSubmit = (data: any) => {
    if (data.email == "" && data.first_name == "" && data.last_name == "") {
      data.email = dataEdit.email;
      data.first_name = dataEdit.first_name;
      data.last_name = dataEdit.last_name;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else if (
      data.email !== "" &&
      data.first_name == "" &&
      data.last_name == ""
    ) {
      data.first_name = dataEdit.first_name;
      data.last_name = dataEdit.last_name;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else if (
      data.email == "" &&
      data.first_name !== "" &&
      data.last_name == ""
    ) {
      data.email = dataEdit.email;
      data.last_name = dataEdit.last_name;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else if (
      data.email == "" &&
      data.first_name == "" &&
      data.last_name !== ""
    ) {
      data.email = dataEdit.email;
      data.first_name = dataEdit.first_name;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else if (
      data.email !== "" &&
      data.first_name !== "" &&
      data.last_name == ""
    ) {
      data.last_name = dataEdit.last_name;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else if (
      data.email == "" &&
      data.first_name !== "" &&
      data.last_name !== ""
    ) {
      data.email = dataEdit.email;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else if (
      data.email !== "" &&
      data.first_name == "" &&
      data.last_name !== ""
    ) {
      data.first_name = dataEdit.first_name;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else {
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    }
  };
  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box display={"flex"}>
            <CFromInput
              textformlabel="First name"
              name="first_name"
              idInput="first_name"
              isRequired={true}
              typeInput={"text"}
              defaultValueInput={dataEdit.first_name}
            />
            <CFromInput
              textformlabel="Last name"
              name="last_name"
              idInput="last_name"
              isRequired={true}
              typeInput={"text"}
              defaultValueInput={dataEdit.last_name || ""}
            />
          </Box>
          <CFromInput
            textformlabel="Email"
            name="email"
            idInput="email"
            isRequired={true}
            typeInput={"email"}
            defaultValueInput={dataEdit.email || ""}
          />

          <CButton colorScheme="blue" type="submit" mt={5} title="Update" />
        </form>
      </FormProvider>
    </Box>
  );
};
export default CFormEditUser;
