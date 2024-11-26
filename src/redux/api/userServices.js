import { callAPi, callAPiMultiPart } from './http-common';

const login = (data) => callAPi.post('/admin/login', data);
const submitForm = (data) => callAPi.post('/api/user/submit-form', data);
const uploadId = (data) => callAPiMultiPart.post('/api/user/upload-id', data);
const getAll = (page, assocName) => {
  const query = assocName ? `assocCode=${assocName}` : '';
  return callAPi.get(`/api/admin/getAllUsers?page=${page}&${query}`);
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
};

export default authService;
