import { useRouter } from 'next/router';
import Footer from "./Footer"
import Header from "./Header"

const Layout = (props) => {

  const router = useRouter();
  const hiddenPaths = [];
  const isHiddenPath = hiddenPaths.includes(router.pathname);

  return (
    <>
       {!isHiddenPath && <Header />}
      <main>{props.children}</main>
      {!isHiddenPath && <Footer />}
    </>
  )
}

export default Layout
