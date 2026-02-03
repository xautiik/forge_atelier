import Head from "next/head";
import Sidebar from '@/components/dashboard/Sidebar';
import Navbar from '@/components/dashboard/Navbar';


const AdminLayout = ({children}) => {
  return (
    <>
      <Head>
        <title>Admin Dashboard - Forge Atelier</title>
      </Head>
      <div>
        <aside>
          <Sidebar />
        </aside>
    </div>
    <main className="main-content">
        <Navbar />
        <hr />
        <br />
        {children}
    </main>
    </>
  )
}

export default AdminLayout;