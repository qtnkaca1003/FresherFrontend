import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";

interface IItem {
  name?: string;
  path?: string;
}
interface IAccordion {
  title?: string;
  data?: IItem[];
}
const CAccordion = (props: IAccordion) => {
  return (
    <Box borderWidth={"1px"} mt={"5"} borderRadius={"lg"}>
      <Box p="2">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize={"1xl"} fontWeight={"medium"}>
                    {props.title}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <UnorderedList>
                {props.data?.map((item, index) => {
                  return (
                    <ListItem
                      _hover={{
                        color: "blue",
                        bgClip: "text",
                        bgGradient: "linear(to-l, #7928CA, #FF0080)",
                      }}
                      key={index}
                    >
                      <Link href={{ pathname: `${item.path}` }} passHref>
                        <a>{item.name}</a>
                      </Link>
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
export default CAccordion;
