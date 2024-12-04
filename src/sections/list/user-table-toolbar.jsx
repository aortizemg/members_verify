/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {
  Box,
  List,
  Select,
  Popover,
  MenuItem,
  ListItem,
  InputLabel,
  FormControl,
  ListItemText,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';

import adminService from 'src/redux/api/adminServices';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function UserTableToolbar({
  numSelected,
  filterName,
  onFilterName,
  setAssocName,
  assocName,

  setExpiringFilter,
}) {
  const [data, setData] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchList();
  }, []);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterClick = (filterType) => {
    setExpiringFilter(filterType);
    handleClose();
  };

  const isOpen = Boolean(anchorEl);

  const fetchList = async () => {
    try {
      const res = await adminService.getAssoc();

      if (res?.data?.success) {
        setData(res?.data?.assocList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setAssocName(event.target.value);
    setExpiringFilter('');
  };
  return (
    <Toolbar
      sx={{
        height: 96,
        display: 'flex',
        justifyContent: 'space-between',
        p: (theme) => theme.spacing(0, 1, 0, 3),
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Box sx={{ minWidth: 220 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Associations</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={assocName}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">All</MenuItem>
              {data?.map((item) => (
                <MenuItem key={item?.assocCode} value={item?.assocCode}>
                  {item?.association}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box>
        <Tooltip title="Filter list" sx={{ mr: 2 }}>
          <IconButton onClick={handleOpen}>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Tooltip>
        <Popover
          open={isOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <List>
            <ListItem button onClick={() => handleFilterClick('expired')}>
              <ListItemText primary="Expired" />
            </ListItem>
            <ListItem button onClick={() => handleFilterClick('expiring')}>
              <ListItemText primary="Expiring" />
            </ListItem>
            <ListItem button onClick={() => handleFilterClick('setDate')}>
              <ListItemText primary="Set Date" />
            </ListItem>
          </List>
        </Popover>
        <OutlinedInput
          value={filterName}
          onChange={onFilterName}
          placeholder="Search by email..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
        />
      </Box>
    </Toolbar>
  );
}

UserTableToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};
