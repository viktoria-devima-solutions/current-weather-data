import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

const ProfileCard = () => {
  return (
    <Box>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      <Typography>id</Typography>
      <Typography>Temp Email</Typography>
    </Box>
  );
};
export default ProfileCard;
