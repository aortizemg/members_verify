import { callAPi } from './http-common';

const listUpload = (data) => callAPi.post('/api/admin/list-upload', data);
const sendEmail = (id, data) => callAPi.post(`/api/admin/send-email/${id}`, data);
const getAssoc = () => callAPi.get(`/api/admin/getAssoc`);
const update = (id, data) => callAPi.put(`/api/admin/update/${id}`, data);
const getById = (id) => callAPi.get(`/api/admin/getById/${id}`);
const downloadExcel = async () => {
  try {
    const response = await callAPi.get(`/api/admin/download-excel`, {
      responseType: 'blob', // Specify that we expect a blob response
    });

    // Create a URL for the blob
    const url = window.URL.createObjectURL(new Blob([response.data]));

    // Create a link element
    const a = document.createElement('a');
    a.href = url;
    a.download = 'All Members.xlsx'; // Specify the filename for the downloaded file
    document.body.appendChild(a);
    a.click(); // Programmatically click the anchor to trigger the download
    a.remove(); // Clean up by removing the anchor from the document
    window.URL.revokeObjectURL(url); // Free up memory by revoking the object URL
  } catch (error) {
    console.error('Error downloading the Excel file:', error);
  }
};

const adminService = {
  listUpload,
  sendEmail,
  getAssoc,
  update,
  getById,
  downloadExcel,
};

export default adminService;
