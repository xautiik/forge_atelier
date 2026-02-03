import React from "react"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import Image from "next/image"
import { blogs } from "@/assets/data/dummydata"

export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({
    params: { id: blog._id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = blogs.find((b) => b._id === params.id) || null

  return { props: { post } }
}

const SinglePost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <Title title={post.title} className="title-bg" />
            <br />
            <TitleSm title={`Updated on ${new Date(post.updatedAt).toLocaleDateString(
              'en-US', 
            {
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            }
            )}`} />
            <br />
            <div className="reading-time">
            <TitleSm title={` ${post.readingTime} min read`} />
          </div>
            {post.image && (
              <div className="img py">
                <Image src={post.image} alt={post.title} width={800} height={500} className="round" />
              </div>
            )}
            <div className="desc">
              <p>{post.content1}</p>
            </div>
          </div>
          <Banner />
          <div className="heading-title">
            {post.image2 && (
            <div className="img py">
                <Image src={post.image2} width={800} height={500} className="round" />
            </div> )}
            {post.content2 && (
            <div className="desc">
            <p>{post.content2}</p>
            </div>)}
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
