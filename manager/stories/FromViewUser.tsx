import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";
import { IUser } from "../types/interface";

interface IProspUser {
  user: IUser | undefined;
}
const CFormViewUser = (props: IProspUser) => {
  return (
    <Box>
      <Box display={"flex"}></Box>
      <FormControl>
        <FormLabel fontWeight={"normal"} htmlFor="email">
          Email
        </FormLabel>
        <Input
          readOnly
          value={props.user?.email}
          name="email"
          id="email"
          type="email"
        />
      </FormControl>
      <Box display={"flex"}>
        {" "}
        <FormControl>
          <FormLabel fontWeight={"normal"} htmlFor="username">
            Username
          </FormLabel>
          <Input
            readOnly
            value={props.user?.username}
            name="username"
            id="username"
            type="text"
          />
        </FormControl>
        <FormControl ml={2}>
          <FormLabel fontWeight={"normal"} htmlFor="password">
            Password
          </FormLabel>
          <Input
            readOnly
            value={props.user?.password}
            name="password"
            id="password"
            type="password"
          />
        </FormControl>
      </Box>
      <FormControl>
        <FormLabel fontWeight={"normal"} htmlFor="phone">
          Phone
        </FormLabel>
        <Input
          readOnly
          value={props.user?.phone}
          name="phone"
          id="phone"
          type="text"
        />
      </FormControl>
      <Box>
        <Text fontSize={"20px"} fontWeight={"600"} mt={5}>
          Address
        </Text>
        <Box display={"flex"}>
          <FormControl>
            <FormLabel fontWeight={"normal"} htmlFor="city">
              City
            </FormLabel>
            <Input
              readOnly
              value={props.user?.address.city}
              name="address.city"
              id="address.city"
              type="text"
            />
          </FormControl>
          <FormControl ml={2}>
            <FormLabel fontWeight={"normal"} htmlFor="street">
              Street
            </FormLabel>
            <Input
              readOnly
              value={props.user?.address.street}
              name="address.street"
              id="address.street"
              type="text"
            />
          </FormControl>
        </Box>
        <Box display={"flex"}>
          <FormControl>
            <FormLabel fontWeight={"normal"} htmlFor="lat">
              Lat
            </FormLabel>
            <Input
              readOnly
              value={props.user?.address.geolocation.lat}
              name="address.geolocation.lat"
              id="address.geolocation.lat"
              type="text"
            />
          </FormControl>
          <FormControl ml={2}>
            <FormLabel fontWeight={"normal"} htmlFor="long">
              Long
            </FormLabel>
            <Input
              readOnly
              value={props.user?.address.geolocation.long}
              name="address.geolocation.long"
              id="address.geolocation.long"
              type="text"
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};
export default CFormViewUser;
