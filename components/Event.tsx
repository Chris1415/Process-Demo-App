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
  var currentDate = new Date();
  var eventDate = new Date(
    event?.EventDateRaw?.Year,
    event?.EventDateRaw?.Month,
    event?.EventDateRaw?.Date
  );

  return (
    <main className={styles.main}>
      {/*  {event.MainAsset != null && event.MainAsset != undefined ? 
        () => {
          return event.MainAsset.Renditions.map((rendition, index) => {
          if (rendition.resource != renditionType) {
            return null;
          }
          return 
            <Container>
              <Row>
                <Col md={12}>
                  <Card className={styles.fullHeight}>
                    <Card.Img variant="top" src={rendition.url} />
                  </Card>
                </Col>
              </Row>
            </Container>
          })
        }
      : null} */}
      <Container>
        <Row>
          <Col md={12}>
            <Card className={styles.fullHeight}>
              <Card.Img
                variant="top"
                src={event?.MainAsset?.Renditions[0]?.url ?? ""}
                alt={event?.MainAsset?.title}
              />
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12}>
            <Jumbotron fluid className={styles.centeredText}>
              <Container>
                <h1>{event?.Name}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: event?.Description?.replace("\n", ""),
                  }}
                />
                <hr />
                <div>
                  <p>
                    Date: <b>{event?.EventDate}</b>
                  </p>
                </div>
                <hr />
                <div>
                  <p>Location</p>
                  <p>
                    <b>{event?.Location?.Name}</b>
                  </p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: event?.Location?.Address?.replace("\n", ""),
                    }}
                  />
                </div>
                <hr />
                <div>
                  <p>Organisation</p>
                  {event?.Organizer?.length > 0 ? (
                    <p>
                      <b>
                        {event.Organizer.map((organizer, index) => {
                          return index == event.Organizer.length - 1
                            ? organizer.Name
                            : organizer.Name + ", ";
                        })}
                      </b>
                    </p>
                  ) : null}
                </div>
                <hr />
                {currentDate > eventDate ? (
                  <div>
                    <p>Event vorbei</p>
                    <b>
                      Leider ist das Event abgelaufen und eine Registrierung
                      nicht mehr möglich
                    </b>
                  </div>
                ) : (
                  <>
                    <div className={styles.centeredText}>
                      <b>Phase 3 </b> - Einführung von{" "}
                      <b>Sitecore Ordercloud</b> für B2B, B2B2C und Marketplace
                      Funktionalitäten
                    </div>

                    <Link href="https://www.google.de">
                      <a
                        className={[styles.CardLink, styles.NoBottomSpace].join(
                          " "
                        )}
                      >
                        <p>Jetzt Registrieren</p>
                      </a>
                    </Link>
                  </>
                )}
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {event?.Assets?.length > 0
            ? event.Assets.map((asset, index) => {
                return asset.Renditions.map((rendition, index) => {
                  if (rendition.resource != renditionType) {
                    return null;
                  }
                  return (
                    <Col md={4} key={index} className={styles.spaceS}>
                      <Card className={styles.fullHeight}>
                        <Card.Img variant="top" src={rendition.url} />
                      </Card>
                    </Col>
                  );
                });
              })
            : null}
        </Row>
      </Container>
    </main>
  );
}

export default Event;
