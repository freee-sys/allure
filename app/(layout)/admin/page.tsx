import { auth } from '@/auth';

const Admin = async () => {
  const session = await auth();
  if (session?.user.role !== 'admin') return <div>Недостаточно привилегий</div>;
  return (
    <main className='flex h-full-screen flex-col gap-10 font-inter'>
      <h2 className='text-xl sm:text-5xl'>Admin Panel</h2>
      <p>Этот путь защищен сюда может попасть только Администратор</p>
    </main>
  );
};
export default Admin;
