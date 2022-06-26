import { Box, BoxProps } from "@chakra-ui/react"
import React from "react"

interface Props extends BoxProps {
  isOpen: boolean
}

export const HambugerMenu: React.FC<Props> = ({ isOpen, ...rest }) => {
  return (
    <Box
      aria-label="hambuger-menu"
      sx={{
        zIndex: 1301,
        display: "inline-block",
        padding: "0 3px",
        "& .bar1, & .bar2, & .bar3": {
          width: "25px",
          height: "2px",
          backgroundColor: "green",
          margin: "6px 0",
          transition: "0.4s",
        },
        "& .bar2": {
          width: "19px",
        },
        "&.change": {
          "& .bar1": {
            transform: "rotate(45deg) translate(4px, 7px)",
          },
          "& .bar2": {
            opacity: 0,
          },
          "& .bar3": {
            transform: "rotate(-45deg) translate(4px, -7px)",
          },
        },
      }}
      cursor="pointer"
      className={isOpen ? "change" : ""}
      {...rest}
    >
      <Box className="bar1" />
      <Box className="bar2" />
      <Box className="bar3" />
    </Box>
  )
}
