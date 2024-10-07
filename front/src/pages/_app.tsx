import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from "next/app";
import NavBar from "./components/NavBar";
import { Container, Nav, Navbar } from "react-bootstrap";
import FooterBar from "./components/FooterBar";
//import NavBarExemplo from "./components/NavBarTeste";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar></NavBar>
    <Container className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
      <Component {...pageProps} />;
    </Container>
    <FooterBar></FooterBar>
    </>
  )
  
}

//<NavBarExemplo></NavBarExemplo>