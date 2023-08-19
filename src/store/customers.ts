import { api } from '@/services/api';
import { CustomerStoreTypes, CustomerTypes } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface DataParams {
  page?: number;
  perPage?: number;
  searchTerm?: string;
  type?: string;
}

const initialState: CustomerStoreTypes = {
  data: [],
  customerToUpdate: {
    id: 0,
    name: '',
    email: '',
    taxId: '',
    phone: '',
    status: null,
  },
};

export const createCustomer = createAsyncThunk(
  'customers/createCustomer',
  async (data: CustomerTypes) => {
    const response = await api.post('/customers', data);

    return response.data;
  }
);

export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async ({ page = 1, perPage = 20 }: DataParams) => {
    const response = await api.get('/customers', { params: { page, perPage } });

    return response.data;
  }
);

export const fetchCustomerById = createAsyncThunk(
  'customers/fetchCustomerById',
  async (customerId: number) => {
    const response = await api.get(`/customers/${customerId}`);

    return response.data;
  }
);

export const updateCustomer = createAsyncThunk(
  'customers/updateCustomer',
  async (data: CustomerTypes) => {
    const { id } = data;

    const response = await api.patch(`/customers/${id}`);

    return response.data;
  }
);

export const disableCustomer = createAsyncThunk(
  'customers/disableCustomer',
  async (id: string) => {
    const response = await api.delete(`/customers/${id}`);

    return response.data;
  }
);

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(fetchCustomerById.fulfilled, (state, action) => {
      state.customerToUpdate = action.payload;
    });
  },
});

export default customersSlice.reducer;
