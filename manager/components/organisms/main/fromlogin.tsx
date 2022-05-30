import { Box } from "@chakra-ui/react";
import CFormLogin from "../from/login";

const FromLogin = () => {
  return (
    <Box
      className="login__center"
      width={"500px"}
      shadow={"2xl"}
      borderRadius={"10px"}
      padding={"10px 10px"}
    >
      <CFormLogin />
    </Box>
  );
};

export default FromLogin;
