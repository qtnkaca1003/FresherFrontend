import { Container, VStack } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Head/index";
import styles from "../styles/Home.module.css"
export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <Container  maxW="container.xl" className={styles.container}>
        <main style={{ flex: "1" }}>{children}</main>
      </Container>
      <Footer />
      
    </>
  );
}
