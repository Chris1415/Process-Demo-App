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
import Script from "next/script";
import { contentI } from "../interfaces";
import { getContentList } from "./api/queries/Contents/GetContentList";
import { GetStaticProps } from "next";
import ContentList from "../components/ContentList";
import { RenditionTypes } from "../Consts";
import EventList from '../components/EventList';
import { getEventList } from './api/queries/Events/GetEventList';
import { eventI } from "../interfaces";

type Props = {
  latestNews: contentI[];
  events: eventI[];
};

export default function Home({ latestNews, events }: Props) {
  return (
    <div>
      <Head>
        <title>GraphQL Sample App</title>
        <meta name="description" content="SUGDE - DEMO APP" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/Moo.css" />
      </Head>
      <Header />
      <div>
        <Script src="/static/js/Moo.js" />
        <Container>
          <Row>
            <Col md={12}>
              <Jumbotron fluid className={styles.centeredText}>
                <Container>
                  <h1>SUGDE</h1>
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
                    <h2>Anstehende Events</h2>
                  </Card.Title>
                  <EventList 
                    events={events}                     
                    grid={6}
                    renditionType={RenditionTypes.Preview}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} className={styles.spaceS}>
              <Card className={styles.fullHeight}>
                <Card.Body className={styles.centeredTextOnly}>
                  <Card.Title>
                    {" "}
                    <h2>Letzte Nachrichten</h2>
                  </Card.Title>
                  <ContentList
                    contents={latestNews}
                    grid={6}
                    renditionType={RenditionTypes.Preview}
                    displayNumberResults={false}
                  />
                  {/* <Link href={{ pathname: '/Content/Overview/' }}><a className={styles.CardLink}><p>Alle anzeigen</p></a></Link> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12} className={styles.spaceS}>
              <Card className={styles.fullHeight}>
                <Card.Body className={styles.centeredTextOnly}>
                  <Card.Title className={styles.spaceXL}>
                    <h2> Das könnte Sie noch interessieren...</h2>
                  </Card.Title>
                  <Card.Text className={styles.spaceXL}>
                    <Container>
                      <Row>
                        <Col md={3} className={styles.spaceS}>
                          <Card className={styles.fullHeight}>
                            <Card.Body className={styles.centeredTextOnly}>
                              <Card.Title className={styles.spaceXL}>
                                <h2> Adobe </h2>
                              </Card.Title>
                              <Card.Text className={styles.spaceXL}></Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={3} className={styles.spaceS}>
                          <Card className={styles.fullHeight}>
                            <Card.Body className={styles.centeredTextOnly}>
                              <Card.Title className={styles.spaceXL}>
                                <h2> Kentico </h2>
                              </Card.Title>
                              <Card.Text className={styles.spaceXL}></Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={3} className={styles.spaceS}>
                          <Card className={styles.fullHeight}>
                            <Card.Body className={styles.centeredTextOnly}>
                              <Card.Title className={styles.spaceXL}>
                                <h2> Wordpress </h2>
                              </Card.Title>
                              <Card.Text className={styles.spaceXL}></Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={3} className={styles.spaceS}>
                          <Card className={styles.fullHeight}>
                            <Card.Body className={styles.centeredTextOnly}>
                              <Card.Title className={styles.spaceXL}>
                                <h2> Contentful </h2>
                              </Card.Title>
                              <Card.Text className={styles.spaceXL}></Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                    <hr/>
                    <p><b>Phase 4</b> - Einführung von <b>Sitecore CDP</b> zur Verbesserung der Personalisierung</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12} className={styles.spaceS}>
              <Card className={styles.fullHeight}>
                <Card.Text className={styles.spaceXL}>
                  <div data-mooform-id="2d05d3a7-54b9-4d8b-87cb-85b1a10404e6"></div>
                  <hr/>
                  <p className={styles.centeredText}><b>Phase 2 </b> - Einführung von <b>Sitecore Send</b> für Newsletter und Marketing Automation features</p>
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={6} className={styles.spaceS}>
              <Card className={styles.fullHeight}>
                <Card.Body className={styles.centeredTextOnly}>
                  <Card.Img
                    variant="top"
                    alt="Nachrichtenarchiv"
                    src={
                      "https://chiad.stylelabsdemo.com/api/public/content/30aca12766554d21896258478d8395ca?v=daf29c1f"
                    }
                  />
                  <Card.Title>
                    {" "}
                    <h2>Nachrichtenarchiv</h2>
                  </Card.Title>
                  <Card.Text className={styles.spaceXL}>
                    <div>Einmal im Archiv nach alten Nachrichten stöbern</div>
                  </Card.Text>
                  <Link href={{ pathname: "/Content/Overview/" }}>
                    <a className={styles.CardLink}>
                      <p>Mehr entdecken</p>
                    </a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className={styles.spaceS}>
              <Card className={styles.fullHeight}>
                <Card.Body className={styles.centeredTextOnly}>
                  <Card.Img
                    variant="top"
                    alt="Alle Events"
                    src={
                      "https://chiad.stylelabsdemo.com/api/public/content/ce987d67ecea4b87941ab54a0a1c549c?v=5e85833e"
                    }
                  />
                  <Card.Title>
                    {" "}
                    <h2>Alle Events</h2>
                  </Card.Title>
                  <Card.Text className={styles.spaceXL}>
                    <div>
                      Welche Events stehen an? Welche sind schon vorbei? Schaut
                      einfach nach!
                    </div>
                  </Card.Text>
                  <Link href={{ pathname: "/Events/Overview/" }}>
                    <a className={styles.CardLink}>
                      <p>Mehr entdecken</p>
                    </a>
                  </Link>
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
  const { content } = await getContentList(false, "", 2);
  const {events } = await getEventList(2);
  return {
    props: {
      latestNews: content,
      events: events
    },
    revalidate: 1,
  };
};
