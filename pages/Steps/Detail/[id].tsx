import Head from 'next/head'
import Header from '../../../components/Header'
import Step from '../../../components/Step'
import Footer from '../../../components/Footer'
import styles from '../../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetStaticProps } from 'next';
import { getStep } from '../../api/queries/Steps/GetStep';
import { InferGetStaticPropsType } from 'next'
import { RenditionTypes } from '../../../Consts'
import { getSteps } from '../../api/queries/Steps/GetSteps'

export default function StepDetail({ step }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{step.Title}</title>
        <meta name="description" content="Event Detail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <Step step={step} renditionType={RenditionTypes.Preview}/>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  var { steps } = await getSteps();
  const paths = steps.map((innerStep, index) => (
    {
      params: { id: innerStep.Id }
    }))
  return {
    paths,
    fallback: true
  }
}

const SomeVariable = process.env.REVALIDATE

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id as string ?? "";
  const { step } = await getStep(id);
  return {
    props: {
      step
    },
    revalidate: Number(SomeVariable),
  };
};
