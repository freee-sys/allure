import { auth } from '@/auth';

const Admin = async () => {
  const session = await auth();

  console.log(session);
  if (!session) return <div>Not authenticated</div>;
  return <div>Adminka</div>;
};
export default Admin;
