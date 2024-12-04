import { Box, Skeleton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RegionTable from '../../../../components/tables/RegionTable';

const UploadingResultSection = ({navigate}: {navigate: (path: string) => void}) => {
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
          <Box sx={{marginBottom: 8, color: 'primary.main'}}>
            <Typography variant='h1'>Regions</Typography>
          </Box>
          <RegionTable navigate={navigate} />
        </Box>
      )}
    </Box>
  );
};

export default UploadingResultSection;
