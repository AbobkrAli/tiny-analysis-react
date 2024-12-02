import { Box, Button, Typography } from '@mui/material';

const DashboardDetailsSection = () => {
  return (
    <Box >
      <Box
        sx={{
          width: '100%',
          borderRadius: '12px',
          height: '100%',
          bgcolor: '#ddd',
          minHeight: '500px',
          overflow: 'hidden'
        }}
      >
        <Box sx={{borderRadius:'12px', height:'60%',objectFit:'contain', width: '100%', }} >
          <img src="./head-detect.jpeg" className='w-full h-full object-cover ' alt="" />
        </Box>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginX: 2, marginTop: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>head numbers: <span className='text-main'>15</span> </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>head numbers: <span className='text-main'>15</span> </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginX: 2, marginTop: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>head numbers: <span className='text-main'>15</span> </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>head numbers: <span className='text-main'>15</span> </Typography>
          </Box>
        </Box>
        <Box sx={{ marginTop: 4, textAlign: 'center' }}>
          <Button variant="contained" sx={{ mb: 2, width: '90%' }} >Detect Again</Button>
        </Box>
      </Box>

      {/* Analysis Section */}
      
    </Box>
  )
}

export default DashboardDetailsSection