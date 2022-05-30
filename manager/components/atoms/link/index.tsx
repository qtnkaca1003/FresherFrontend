import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
interface ILink {
  link: string;
  title: string;
  id?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
}
const CLink = (props: ILink) => {
  /* const [menuActive, setMenuState] = useState<number>(0);
  const handleClick = (index: any) => {
    const id = index.target.id;
    setMenuState(id);
  }; */
  return (
    <>
      <Link style={{ width: "100%" }} href={props.link}>
        <a>
          <Text
            fontWeight={props.fontWeight}
            color={props.color}
            fontSize={props.fontSize}
            w={"100%"}
            id={props.id}
          >
            {props.title}
          </Text>
        </a>
      </Link>
    </>
  );
};
export default CLink;
