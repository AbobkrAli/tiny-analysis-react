import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import TypeWriterEffect from '../../../../components/utils/TypeWriterEffect';
import UploadingResultSection from './UploadingResultSection';
import { toast } from 'sonner';
import { useHomeAnalysisStore } from '../../../../stores/homeAnalysisStore';

const UploadImageSection = ({ navigate }: { navigate: (path: string) => void }) => {
  const [iSettingsChosen, setIsSettingsChosen] = React.useState(false);
  const [isFullAnalysisChosen, setIsFullAnalysisChosen] = React.useState(false);

  const analysisOptions = useHomeAnalysisStore((state) => state.analysisOptions);
  const setAnalysisOptions = useHomeAnalysisStore((state) => state.setAnalysisOptions);
  

  // Checking all checkboxes FN
  const handleSelectFullAnalysis = () => {
    setIsFullAnalysisChosen(true);
    setAnalysisOptions({
      headCounting: true,
      heatMap: true,
      graphAnalysis: true,
    });
  };

  // Handling checkboxes change
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setAnalysisOptions({
      ...analysisOptions,
      [name]: checked,
    });
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff' }}>
      {!iSettingsChosen ? (
        <Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              minHeight: '100%',
              bgcolor: '#fff',
            }}
          >
            {/* Big text */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                color: 'primary.main',
                textAlign: 'center',
              }}
              marginBottom={4}
            >
              Crowed Analysis
            </Typography>

            {/* Type writer */}
            <TypeWriterEffect
              text={['crowed analysis', 'crowed analysis.', 'crowed analysis.']}
              variant="h5"
              sx={{ textAlign: 'center', fontWeight: 'bold' }}
            />

            {/* Analysis options */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant={isFullAnalysisChosen ? 'contained' : 'outlined'}
                onClick={handleSelectFullAnalysis}
              >
                Full Analysis
              </Button>
              <Button
                variant={!isFullAnalysisChosen ? 'contained' : 'outlined'}
                onClick={() => setIsFullAnalysisChosen(false)}
              >
                Custom Analysis
              </Button>
            </Box>

            {/* Checkboxes */}
            <FormGroup sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={isFullAnalysisChosen}
                    checked={analysisOptions.headCounting}
                    onChange={handleCheckboxChange}
                    name="headCounting"
                  />
                }
                label="HeadCounting"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={isFullAnalysisChosen}
                    checked={analysisOptions.heatMap}
                    onChange={handleCheckboxChange}
                    name="heatMap"
                  />
                }
                label="HeatMap"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={isFullAnalysisChosen}
                    checked={analysisOptions.graphAnalysis}
                    onChange={handleCheckboxChange}
                    name="graphAnalysis"
                  />
                }
                label="Graph Analysis"
              />
            </FormGroup>

            {/* Upload button */}
            <Button
              component="label"
              role={undefined}
              variant="contained"
              sx={{ marginTop: 6, padding: '12px 44px', fontSize: '16px', fontWeight: 'bold' }}
              onClick={() =>
                toast('Are you sure to start with these settings?', {
                  action: {
                    label: 'Yes',
                    onClick: () => {
                      setIsSettingsChosen(true);
                    },
                  },
                })
              }
            >
              Start with this settings
            </Button>
          </Box>
        </Container>
      ) : (
        <UploadingResultSection navigate={navigate} />
      )}
    </Box>
  );
};

export default UploadImageSection;
