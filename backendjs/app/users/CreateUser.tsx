"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [adress, setAdress] = useState('');


  const router = useRouter();

  const create = async() => {

    await fetch('http://127.0.0.1:8090/api/collections/users/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phoneNumber,
        adress
      }),
    });

    setName('')
    setEmail('')
    setPassword('')
    setPhoneNumber('')
    setAdress('')

    router.refresh();
  }

  return (
    <form onSubmit={create}>
      <h3>Register</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="PhoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Adress"
        value={adress}
        onChange={(e) => setAdress(e.target.value)}
      />
      <button type="submit">
        Register
      </button>
    </form>
  );
}