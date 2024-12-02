import { Box, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DashboardDetailsSection from '../../../landing/components/DashboardDetailsSection';

const UploadingResultSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box width="100%">
      {isLoading ? (
        <Box>
          <Skeleton variant="rectangular" width={1500} height={400} />
          <Skeleton variant="rectangular" sx={{ marginTop: 2 }} />
          <Skeleton variant="rectangular" sx={{ marginTop: 2 }} />
        </Box>
      ) : (
        <Box>
          <Box sx={{ width: '100%' , display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2}}>
            <DashboardDetailsSection />
            <DashboardDetailsSection />
            <DashboardDetailsSection />
            <DashboardDetailsSection />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default UploadingResultSection;
