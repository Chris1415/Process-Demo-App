import Head from "next/head";
import Header from "../../../components/Header";
import Content from "../../../components/Content";
import Footer from "../../../components/Footer";
import styles from "../../../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetStaticProps } from "next";
import { getContent } from "../../api/queries/Contents/GetContent";
import { InferGetStaticPropsType } from "next";
import { getContentList } from "../../api/queries/Contents/GetContentList";
import { RenditionTypes } from "../../../Consts";

export default function ContentDetail({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Content Detail Page</title>
        <meta name="description" content="Content Detail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content content={content} renditionType={RenditionTypes.Preview} />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  var { content } = await getContentList(false);
  const paths = content.map((innerContent, index) => ({
    params: { id: innerContent.Id },
  }));

  return {
    paths,
    fallback: true,
  };
}

const SomeVariable = process.env.REVALIDATE;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = (context?.params?.id as string) ?? "";
  const { content } = await getContent(id);
  return {
    props: {
      content,
    },
    revalidate: Number(SomeVariable),
  };
};
