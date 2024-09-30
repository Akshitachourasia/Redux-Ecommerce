import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@mui/material";
interface ForgotPasswordProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleClose: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  open,
  handleClose,
}) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset email sent to:", email);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Forgot Password</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Please enter your email address to receive a password reset link.
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ForgotPassword;
