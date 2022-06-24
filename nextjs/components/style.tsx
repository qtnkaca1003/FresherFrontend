import { Text } from "@chakra-ui/react";
import React from "react";
export const StyleCode = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text color={"pink.600"} display={"inline"}>
      {children}
    </Text>
  );
};
