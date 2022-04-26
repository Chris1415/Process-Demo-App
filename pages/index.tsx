import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import { GetStaticProps } from "next";
import { RenditionTypes } from "../Consts";
import EventList from "../components/EventList";
import { getEventList } from "./api/queries/Events/GetEventList";
import { eventI } from "../interfaces";

type Props = {
  events: eventI[];
};

export default function Home({ events }: Props) {
  return (
    <div>
      <Head>
        <title>Rosen Sample App</title>
        <meta name="description" content="SUGDE - DEMO APP" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/Moo.css" />
      </Head>
      <Header />
      <div>
        <Container>
          <Row>
            <Col md={12}>
              <Jumbotron fluid className={styles.centeredText}>
                <Container>
                  <h1>Rosen</h1>
                  <div>Immer auf dem neusten Stand sein</div>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12} className={styles.spaceS}>
              <Card className={styles.fullHeight}>
                <Card.Body className={styles.centeredTextOnly}>
                  <Card.Title>
                    {" "}
                    <h2>Neuste Prozesse</h2>
                  </Card.Title>
                  <EventList
                    events={events}
                    grid={6}
                    renditionType={RenditionTypes.Preview}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { events } = await getEventList(2);
  return {
    props: {
      events: events,
    },
    revalidate: 1,
  };
};
