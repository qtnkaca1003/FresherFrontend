import {
  Box,
  Flex,
  IconButton,
  Image,
  Img,
  Text,
  TextProps,
} from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { setMenuOpen } from "redux/appSlice"

interface Props {
  title?: string
  back?: boolean
  onBack?: () => void
  titleProps?: TextProps
}

const Header = ({ back, title, titleProps, onBack }: Props) => {
  const dispatch = useDispatch()

  const handleBack = () => {
    if (onBack) {
      onBack()

      return
    }
  }

  return (
    <>
      <Flex
        position="sticky"
        top="0"
        w="100%"
        height="var(--header-height)"
        alignItems="center"
        py="1rem"
        bgColor="var(--main-bg-color)"
      >
        {back && (
          <IconButton
            zIndex={1}
            onClick={handleBack}
            icon={
              <Image
                src={"/img/arrow-left.svg"}
                w="1.3rem"
                h="1.3rem"
                alt="arrow-left"
              />
            }
            aria-label="back"
            ml="2rem"
          />
        )}
        <Text
          whiteSpace="pre-line"
          w="100%"
          fontSize="1.4rem"
          fontWeight="bold"
          textAlign="center"
          position="absolute"
          left={0}
          {...titleProps}
        >
          {title}
        </Text>
        <Box position="absolute" right="2.1rem">
          <IconButton
            onClick={() => {
              dispatch(setMenuOpen(true))
            }}
            icon={
              <Img
                src={"/img/menu.svg"}
                width="1.5rem"
                height="1.4rem"
                alt="menu-icon"
              />
            }
            aria-label="menu"
          />
        </Box>
      </Flex>
    </>
  )
}

export default Header
