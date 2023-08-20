import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import PageHeader from '@/components/PageHeader';
import {
  StyledPageTitle,
  StyledPageDescription,
  StyledPageHeaderButton,
} from '@/components/PageHeader/styles';
import Layout from '@/components/layout';

const EditCustomer: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Editar Cliente | Customers Manager</title>
      </Head>

      <PageHeader>
        <div>
          <StyledPageTitle>Atualizar informações do cliente</StyledPageTitle>
          <StyledPageDescription>
            Modifique as informações do cliente no formulário abaixo
          </StyledPageDescription>
        </div>

        <StyledPageHeaderButton href="#" disable>
          Desativar
        </StyledPageHeaderButton>
      </PageHeader>
    </Layout>
  );
};

export default EditCustomer;
