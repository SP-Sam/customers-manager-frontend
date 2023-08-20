import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';

import { AppDispatch } from '@/store';
import { fetchCustomers } from '@/store/customers';
import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '@/components/layout';
import PageHeader from '@/components/PageHeader';
import {
  StyledPageDescription,
  StyledPageHeaderButton,
  StyledPageTitle,
} from '@/components/PageHeader/styles';
import CustomButton from '@/components/CustomButton';

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

      <PageHeader>
        <div>
          <StyledPageTitle>Listagem de usuários</StyledPageTitle>
          <StyledPageDescription>
            Escolha um cliente para visualizar os detalhes
          </StyledPageDescription>
        </div>

        <StyledPageHeaderButton href="/customer/create">
          Novo cliente
        </StyledPageHeaderButton>
      </PageHeader>

      <CustomButton
        text="Editar"
        onClick={() => console.log('Editar')}
        outlined
      />
    </Layout>
  );
};

export default Home;
