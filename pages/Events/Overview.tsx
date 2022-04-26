import Head from "next/head";
import Header from "../../components/Header";
import EventList from "../../components/EventList";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetStaticProps } from "next";
import { getEventList } from "../api/queries/Events/GetEventList";
import { InferGetStaticPropsType } from "next";
import { RenditionTypes } from "../../Consts";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ContentOverview({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Content List</title>
        <meta name="description" content="Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
          <Row>
            <Col md={12}>
              <Jumbotron fluid className={styles.centeredText}>
                <Container>
                  <h1>Processes</h1>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      <EventList
        events={events}
        grid={6}
        renditionType={RenditionTypes.Preview}
      />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { events } = await getEventList();
  return {
    props: {
      events,
    },
    revalidate: 1,
  };
};
