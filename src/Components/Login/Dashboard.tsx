import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchUsers } from '../../redux/usersSlice';
import BasicPagination from '../PageAndScroll/Pagination';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ITEMS_PER_PAGE = 5;

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [displayedUsers, setDisplayedUsers] = useState(users.slice(0, ITEMS_PER_PAGE));

  //Dispatches the fetchUsers action to load users from the API.
  useEffect(() => {
    dispatch(fetchUsers());
  },[dispatch]);

  // Runs when users or currentPage changes.
  useEffect(() => {
    setDisplayedUsers(users.slice(0, currentPage * ITEMS_PER_PAGE));
    setHasMore(currentPage * ITEMS_PER_PAGE < users.length);
  }, [users, currentPage]);

  //Updates the currentPage state when a new page is selected.
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };


  return (
    <div>
      <h1>Dashboard</h1>

      {/* Pagination Container */}
      <div style={{ marginBottom: '20px' }}>
        <BasicPagination
          count={Math.ceil(users.length / ITEMS_PER_PAGE)}
          page={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Paginated Data */}
      <TableContainer component={Paper} sx={{ width: 500, marginBottom: '20px' }}>
        <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="center">Password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((user) => (
              <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{user.email}</TableCell>
                <TableCell align="center">{user.password}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br/>
      <Link to="/callback">
        useCallBack() Demo
      </Link>
      <br/><br/>
      <Link to="/memo">
        useMemo() Demo
      </Link>
      <br/><br/>
      <Link to="/scroll">
        Infinite Scrolling() Demo
      </Link>
      <br/><br/>
      <Link to="/Context">
        useContext() Demo
      </Link>
    </div>
  );
};

export default Dashboard;