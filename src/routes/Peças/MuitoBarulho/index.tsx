import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Col, Container, Row, Image } from "react-bootstrap";
import * as actorService from "../../../services/actor-services";

import "./styles.css";
import { ActorInfoDTO } from "../../../models/actors";
import CardsActor from "../../../components/CardsActor";

import muitoBarulho from "../../../assets/pecas/muito-barulho/muito-barulho.png";

export function MuitoBarulho() {
  return (
    <>
      <Header />
      <Row className="muito-barulho-top">
        <Col xs={0} md={3}></Col>
        <Col xs={12} md={6} className="">
          <Image src={muitoBarulho} fluid />
        </Col>
      </Row>
      <div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#b62d23"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="#b62d23"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#b62d23"
          ></path>
        </svg>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={12} className="mt-5 order-2 order-md-1 order-xl-1">
            <h2 className="text-center mb-3">A pena e a lei </h2>

            <p className=" font-monospace mb-5">
              Terminava a Segunda Guerra Mundial. Em 18 de junho de 1945,
              aportava no Rio de Janeiro o General Meighs, o mesmo
              navio-transporte norte-americano que levara para a Itália o 3o, 4
              o e 5 o escalões da FEB. Na cidade maravilhosa, a hospedagem de
              Leonato recebe um grupo de jovens pracinhas, tornando-se o cenário
              de encontros cômicos e apaixonados, de intrigas e traições.
              Cláudio e Benedito, leais soldados da artilharia, trilham caminhos
              diferentes para conquistar os corações de Vera e Beatriz,
              enfrentando as trapaças do ardiloso João. No vitorioso regresso,
              deparam ainda com um dilema: como defender a democracia lá fora e
              manter a ditadura aqui dentro? Nessa adaptação da obra de Willian
              Shakespeare, o Grupo Tal&Pá mostra um animado panorama do Brasil
              na década de quarenta, comemorando os 500 anos do país com
              romantismo e muito samba.
            </p>
          </Col>

          <Col xs={12} md={0} className="mt-5"></Col>
        </Row>

        <Row>
          <Image
            src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2000-muito-barulho-por-nada/muito-barulho.jpg?raw=true"
            fluid
          />
        </Row>
      </Container>

      <section className="background-longo-caminho mt10-"></section>
      <h1 className="text-center mt-5"> Elenco - Muito barulho por nada</h1>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center mt-5"
      >
        <Row className="justify-content-center align-items-center">
          {actorService.playsSeason
            .slice()
            .filter((actor: ActorInfoDTO) =>
              actor.temporadas.includes("2000 - Muito barulho por nada")
            )
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
    </>
  );
}

export default MuitoBarulho;
