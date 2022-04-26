import React from 'react';
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import { contentI } from '../interfaces';
import Jumbotron from 'react-bootstrap/Jumbotron'

type Props = {
  content: contentI;
  renditionType: string;
};

function Content({ content, renditionType }: Props) {
  return (
    <main className={styles.main}>
      <Container>
        <Row>
          <Col md={12}>
            <Jumbotron fluid className={styles.centeredText}>
              <Container>
                <h1>{content?.Name}</h1>
                <div dangerouslySetInnerHTML={{
                  __html: content?.Introduction,
                }} />
                <hr/>
                <div dangerouslySetInnerHTML={{
                  __html: content?.Content,
                }} />
                 <hr/>
                <div>
                <p>Author: <b>{content?.Author}</b></p>
                <hr/>
                <p> Release Date: <b>{content?.ReleaseDate}</b></p>
                </div>
                <hr/>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>


      <Container>
        <Row>
          {content?.assets?.length > 0
            ? content.assets.map((asset, index) => {
              return asset.Renditions.map((rendition, index) => {
              if (rendition.resource != renditionType) {
                return null;
              }
              return <Col md={4} key={index} className={styles.spaceS}>
                <Card className={styles.fullHeight}>
                  <Card.Img variant="top" src={rendition.url} alt={asset.title} />
                  <Card.Body>
                    <Card.Title>{asset.title}</Card.Title>
                    <Card.Text className={styles.spaceXL}>
                      <p>{asset.fileName}</p>
                    </Card.Text>
                    {/* <Button className={styles.bottomAligned} variant="primary">Resource: {asset.resource}</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              })
            })
            : null}
        </Row>
      </Container>
    </main >
  );
}

export default Content;
