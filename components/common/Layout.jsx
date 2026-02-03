import { useRouter } from 'next/router';
import Footer from "./Footer"
import Header from "./Header"

const Layout = (props) => {

  const router = useRouter();
  const hiddenPaths = ['/dashboard', '/admin/settings',
                       '/admin/notification','/admin/login','/admin/signup',
                       '/admin/clients','/admin/client-messages/[id]',
                       '/admin/jobs','/admin/job-application/[id]',
                       '/admin/users','/admin/users/[username]','/admin/profile/[username]', 
                       '/admin/services', '/admin/services/[id]', '/admin/services/add-service', '/admin/services/edit/[id]', 
                       '/admin/portfolio','/admin/portfolio/[id]', '/admin/portfolio/add-portfolio', '/admin/portfolio/edit/[id]',
                       '/admin/blog','/admin/blog/[id]', '/admin/blog/add-blog', '/admin/blog/edit/[id]' 
                      ];
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
