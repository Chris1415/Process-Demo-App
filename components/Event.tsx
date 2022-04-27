import React from "react";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { eventI } from "../interfaces";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardImg from "react-bootstrap/esm/CardImg";
import Link from "next/link";

type Props = {
  event: eventI;
  renditionType: string;
};

function Event({ event, renditionType }: Props) {
  return (
    <main className={styles.main}>
      <Container>
        <Row>
          <Col md={12}>
            <Jumbotron fluid className={styles.centeredText}>
              <Container>
                <h1>{event?.Name}</h1>
                <hr />
                <Container>
                  <Row>
                    <Col md={6}>
                      <Card className={styles.fullHeight}>
                        <Card.Img
                          variant="top"
                          src={event?.MainAsset?.Renditions[0]?.url ?? ""}
                          alt={event?.MainAsset?.title}
                        />
                      </Card>
                    </Col>
                    <Col md={6}>
                      <div>{event?.Description}</div>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col md={12}>
            <h2>Steps</h2>
          </Col>
        </Row>
        <Row>
          {event?.Steps?.length > 0
            ? event.Steps.map((step, index) => (
                <Col key={step.Id} md={3}>
                  <Card className={styles.fullHeight} key={index}>
                    <Card.Img
                      variant="top"
                      src={step?.MainAsset?.Renditions[0]?.url}
                      alt={step?.MainAsset?.title}
                    />
                    <Card.Body className={styles.space}>
                      <Card.Title>{step?.Title}</Card.Title>
                      <Card.Text className={styles.spaceXL}>
                        <div dangerouslySetInnerHTML={{ __html: step?.Text }} />
                      </Card.Text>
                      <Link href={{ pathname: "/Steps/Detail/" + step?.Id }}>
                        <a className={styles.CardLink}>
                          <p>Details</p>
                        </a>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : null}
        </Row>
      </Container>
      <hr />
      <Container>
        {event?.Assets?.length > 0
          ? event.Assets.map((asset) => (
              <>
                <Row>
                  <Col md={12}>
                    <h2>More Assets</h2>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <Card className={styles.fullHeight}>
                      <Card.Img
                        variant="top"
                        src={asset?.Renditions[0]?.url ?? ""}
                        alt={asset?.title}
                      />
                    </Card>
                  </Col>
                </Row>
              </>
            ))
          : null}
      </Container>
    </main>
  );
}

export default Event;
