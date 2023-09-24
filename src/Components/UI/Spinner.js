import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

export default function Spinner() {
  return (
    <SpinnerConteainer >
      <CircularProgress />
    </SpinnerConteainer>
  );
}

const SpinnerConteainer=styled(Box)`
.MuiCircularProgress-root{

  color:gray;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-left:40px;
}
`