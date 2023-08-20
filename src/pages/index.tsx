import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import { AppDispatch, RootState } from '@/store';
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
import CustomerCard from '@/components/CustomerCard';

const Home: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: customers } = useSelector(
    (state: RootState) => state.customers
  );

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

      {customers.map(({ id, name, email, taxId, phone, status }) => (
        <CustomerCard
          key={id}
          id={id}
          name={name}
          email={email}
          taxId={taxId}
          phone={phone}
          status={status}
        />
      ))}
    </Layout>
  );
};

export default Home;
