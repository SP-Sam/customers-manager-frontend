import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NextPage } from 'next';
import Head from 'next/head';

import { AppDispatch, RootState } from '@/store';
import { fetchCustomers, successCreate } from '@/store/customers';
import Layout from '@/components/layout';
import PageHeader from '@/components/PageHeader';
import {
  StyledPageDescription,
  StyledPageHeaderButton,
  StyledPageTitle,
} from '@/components/PageHeader/styles';
import CustomerCard from '@/components/CustomerCard';
import {
  CardsContainer,
  CustomersCountWrapper,
  NoCustomersContainer,
} from '@/components/CustomerCard/styles';

const Home: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: customers } = useSelector(
    (state: RootState) => state.customers
  );

  useEffect(() => {
    dispatch(fetchCustomers());
    dispatch(successCreate(false));
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

      <CardsContainer>
        {customers.length === 0 && (
          <NoCustomersContainer>
            <h3>Não há clientes cadastrados</h3>
          </NoCustomersContainer>
        )}
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
      </CardsContainer>

      <CustomersCountWrapper>
        Exibindo {customers.length} clientes
      </CustomersCountWrapper>
    </Layout>
  );
};

export default Home;
