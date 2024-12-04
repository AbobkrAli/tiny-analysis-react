import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'sonner';
import { EyeIcon } from 'lucide-react';

function createData(
  regionName: string,
  totalCameras: number,
  maxHeads: number,
  avgHeads: number,
) {
  return {
    regionName,
    totalCameras,
    maxHeads,
    avgHeads,
    cameras: [
      {
        id: 'C-1001',
        location: 'main entrance',
        maxPeople: 50,
        optimalPeople: 30,
      },
      {
        id: 'C-1002',
        location: 'Lobby',
        maxPeople: 40,
        optimalPeople: 25,
      },
    ],
  };
}

function Row({
  row,
  onEdit,
  onDelete,
  navigate,
}: {
  row: ReturnType<typeof createData>;
  onEdit: (row: ReturnType<typeof createData>) => void;
  onDelete: (regionName: string) => void;
  navigate: (path: string) => void;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.regionName}
        </TableCell>
        <TableCell align="right">{row.totalCameras}</TableCell>
        <TableCell align="right">{row.maxHeads}</TableCell>
        <TableCell align="right">{row.avgHeads}</TableCell>
        <TableCell align="center">
          <IconButton color="primary" onClick={() => onEdit(row)}>
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={() => onDelete(row.regionName)}>
            <DeleteIcon />
          </IconButton>
          <IconButton
            className="w-fit"
            color="secondary"
            onClick={() => navigate('region/regionfasdf')}
          >
            <EyeIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Camera Details
              </Typography>
              <Table size="small" aria-label="camera details">
                <TableHead>
                  <TableRow>
                    <TableCell>Camera ID</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell align="center">Max People Capacity</TableCell>
                    <TableCell align="center">Optimal People Capacity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.cameras.map((camera) => (
                    <TableRow key={camera.id}>
                      <TableCell component="th" scope="row">
                        {camera.id}
                      </TableCell>
                      <TableCell>{camera.location}</TableCell>
                      <TableCell align="center">{camera.maxPeople}</TableCell>
                      <TableCell align="center">{camera.optimalPeople}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function RegionTable({
  navigate,
}: {
  navigate: (path: string) => void;
}) {
  const [rows, setRows] = React.useState([
    createData('right gate', 10, 300, 200),
    createData('right wing', 8, 240, 180),
    createData('mecca left gate', 15, 500, 350),
    createData('left wing', 12, 400, 300),
    createData('main gate', 20, 600, 450),
  ]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [currentRow, setCurrentRow] = React.useState<ReturnType<
    typeof createData
  > | null>(null);

  const handleEdit = (row: ReturnType<typeof createData>) => {
    setCurrentRow(row);
    setDrawerOpen(true);
  };

  const handleAddRegion = () => {
    setCurrentRow(null); // Clear the form for a new region
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setCurrentRow(null);
  };

  const handleSave = () => {
    // Save edited or new region
    setDrawerOpen(false);
    setCurrentRow(null);
  };

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddRegion}
        sx={{ mb: 2 }}
      >
        Add Region
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Region Name</TableCell>
              <TableCell align="right">Total Cameras</TableCell>
              <TableCell align="right">Max Heads Capacity</TableCell>
              <TableCell align="right">Average Heads Capacity</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <Row
                  key={row.regionName}
                  row={row}
                  onEdit={handleEdit}
                  navigate={navigate}
                  onDelete={() =>
                    toast('Are you sure you want to delete this region?', {
                      action: {
                        label: 'Delete',
                        onClick: () => {
                          console.log('delete');
                        },
                      },
                    })
                  }
                />
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </TableContainer>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Box sx={{ width: 300, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            {currentRow ? 'Edit Region' : 'Add Region'}
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Region Name"
            variant="outlined"
            defaultValue={currentRow?.regionName}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Total Cameras"
            variant="outlined"
            type="number"
            defaultValue={currentRow?.totalCameras}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Max Heads Capacity"
            variant="outlined"
            type="number"
            defaultValue={currentRow?.maxHeads}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Average Heads Capacity"
            variant="outlined"
            type="number"
            defaultValue={currentRow?.avgHeads}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
