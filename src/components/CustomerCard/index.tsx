import React from 'react';
import {
  StyledStatusDot,
  StyledCustomerCard,
  StyledCardNameContainer,
  StyledCardPhoneContainer,
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
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { fetchCustomerById } from '@/store/customers';

const CustomerCard: React.FC<CustomerTypes> = ({
  id,
  name,
  email,
  taxId,
  phone,
  status,
}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleEdit = () => {
    dispatch(fetchCustomerById(id));
    router.push(`/customer/edit/${id}`);
  };

  return (
    <StyledCustomerCard>
      <StyledCardNameContainer>
        <StyledCardTextBold>{name}</StyledCardTextBold>
        <StyledCardText>{email}</StyledCardText>
      </StyledCardNameContainer>

      <StyledCardPhoneContainer>
        <StyledCardTextBold>{taxIdMask(taxId)}</StyledCardTextBold>
        <StyledCardText>{mobileMask(phone)}</StyledCardText>
      </StyledCardPhoneContainer>

      <StyledCardStatusContainer>
        <StyledStatusDot bgColor={StatusColors[status!]} />
        {status}
      </StyledCardStatusContainer>

      <CustomButton text="Editar" onClick={handleEdit} outlined />
    </StyledCustomerCard>
  );
};

export default CustomerCard;
