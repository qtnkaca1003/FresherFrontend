import { Button, Flex, HStack, Text } from "@chakra-ui/react"
import Layout from "components/Layout"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { decrease, increase } from "redux/countSlice"
import { RootState } from "redux/store"

function HomePage() {
  const { t, i18n } = useTranslation("common")
  const count = useSelector((state: RootState) => state.count)
  const dispatch = useDispatch()
  const handleChangeJA = () => {
    i18n.changeLanguage("ja")
  }
  const handleChangeEN = () => {
    i18n.changeLanguage("en")
  }
  const handleIncrease = () => {
    dispatch(increase())
  }
  const handleDecrease = () => {
    dispatch(decrease())
  }

  return (
    <Layout
      title="Home page"
      childProps={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="#f2f2f2"
        p="10px"
        w="30%"
        borderRadius="20px"
      >
        <Text fontSize="2.6rem">{t("hello")}</Text>
        <HStack spacing="2rem">
          <Button colorScheme="green" fontSize="2rem" onClick={handleChangeJA}>
            Ja
          </Button>
          <Button colorScheme="blue" fontSize="2rem" onClick={handleChangeEN}>
            En
          </Button>
        </HStack>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="#f2f2f2"
        p="2rem"
        w="30%"
        borderRadius="10px"
        mt="2rem"
      >
        <Text fontSize="2.6rem">{count.count}</Text>
        <HStack spacing="2rem">
          <Button colorScheme="red" fontSize="2rem" onClick={handleDecrease}>
            Decrease
          </Button>
          <Button colorScheme="green" fontSize="2rem" onClick={handleIncrease}>
            Increase
          </Button>
        </HStack>
      </Flex>
    </Layout>
  )
}

export default HomePage
