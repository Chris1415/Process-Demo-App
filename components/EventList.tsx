import React from "react";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import Jumbotron from "react-bootstrap/Jumbotron";
import Alert from "react-bootstrap/Alert";
import { eventI } from "../interfaces";

type Props = {
  events: eventI[];
  grid: number;
  renditionType: string;
};

function EventList({ events, grid, renditionType }: Props) {
  return (
    <main className={styles.main}>
      <div>
        <Container>
          <Row>
            {events?.length > 0
              ? events.map((event, index) => (
                  <Col md={grid} className={styles.spaceS}>
                    <Card className={styles.fullHeight} key={index}>
                      <Card.Img
                        variant="top"
                        src={event?.MainAsset?.Renditions[0]?.url ?? ""}
                        alt={event?.MainAsset?.title}
                      />
                      <Card.Body className={styles.space}>
                        <Card.Title>{event.Name}</Card.Title>
                        <Card.Text className={styles.spaceXL}>
                          Number of Steps: {event.Steps.length}
                        </Card.Text>
                        <Link href={{ pathname: "/Events/Detail/" + event.Id }}>
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
      </div>
    </main>
  );
}

export default EventList;
