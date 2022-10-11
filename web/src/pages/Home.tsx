import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Olá, essa é a nossa HomePage</h1>
        <Wrap>
          <WrapItem w="400px" gap="1">
            <Center>
              <CardProduct />
            </Center>
          </WrapItem>
          <WrapItem w="400px" gap="1">
            <Center>
              <CardProduct />
            </Center>
          </WrapItem>
          <WrapItem w="400px" gap="1">
            <Center>
              <CardProduct />
            </Center>
          </WrapItem>
          <WrapItem w="400px" gap="1">
            <Center>
              <CardProduct />
            </Center>
          </WrapItem>
        </Wrap>
      </div>
      <Footer />
    </>
  );
}
