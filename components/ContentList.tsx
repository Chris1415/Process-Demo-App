import React from "react";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { contentI } from "../interfaces";
import Alert from "react-bootstrap/Alert";

type Props = {
  contents: contentI[];
  grid: number;
  renditionType: string;
  displayNumberResults: boolean
};

function ContentList({ contents, grid, renditionType, displayNumberResults }: Props) {
  return (
    <main className={styles.main}>
      <div>
      {displayNumberResults 
      ? <Container>
        <Row>
          <Col md={12}>
            <div className={styles.spaceS}>{contents.length} Ergebnis(se) gefunden</div>
          </Col>
        </Row>
      </Container>
      : null}
        <Container>
          <Row>
            {contents?.length > 0
              ? contents.map((content, index) => (
                  <Col md={grid} className={styles.spaceS}>
                    <Card className={styles.fullHeight} key={index}>
                      {content?.assets?.length > 0
                        ? content.assets.map((asset, index) => {
                            return asset.Renditions.map((rendition, index) => {
                              if (rendition.resource != renditionType) {
                                // console.log(rendition.resource);
                                return null;
                              }
                              return (
                                <Card.Img variant="top" src={rendition?.url} alt={asset.title} />
                              );
                            });
                          })
                        : null}
                      <Card.Body className={styles.space}>
                        <Card.Title>{content.Name}</Card.Title>
                        <Card.Text className={styles.spaceXL}>
                          <path
                            dangerouslySetInnerHTML={{
                              __html: content.Introduction,
                            }}
                          />
                          <Alert variant="dark" className={styles.spaceSTop}>
                            Release Date: <b>{content.ReleaseDate}</b>
                          </Alert>
                        </Card.Text>
                        <Link
                          href={{ pathname: "/Content/Detail/" + content.Id }}
                        >
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

export default ContentList;
