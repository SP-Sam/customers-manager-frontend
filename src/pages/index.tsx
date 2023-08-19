import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';

import { AppDispatch } from '@/store';
import { fetchCustomers } from '@/store/customers';
import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '@/components/layout';

const Home: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCustomers({}));
  }, [dispatch]);

  return (
    <Layout>
      <Head>
        <title>Clientes | Customers Manager</title>
      </Head>

      <h1>Home</h1>

      <Link href="/customer/create">Cadastrar Cliente</Link>
      <Link href="/customer/edit/1">Editar Cliente</Link>
    </Layout>
  );
};

export default Home;
