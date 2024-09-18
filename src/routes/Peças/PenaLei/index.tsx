import Footer from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Col, Container, Row, Image } from "react-bootstrap";
import * as actorService from "../../../services/actor-services";

import "./styles.css";
import { ActorInfoDTO } from "../../../models/actors";
import CardsActor from "../../../components/CardsActor";

import penaTop from "../../../assets/pecas/pena-lei/pena-lei.png";

export function PenaLei() {
  return (
    <>
      <Header />
      <Row className="pena-top">
        <Col xs={0} md={3}></Col>
        <Col xs={12} md={6} className="">
          <Image src={penaTop} fluid />
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
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            fill="#fcf0d8"
          ></path>
        </svg>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={12} className="mt-5 order-2 order-md-1 order-xl-1">
            <h2>A pena e a lei </h2>

            <p className=" font-monospace">
              A peça escolhida pelo terceiro grupo de teatro dentro do projeto
              “Texto em Cena” é A Pena e a Lei, de Ariano Suassuna, escrita em
              1959. Para criar esta obra, o mestre Ariano Suassuna foi buscar
              inspiração no Mamulengo, uma modalidade de Teatro de Bonecos de
              tradição popular nordestina. O Mamulengo é feito por homens
              simples do povo, com o objetivo de brincar, e ao mesmo tempo,
              criticar os desmandos sociais que trucidam a população pobre.
              Ariano Suassuna, é considerado o principal defensor da cultura
              regional, dos produtos nacionais e das manifestações populares,
              como a literatura de cordel, o maracatu rural, o bumba-meu-boi.
              Assim, o grupo Tal&Pá pretende divulgar o folclore nordestino e
              criar um meio de aproximação entre os grupos sociais, afirmando
              sua identidade cultural, que por sua vez faz parte da própria
              identidade cultural do povo brasileiro.
            </p>

            <p className=" font-monospace">
              A pena e a lei é uma súmula do teatro. Síntese de fontes populares
              e de exigente inspiração erudita, "Commedia dell'Arte" e auto
              sacramental, sátira de costumes e mensagem teológica, divertimento
              nordestino e proposição de alcance genérico, herança de valores
              tradicionais e saída para uma vigorosa dramaturgia coletiva,
              história concreta e vôo para regiões abstratas, mamulengos e
              metafísica, a peça inscreve-se, em favor, na vanguarda
              incontestável do palco moderno.
            </p>
          </Col>

          <Col xs={12} md={0} className="mt-5"></Col>
        </Row>

        <Row>
          <Image src="https://github.com/LucasRuizMartins/midia-arenart/blob/main/temporadas/2001-a-pena-e-a-lei/a-pena-e-a-lei.jpg?raw=true" fluid />
        </Row>
      </Container>

      <section className="background-longo-caminho mt10-"></section>

      <Container
        fluid
        className="d-flex justify-content-center align-items-center mt-5"
      >
        <h1> Elenco - Longo caminho</h1>
        <Row className="justify-content-center align-items-center">
          {actorService.playsSeason
            .slice()
            .filter((actor: ActorInfoDTO) =>
              actor.temporadas.includes("2001 - A pena e a Lei")
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

export default PenaLei;
