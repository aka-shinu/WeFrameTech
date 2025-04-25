import Layout from '../components/Layout';
import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('../components/Dashboard'), {
  loading: () => <p>Loading...</p>,
});
export default function Home() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}
