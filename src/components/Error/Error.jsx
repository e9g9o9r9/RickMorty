import { Button, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const Error = ({ isError, setIsError, textError }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsError(false);
  };

  return (
    <>
      <Snackbar
        open={isError}
        autoHideDuration={6000}
        onClose={handleClose}
        message={textError}
        action={
          <Button onClick={handleClose}>
            <CloseIcon sx={{ color: "white" }} />
          </Button>
        }
      />
    </>
  );
};

export default Error;
