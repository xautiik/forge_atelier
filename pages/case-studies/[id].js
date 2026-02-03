import React from "react"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import Image from "next/image"
import { caseStudies } from "@/assets/data/dummydata"

export async function getStaticPaths() {
  const paths = caseStudies.map((item) => ({
    params: { id: item._id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const caseStudy = caseStudies.find((c) => c._id === params.id) || null

  return { props: { caseStudy } }
}

const SingleCase = ({ caseStudy }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <Title title={caseStudy.title} className="title-bg" />
            <br />
            <TitleSm title={caseStudy.category} />
            <br />
            {caseStudy.image && (
              <div className="img py">
                <Image src={caseStudy.image} alt={caseStudy.title} width={800} height={500} className="round" />
              </div>
            )}
            <div className="desc">
              <p>{caseStudy.description}</p>
            </div>
            {caseStudy.title2 && caseStudy.description2 && (
              <div className="desc">
                <TitleSm title={caseStudy.title2} />
                <p>{caseStudy.description2}</p>
              </div>
            )}
          </div>
          <Banner />
          <div className="heading-title">
            {caseStudy.image2 && (
            <div className="img py">
                <Image src={caseStudy.image2} alt={caseStudy.title} width={800} height={500} className="round" />
            </div> )}
            {caseStudy.title3 && caseStudy.description3 && (
              <div className="desc">
                <TitleSm title={caseStudy.title3} />
                <p>{caseStudy.description3}</p>
              </div>
            )}
            {caseStudy.image3 && (
            <div className="img py">
                <Image src={caseStudy.image3} width={800} height={500} className="round" />
            </div> )}
            {caseStudy.title4 && caseStudy.description4 && (
              <div className="desc">
                <TitleSm title={caseStudy.title4} />
                <p>{caseStudy.description4}</p>
              </div>
            )}
          </div>
        </div>
        <br />
        <br />
      </section>
    </>
  );
};

export default SingleCase;
