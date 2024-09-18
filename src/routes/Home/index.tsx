import { Col, Row, Image, Container } from "react-bootstrap";
import BodyFirstPart from "../../components/BodyFirstPart";
import CarouselHome from "../../components/CarouselHome";
import DailyBoard from "../../components/DailyBoard";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import ceu from "../../assets/socios/CEU-ARTUR ALVIM.png";
import rotary from "../../assets/socios/rotary-club.png";
import solEscola from "../../assets/socios/solescola.png";
import daSol from "../../assets/socios/da-sol.png";
import avila from "../../assets/socios/avila.png";
import dojo from "../../assets/socios/teshin.png";
import "./styles.css";
import { NavLink } from "react-router-dom";
export default function Calculator() {
  return (
    <>
      <Header></Header>
      <CarouselHome></CarouselHome>
      <DailyBoard></DailyBoard>
      <BodyFirstPart></BodyFirstPart>
      <Container>
        <h1 className="text-center mt-5 mb-5"> Parceiros </h1>
        <Row>
          <Col xs={3} md={2}>
            <NavLink to={"https://www.instagram.com/ceuarthuralvim/"}>
              <Image className="apoio-logo" src={ceu}></Image>
            </NavLink>
          </Col>

          <Col xs={3} md={2}>
            <NavLink to={"  https://www.instagram.com/solescola/"}>
              <Image className="apoio-logo" src={solEscola}></Image>
            </NavLink>
          </Col>
          <Col xs={3} md={2}>
            <NavLink to={"https://www.instagram.com/caseirossdasol"}>
              <Image className="apoio-logo" src={daSol}></Image>
            </NavLink>
          </Col>
          <Col xs={3} md={2}>
            <NavLink to={"https://www.instagram.com/mariaaugustadeavila/"}>
              <Image className="apoio-logo" src={avila}></Image>
            </NavLink>
          </Col>
          <Col xs={3} md={2}>
            <NavLink to={"https://www.instagram.com/tenshi.do/"}>
              <Image className="apoio-logo" src={dojo}></Image>{" "}
            </NavLink>
          </Col>
          <Col xs={5} md={2}>
            <NavLink to={"https://www.instagram.com/rotary_artur_alvim/"}>
              <Image className="apoio-logo" src={rotary}></Image>
            </NavLink>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}
