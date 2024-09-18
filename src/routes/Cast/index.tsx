import { Col, Container, Row, Image } from "react-bootstrap";
import * as actorService from "../../services/actor-services";
import * as technicalService from "../../services/technical-services";
import * as coordService from "../../services/coord-services";
import { ActorInfoDTO } from "../../models/actors";
import CardsActor from "../../components/CardsActor";
import logo30Anos from "../../assets/logo-30-anos.png";
import "./styles.css";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
export function Cast() {
  return (
    <>
      <Header />
      <section className="cast-top">
        <Image src={logo30Anos}></Image>
        <h1 className="text-center text-white mt-5">Tal&Pá</h1>
        <h2 className="text-center text-white">Elenco</h2>

        <Container
          fluid
          className="d-flex justify-content-center align-items-center mt-5"
        >
          <Row className="justify-content-center align-items-center">
            {actorService.playsSeason
              .slice()
              .sort((a, b) => {
                if (a.nome < b.nome) return -1; // Se a.nome for menor, a vem primeiro
                if (a.nome > b.nome) return 1; // Se a.nome for maior, b vem primeiro
                return 0; // Se forem iguais, não altera a ordem
              })
              .map((actor: ActorInfoDTO) => (
                <Col
                  xs="auto"
                  key={actor.dataHora}
                  className="d-flex justify-content-center mb-3"
                >
                  <CardsActor
                    name={actor.nome}
                    imgUrl={actor.foto}
                    instagram={actor.instagram}
                    actor={actor}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
      <div className="cast-technical ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#00289f"
          ></path>
        </svg>
      </div>

      <section className="cast-technical ">
        <h1 className="text-center text-white ">Tal&Pá</h1>
        <h2 className="text-center text-white">Técnica</h2>

        <Container
          fluid
          className="d-flex justify-content-center align-items-center mt-5"
        >
          <Row className="justify-content-center align-items-center">
            {technicalService.techSeason
              .slice()
              .sort((a, b) => {
                if (a.nome < b.nome) return -1; // Se a.nome for menor, a vem primeiro
                if (a.nome > b.nome) return 1; // Se a.nome for maior, b vem primeiro
                return 0; // Se forem iguais, não altera a ordem
              })
              .map((actor: ActorInfoDTO) => (
                <Col
                  xs="auto"
                  key={actor.dataHora}
                  className="d-flex justify-content-center mb-3"
                >
                  <CardsActor
                    name={actor.nome}
                    imgUrl={actor.foto}
                    instagram={actor.instagram}
                    actor={actor}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
      <div className="cast-coord ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#000"
          ></path>
        </svg>
      </div>

      <section className="cast-coord mt20-">
        <h1 className="text-center text-white">Tal&Pá</h1>
        <h2 className="text-center text-white">Coordenadores</h2>

        <Container
          fluid
          className="d-flex justify-content-center align-items-center mt-5"
        >
          <Row className="justify-content-center align-items-center">
            {coordService.coordSeason
              .slice()
              .sort((a, b) => {
                if (a.nome < b.nome) return -1; // Se a.nome for menor, a vem primeiro
                if (a.nome > b.nome) return 1; // Se a.nome for maior, b vem primeiro
                return 0; // Se forem iguais, não altera a ordem
              })
              .map((actor: ActorInfoDTO) => (
                <Col
                  xs="auto"
                  key={actor.dataHora}
                  className="d-flex justify-content-center mb-3"
                >
                  <CardsActor
                    name={actor.nome}
                    imgUrl={actor.foto}
                    instagram={actor.instagram}
                    actor={actor}
                  />
                </Col>
              ))}
          </Row>
        </Container>
        <Footer />
      </section>
    </>
  );
}

export default Cast;
