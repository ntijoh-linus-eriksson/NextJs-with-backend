import styles from '../../notes/Notes.module.css';

async function getUser(userId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/users/records/${userId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function UserPage({ params }: any) {
  const user = await getUser(params.id);

  return (
    <div>
      <h1>Users/{user.id}</h1>
      <div className={styles.note}>
      <h3>{user.name}</h3>
        <h5>{user.email}</h5>
        <h5>{user.password}</h5>
        <h5>{user.phoneNumber}</h5>
        <h5>{user.adress}</h5>
        <p>{user.created}</p>
      </div>
    </div>
  );
}