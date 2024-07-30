import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
  count: number;
  page: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const pages: React.FC<PaginationProps> = ({ count, page, onPageChange }) => {
  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} color="primary" onChange={onPageChange} />
    </Stack>
  );
};

export default pages;
