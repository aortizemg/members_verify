import { callAPi } from './http-common';

const listUpload = (data) => callAPi.post('/api/admin/list-upload', data);
const sendEmail = (id, data) => callAPi.post(`/api/admin/send-email/${id}`, data);
const getAssoc = () => callAPi.get(`/api/admin/getAssoc`);
const update = (id, data) => callAPi.put(`/api/admin/update/${id}`, data);
const getById = (id) => callAPi.get(`/api/admin/getById/${id}`);
const downloadExcel = () => callAPi.post(`/api/admin/download-excel`);

const adminService = {
  listUpload,
  sendEmail,
  getAssoc,
  update,
  getById,
  downloadExcel,
};

export default adminService;
