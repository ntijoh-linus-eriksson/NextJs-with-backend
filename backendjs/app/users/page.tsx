import Link from 'next/link';
import styles from '../notes/Notes.module.css';
import CreateUser from './CreateUser';

async function getUsers() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/users/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
}

export default async function userPage() {
  const users = await getUsers();

  return(
    <div>
      <h1>users</h1>
      <div className={styles.grid}>
        {users?.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>

      <CreateUser />
    </div>
  );
}

function User({ user }: any) {
  const { id, name, email, password, phoneNumber, adress, created } = user || {};

  return (
    <Link href={`/users/${id}`}>
      <div className={styles.user}>
        <h2>{name}</h2>
        <h5>{email}</h5>
        <h5>{password}</h5>
        <h5>{phoneNumber}</h5>
        <h5>{adress}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}