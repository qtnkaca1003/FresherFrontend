import { Box, Flex, Text } from "@chakra-ui/react"
import { Meta } from "@storybook/react"
import React, { useState } from "react"
import { HambugerMenu } from "ui-lib/hambuger-menu"
import { SliderMenu } from "./src"

export default {
  title: "Components/SliderMenu",
  component: SliderMenu,
} as Meta

export const Default = () => {
  const [isOpenMenu, setOpenMenu] = useState(false)

  const onMenuClick = React.useCallback(
    (open: boolean) => () => {
      setOpenMenu(open)
    },
    [],
  )

  const handleClose = () => {
    setOpenMenu(false)
  }

  return (
    <>
      <HambugerMenu
        isOpen={isOpenMenu}
        onClick={onMenuClick(!isOpenMenu)}
        position="absolute"
        top="1rem"
        left="1rem"
      />
      <Box bgColor="green.100" h="100%" mt="5rem" p="2rem 1rem">
        Content Region
      </Box>
      <SliderMenu open={isOpenMenu} onClose={handleClose} width="80%">
        <Flex flexDir="column" w="100%" h="100%" pt="5rem">
          {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"].map(
            (item) => (
              <Text
                p="2rem 1rem"
                borderBottom="1px solid lightgray"
                cursor="pointer"
                _active={{ opacity: 0.7 }}
                key={item}
              >
                {item}
              </Text>
            ),
          )}
        </Flex>
      </SliderMenu>
    </>
  )
}
