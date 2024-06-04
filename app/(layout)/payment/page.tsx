import { auth } from '@/auth';

const Payment = async () => {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;

  return (
    <div>
      <h2>Оплата</h2>
      <p>Вы авторизованы</p>
    </div>
  );
};
export default Payment;
