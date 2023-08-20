import React from 'react';
import {
  StatusDot,
  StyledCardContainer,
  StyledCardStatusContainer,
  StyledCardText,
  StyledCardTextBold,
} from './styles';
import CustomButton from '../CustomButton';
import { StatusColors } from '@/enum';
import { CustomerTypes } from '@/types';
import { useRouter } from 'next/router';
import { taxIdMask } from '@/utils/taxIdMask';
import { mobileMask } from '@/utils/mobileMask';

const CustomerCard: React.FC<CustomerTypes> = ({
  id,
  name,
  email,
  taxId,
  phone,
  status,
}) => {
  const router = useRouter();

  return (
    <StyledCardContainer>
      <div>
        <StyledCardTextBold>{name}</StyledCardTextBold>
        <StyledCardText>{email}</StyledCardText>
      </div>

      <div>
        <StyledCardTextBold>{taxIdMask(taxId)}</StyledCardTextBold>
        <StyledCardText>{mobileMask(phone)}</StyledCardText>
      </div>

      <StyledCardStatusContainer>
        <StatusDot bgColor={StatusColors[status!]} />
        {status}
      </StyledCardStatusContainer>

      <CustomButton
        text="Editar"
        onClick={() => router.push(`/customer/edit/${id}`)}
        outlined
      />
    </StyledCardContainer>
  );
};

export default CustomerCard;
