import React from "react";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { stepI } from "../interfaces";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardImg from "react-bootstrap/esm/CardImg";
import Link from "next/link";

type Props = {
  step: stepI;
  renditionType: string;
};

function Step({ step, renditionType }: Props) {
  return (
    <>
      {" "}
      <Container>
        <Row>
          <Col md={12}>
            <Jumbotron fluid className={styles.centeredText}>
              <Container>
                <Container>
                  <Row>
                    <Col md={6}>
                      <Card className={styles.fullHeight}>
                        <Card.Img
                          variant="top"
                          src={step?.MainAsset?.Renditions[0]?.url ?? ""}
                          alt={step?.MainAsset?.title}
                        />
                      </Card>
                    </Col>
                    <Col md={6}>
                      <h1>{step?.Title}</h1>
                      <div dangerouslySetInnerHTML={{ __html: step?.Text }} />
                      {step.Previous != "" ? (
                        <Link
                          href={{ pathname: "/Steps/Detail/" + step.Previous }}
                        >
                          <a className={styles.CardLink}>
                            <p>Previous Step</p>
                          </a>
                        </Link>
                      ) : null}

                      {step.Next != "" ? (
                        <Link href={{ pathname: "/Steps/Detail/" + step.Next }}>
                          <a className={styles.CardLink}>
                            <p>Next Step</p>
                          </a>
                        </Link>
                      ) : null}
                    </Col>
                  </Row>
                </Container>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Step;