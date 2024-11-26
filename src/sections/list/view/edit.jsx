/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Box, Card, Grid, Stack, Button, Container, TextField, Typography } from '@mui/material';

import adminService from 'src/redux/api/adminServices';

import CustomTextField from 'src/components/shared/textfield';

const initialValues = {
  assocCode: '',
  association: '',
  associationManager: '',
  boardMember: '',
  memberRole: '',
  memberType: '',
  termStart: '',
  termEnd: '',
  firstName: '',
  lastName: '',
  identification: '',
  homeAddress: '',
  primaryEmail: '',
};
const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const res = await adminService.getById(id);
      if (res.status === 200) {
        const fetchedData = res.data; // Assign fetched data

        // Set values here after fetching the data
        setValues({
          assocCode: fetchedData?.assocCode || '',
          association: fetchedData?.association || '',
          associationManager: fetchedData?.associationManager || '',
          boardMember: fetchedData?.boardMember || '',
          memberRole: fetchedData?.memberRole || '',
          memberType: fetchedData?.memberType || '',
          termStart: dayjs(fetchedData?.termStart).format('YYYY-MM-DD') || '',
          termEnd: dayjs(fetchedData?.termEnd).format('YYYY-MM-DD') || '',
          firstName: fetchedData?.firstName || '',
          lastName: fetchedData?.lastName || '',
          identification: fetchedData?.identification || '',
          homeAddress: fetchedData?.homeAddress || '',
          primaryEmail: fetchedData?.primaryEmail || '',
        });

        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validations({ [name]: value });
  };
  const validations = (fieldValue = values) => {
    const temp = { ...errors };
    if ('termStart' in fieldValue)
      temp.termStart = fieldValue.termStart ? '' : 'This Field is Required';
    if ('termEnd' in fieldValue) temp.termEnd = fieldValue.termEnd ? '' : 'This Field is Required';
    if ('associationManager' in fieldValue)
      temp.associationManager = fieldValue.associationManager ? '' : 'This Field is Required';
    if ('firstName' in fieldValue)
      temp.firstName = fieldValue.firstName ? '' : 'This Field is Required';
    if ('lastName' in fieldValue)
      temp.lastName = fieldValue.lastName ? '' : 'This Field is Required';
    if ('identification' in fieldValue)
      temp.identification = fieldValue.identification ? '' : 'This Field is Required';
    if ('homeAddress' in fieldValue)
      temp.homeAddress = fieldValue.homeAddress ? '' : 'This Field is Required';
    if ('primaryEmail' in fieldValue) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
      temp.primaryEmail =
        fieldValue.primaryEmail && emailRegex.test(fieldValue.primaryEmail)
          ? ''
          : 'Invalid Email Address';
    }
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === '');
  };

  const handleSubmit = async () => {
    if (validations()) {
      console.log('valid');
      const datas = {
        ...values,
      };
      try {
        const res = await adminService.update(id, datas);
        console.log(res);
        if (res.status === 200) {
          toast.success(res?.data?.message);
          navigate(-1);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Edit Member</Typography>
        <Button onClick={() => navigate(-1)} variant="contained">
          Back
        </Button>
      </Stack>
      <Card sx={{ padding: '1rem' }}>
        {isLoading ? (
          'loading...'
        ) : (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <CustomTextField
                  name="assocCode"
                  label="Assoc Code"
                  disabled
                  value={values?.assocCode}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <CustomTextField
                  name="association"
                  label="Association"
                  disabled
                  value={values?.association}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomTextField
                  name="associationManager"
                  label="Assoc Manager"
                  value={values?.associationManager}
                  onChange={handleOnChange}
                  error={Boolean(errors?.associationManager)}
                  helperText={errors?.associationManager}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomTextField
                  name="boardMember"
                  label="Board Member"
                  disabled
                  value={values?.boardMember}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomTextField
                  name="memberRole"
                  label="Member Role"
                  disabled
                  value={values?.memberRole}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomTextField
                  name="memberType"
                  label="Member Type"
                  disabled
                  value={values?.memberType}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Typography sx={{ paddingLeft: '10px', fontSize: '14px' }}>Term start</Typography>
                <TextField
                  fullWidth
                  value={values?.termStart}
                  name="termStart"
                  onChange={handleOnChange}
                  error={Boolean(errors?.termStart)}
                  helperText={errors?.termStart}
                  type="date"
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <CustomTextField
                  name="termEnd"
                  label="Term End"
                  onChange={handleOnChange}
                  error={Boolean(errors?.termEnd)}
                  value={values?.termEnd}
                  helperText={errors?.termEnd}
                  type="date"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomTextField
                  name="firstName"
                  label="First Name"
                  onChange={handleOnChange}
                  error={Boolean(errors?.firstName)}
                  value={values?.firstName}
                  helperText={errors?.firstName}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomTextField
                  name="lastName"
                  label="Last Name"
                  onChange={handleOnChange}
                  error={Boolean(errors?.lastName)}
                  value={values?.lastName}
                  helperText={errors?.lastName}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <CustomTextField
                  name="identification"
                  label="Identification"
                  onChange={handleOnChange}
                  error={Boolean(errors?.identification)}
                  value={values?.identification}
                  helperText={errors?.identification}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <CustomTextField
                  name="homeAddress"
                  label="Home Address"
                  onChange={handleOnChange}
                  error={Boolean(errors?.homeAddress)}
                  value={values?.homeAddress}
                  helperText={errors?.homeAddress}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <CustomTextField
                  name="primaryEmail"
                  label="Primary Email"
                  onChange={handleOnChange}
                  error={Boolean(errors?.primaryEmail)}
                  value={values?.primaryEmail}
                  helperText={errors?.primaryEmail}
                />
              </Grid>
            </Grid>
            <Box sx={{ marginTop: '2rem', textAlign: 'right' }}>
              <Button variant="contained" size="large" onClick={handleSubmit}>
                Update
              </Button>
            </Box>
          </>
        )}
      </Card>
    </Container>
  );
};

export default Edit;
