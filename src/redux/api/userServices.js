import { callAPi, callAPiMultiPart } from './http-common';

const login = (data) => callAPi.post('/admin/login', data);
const accessToken = () => callAPi.post('/api/user/get-access-token');
const submitForm = (data) => callAPi.post('/api/user/submit-form', data);
const uploadId = (data) => callAPiMultiPart.post('/api/user/upload-id', data);
const getAll = (page, assocName, expiringFilter, filterName) => {
  const params = new URLSearchParams();

  // Add query parameters conditionally
  if (page !== undefined) params.append('page', page);
  if (filterName) params.append('filterName', filterName);
  if (assocName) params.append('assocCode', assocName);
  if (expiringFilter) params.append('expiringFilter', expiringFilter);

  // Return the API call with the generated query string
  return callAPi.get(`/api/admin/getAllUsers?${params.toString()}`);
};

const getById = (id) => callAPi.get(`/api/admin/getUserById/${id}`);
const getStats = (id) => callAPi.get(`/api/admin/getStats`);
const Update = (id, data) => callAPi.put(`/api/admin/updateUser/${id}`, data);
const deletee = (id, data) => callAPi.delete(`/api/admin/deleteUser/${id}`, data);

const authService = {
  login,
  getStats,
  submitForm,
  uploadId,
  getAll,
  getById,
  Update,
  deletee,
  accessToken,
};

export default authService;
