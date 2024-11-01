import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { AccountCircle, School, Group } from "@mui/icons-material";
function Login() {
  return (
    <>
      <StyledContainer>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/admin/login">
                <div onClick={() => navigateHandler("Admin")}>
                  <StyledPaper elevation={3}>
                    <Box mb={2}>
                      <AccountCircle fontSize="large" />
                    </Box>
                    <StyledTypography>Admin</StyledTypography>
                    Login as an administrator to access the dashboard to manage
                    app data.
                  </StyledPaper>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/student/login">
                <StyledPaper elevation={3}>
                  <div onClick={() => navigateHandler("Student")}>
                    <Box mb={2}>
                      <School fontSize="large" />
                    </Box>
                    <StyledTypography>Student</StyledTypography>
                    Login as a student to explore course materials and
                    assignments.
                  </div>
                </StyledPaper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/teacher/login">
                <StyledPaper elevation={3}>
                  <div onClick={() => navigateHandler("Teacher")}>
                    <Box mb={2}>
                      <Group fontSize="large" />
                    </Box>
                    <StyledTypography>Teacher</StyledTypography>
                    Login as a teacher to create courses, assignments, and track
                    student progress.
                  </div>
                </StyledPaper>
              </Link>
            </Grid>
          </Grid>
        </Container>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
          Please Wait
        </Backdrop>
      </StyledContainer>
    </>
  );
}

export default Login;

const StyledContainer = styled.div`
  height: 120vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: #1f1f38;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  &:hover {
    background-color: #2c2c6c;
    color: white;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 10px;
`;
