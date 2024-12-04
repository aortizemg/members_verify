import { callAPi } from './http-common';

export const adminGenerateExcel = async (id) => {
  try {
    const res = await callAPi.post('/api/admin/download-excel', {
      responseType: 'arraybuffer',
    });
    console.log('res', res.data);
    // Create a blob from the Excel response
    const link = document.createElement('a');
    const fileName = 'file.extension';
    link.setAttribute('download', fileName);
    link.href = URL.createObjectURL(new Blob([res.data]));
    document.body.appendChild(link);
    link.click();
    link.remove();

    return res;
  } catch (error) {
    console.error('Error generating Excel file:', error);
    return error;
  }
};
