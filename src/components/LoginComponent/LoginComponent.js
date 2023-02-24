import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import styles from "./loginComponent.module.css";
import KeyStore from "../../services/Keystore";
import {calculateWalletAddress} from "../../services/AccountAbstraction"
const { enterButton } = styles;

const theme = createTheme();
const keyStore = KeyStore.getInstance();

export default function LoginComponent() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  let navigate = useNavigate();

  const currentUserEmail = localStorage.getItem("userEmail");
  const currentUserPassword = localStorage.getItem("userPassword");

  const [otpModal, setOtpModal] = useState(false);
  const [recoverModal, setRecoverModal] = useState(false);
  const [newPasswordModal, setNewPasswordModal] = useState(false);

  const handleOpen = () => setOtpModal(true);
  const handleClose = () => setOtpModal(false);

  const handleCloseRecoverModal = () => setRecoverModal(false);

  const handleCloseNewPasswordModal = () => setNewPasswordModal(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    localStorage.setItem("userEmail", data.get("email"));
    localStorage.setItem("userPassword", data.get("password"));
    // navigate("/");
    setOtpModal(true);
    // console.log("mmm")
  };

  const handleOtpClick = async () => {
    console.log("called otp ==================>      ");
    // do create account
    const address = await keyStore.createNewAddress(newPassword, saveKey);
    if (onCreatedWalletAddress) {
      const walletAddress = calculateWalletAddress(address);
      console.log("created wallet address :   " + walletAddress);
    }
    navigate("/identityViewPage");
    // console.log("called")
  };

  const handleRecoverClick = () => {
    // navigate("/");
    console.log("called");
    setRecoverModal(true);

    // setNewPasswordModal(true)
    // handleCloseRecoverModal();
  };

  const handleRecoverOtpSubmit = () => {
    setRecoverModal(false);
    setNewPasswordModal(true);
  };

  const handlePasswordReset = () => {
    navigate("/identityViewPage");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Button
                fullWidth
                variant="contained"
                onClick={handleRecoverClick}
              >
                Recover
              </Button>
              {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>

      <Modal
        open={otpModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter the OTP
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="otp"
            label="OTP"
            type="password"
            id="otp"
            autoComplete="current-otp"
          />
          <Button
            className={enterButton}
            variant="contained"
            color="success"
            onClick={handleOtpClick}
          >
            Enter
          </Button>
        </Box>
      </Modal>

      <Modal
        open={recoverModal}
        onClose={handleCloseRecoverModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter the OTP
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="otp-password"
            label="OTP"
            type="password"
            id="otp-passowrd"
            autoComplete="current-otp"
          />
          <Button
            className={enterButton}
            variant="contained"
            color="success"
            onClick={handleRecoverOtpSubmit}
          >
            Enter
          </Button>
        </Box>
      </Modal>

      <Modal
        open={newPasswordModal}
        onClose={handleCloseNewPasswordModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter the New Password
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            name="new-password"
            label="New Password"
            type="password"
            id="new-password"
          />

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Repeat the New Password
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="new-password-repeat"
            label="Repeat New Password"
            type="password"
            id="new-password-repeat"
          />
          <Button
            className={enterButton}
            variant="contained"
            color="success"
            onClick={handlePasswordReset}
          >
            Sign In
          </Button>
        </Box>
      </Modal>
    </>
  );
}
