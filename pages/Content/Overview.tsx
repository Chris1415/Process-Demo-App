import Head from 'next/head'
import Header from '../../components/Header'
import ContentSearch from '../../components/ContentSearch'
import Footer from '../../components/Footer'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetStaticProps } from 'next';
import { getContentList } from '../api/queries/Contents/GetContentList';
import { InferGetStaticPropsType } from 'next'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { RenditionTypes } from '../../Consts'

export default function ContentOverview({ content }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>News</title>
        <meta name="description" content="News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
          <Row>
            <Col md={12}>
              <Jumbotron fluid className={styles.centeredText}>
                <Container>
                  <h1>Archiv</h1> 
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
        <ContentSearch contents={content} />
        {/* <ContentList contents={content} grid={4} renditionType={RenditionTypes.Original}/> */}
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { content } = await getContentList(false);
  return {
    props: {
      content
    },
    revalidate: 1,
  };
};
