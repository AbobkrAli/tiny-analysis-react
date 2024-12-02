import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, CardMedia, Box, Skeleton } from '@mui/material';

const DashboardHistory = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
  const timeout =setTimeout(()=>{
    setIsLoading(false)
  },2000)

  return () => clearTimeout(timeout)
  },[])

  
  const data = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/150',
      date: '2024-11-16',
      analysisType: 'Type A',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      date: '2024-11-15',
      analysisType: 'Type B',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/150',
      date: '2024-11-14',
      analysisType: 'Type C',
    },
    {
      id: 4,
      imageUrl: 'https://via.placeholder.com/150',
      date: '2024-11-13',
      analysisType: 'Type D',
    },
    {
      id: 5,
      imageUrl: 'https://via.placeholder.com/150',
      date: '2024-11-12',
      analysisType: 'Type E',
    },
    {
      id: 6,
      imageUrl: 'https://via.placeholder.com/150',
      date: '2024-11-11',
      analysisType: 'Type F',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff',  }}>
    <Grid container spacing={3}>
      {data.map((item) => 
        isLoading ? (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Skeleton key={item.id} variant="rectangular" height={300} width="400px" />
          <Skeleton  variant="rectangular" height={20} width="350px" sx={{ marginTop: 1 }} />
          <Skeleton  variant="rectangular" height={20} width="400px" sx={{ marginTop: 1 }} />
          </Grid>
        ):(
          <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="140"
              image={"head-detect.jpeg"}
              alt="Analysis Image"
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2" color='#000'>
                  <span className='text-main font-bold text-lg'>Date</span>: 2024-11-16
                </Typography>
                
              </Box>
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth
                sx={{ marginTop: 2 }}
              >
                See Analysis Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
        )
      )}
    </Grid>
    </Box>
  );
};

export default DashboardHistory;
