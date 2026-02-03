import Layout from "@/components/common/Layout"
import "@/styles/main.scss"


export default function App({ Component, pageProps }) {
   // Check if the page has a custom layout, else use default Layout
   const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

   return getLayout(<Component {...pageProps} />);
}
