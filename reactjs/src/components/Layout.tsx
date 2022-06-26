import { Box, BoxProps, Flex } from "@chakra-ui/react"
import React from "react"
import Header from "./Header"

interface Props {
  title?: string
  back?: boolean
  onBack?: () => void
  childProps?: BoxProps
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({
  title,
  back,
  children,
  onBack,
  childProps,
}) => {
  return (
    <Flex
      w="100vw"
      h="var(--app-height)"
      flexDirection="column"
      position="fixed"
      top="0"
    >
      <Header title={title} back={back} onBack={onBack} />
      <Box
        id="body-container"
        flex={1}
        overflow="auto"
        position="relative"
        {...childProps}
      >
        {children}
      </Box>
    </Flex>
  )
}

export default Layout
