import { Box, Card, Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

import useProfileCard from './useProfileCard';

const ProfileCard = () => {
  const { user } = useProfileCard();
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ minWidth: 280, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        <Typography component="div">Id: {user?.id}</Typography>
        <Typography component="div">Email: {user?.email}</Typography>
      </Card>
    </Box>
  );
};
export default ProfileCard;
