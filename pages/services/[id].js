import React from "react"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import Image from "next/image"
import { services } from "@/assets/data/dummydata"

export async function getStaticPaths() {
  const paths = services.map((item) => ({
    params: { id: item._id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const service = services.find((s) => s._id === params.id) || null

  return { props: { service } }
}

const SingleService = ({ service }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{service.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <Title title={service.title} className="title-bg" />
            {service.image && (
              <div className="img py">
                <Image src={service.image} alt={service.title} width={800} height={500} className="round" />
              </div>
            )}
            <div className="desc">
              <p>{service.content.text1}</p>
              <p>{service.content.text2}</p>
              <p>{service.content.text3}</p>
            </div>
          </div>
          <Banner />
          <br />
          <br />
          <br />
        </div>
      </section>
    </>
  );
};

export default SingleService;
