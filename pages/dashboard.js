import Head from "next/head";
import AdminLayout from '@/components/common/AdminLayout';
import Card from '@/components/dashboard/Card';
import BlogList from '@/components/dashboard/BlogList';
import { FiFileText, FiUsers, FiEye, FiMessageCircle, FiBriefcase } from 'react-icons/fi';
import { VscFileSubmodule } from "react-icons/vsc";
import { useState } from "react";
import PrivateRoute from "@/components/common/PrivateRoute";
import { dashboardCounts } from "@/assets/data/dummydata";


const AdminDashboard = ({ blogCount, monthlyBlogCount, userCount, monthlyUserCount, caseCount, monthlyCaseCount, contactCount, monthlyContactCount, jobApplicationCount, monthlyJobApplicationCount }) => {
  const [currentBlogCount, setCurrentBlogCount] = useState(blogCount);

  const onBlogChange = () => {
    setCurrentBlogCount((prev) => prev > 0 ? prev - 1 : prev);
  };

  return (
    <PrivateRoute>
      <AdminLayout>
        <div className="cards">
          <Card 
            title="Total Blogs" 
            icon={<FiFileText size={24} />} 
            value={currentBlogCount}
            description={`+${monthlyBlogCount}`} 
          />
          <Card 
            title="Total Users" 
            icon={<FiUsers size={24} />} 
            value={userCount}
            description={`+${monthlyUserCount}`}
          />
          <Card 
            title="Page Views" 
            icon={<FiEye size={24} />} 
            value="45.2K" 
            description="+23%" 
          />
          <Card 
            title="Projects" 
            icon={<VscFileSubmodule size={24} />} 
            value={caseCount}
            description={`+${monthlyCaseCount}`}
          />
          <Card 
            title="Client Messages" 
            icon={<FiMessageCircle size={24} />} 
            value={contactCount}
            description={`+${monthlyContactCount}` }
          />
          <Card 
            title="Job Applications" 
            icon={<FiBriefcase size={24} />} 
            value={jobApplicationCount}
            description={`+${monthlyJobApplicationCount}`}
          />
          <br />
        </div>
        <BlogList onBlogChange={onBlogChange} />
      </AdminLayout>
    </PrivateRoute>
  );
};

export async function getServerSideProps() {
  const {
    blogs,
    users,
    cases,
    contacts,
    jobApplications,
  } = dashboardCounts

  return {
    props: {
      blogCount: blogs.total,
      monthlyBlogCount: blogs.monthly,
      userCount: users.total,
      monthlyUserCount: users.monthly,
      caseCount: cases.total,
      monthlyCaseCount: cases.monthly,
      contactCount: contacts.total,
      monthlyContactCount: contacts.monthly,
      jobApplicationCount: jobApplications.total,
      monthlyJobApplicationCount: jobApplications.monthly,
    },
  }
}

export default AdminDashboard;
