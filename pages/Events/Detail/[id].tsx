import Head from 'next/head'
import Header from '../../../components/Header'
import Event from '../../../components/Event'
import Footer from '../../../components/Footer'
import styles from '../../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetStaticProps } from 'next';
import { getEvent } from '../../api/queries/Events/GetEvent';
import { InferGetStaticPropsType } from 'next'
import { RenditionTypes } from '../../../Consts'
import { getEventList } from '../../api/queries/Events/GetEventList'

export default function EventDetail({ event }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{event.Name}</title>
        <meta name="description" content="Event Detail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <Event event={event} renditionType={RenditionTypes.Preview}/>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  var { events } = await getEventList();
  const paths = events.map((innerEvent, index) => (
    {
      params: { id: innerEvent.Id }
    }))
  return {
    paths,
    fallback: true
  }
}

const SomeVariable = process.env.REVALIDATE

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id as string ?? "";
  const { event } = await getEvent(id);
  return {
    props: {
      event
    },
    revalidate: Number(SomeVariable),
  };
};
