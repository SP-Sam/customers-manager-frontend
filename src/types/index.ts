import { Status } from '@/enum';

export type CustomerTypes = {
  id: number;
  name: string;
  email: string;
  taxId: string;
  phone: string;
  status: Status | null;
};

export type CustomerStoreTypes = {
  data: CustomerTypes[];
  customerToUpdate: CustomerTypes;
};
