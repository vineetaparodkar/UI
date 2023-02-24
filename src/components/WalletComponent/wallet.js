import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


const columns = [
    
    { field: 'currency', headerName: 'Currency', width: 150 },
    {
      field: 'amt',
      headerName: 'Amount',
      type: 'number',
      width: 360,
    },
    
  ];

  const rows = [
    { id: 1, currency: 'ETH', amt: 0.3590980 },
    { id: 2, currency: 'BTC', amt: 42 },
    { id: 3,  currency: 'XRC', amt: 45 },
    // { id: 4, lastName: 'Stark', currency: 'META', amt: 16 },
    // { id: 5, lastName: 'Targaryen', currency: 'SHIB', amt: null },
    // { id: 6, lastName: 'Melisandre', currency: null, amt: 150 },
    // { id: 7, lastName: 'Clifford', currency: 'Ferrara', amt: 44 },
    // { id: 8, lastName: 'Frances', currency: 'Rossini', amt: 36 },
    // { id: 9, lastName: 'Roxie', currency: 'Harvey', amt: 65 },
  ];




export const Wallet = () => {

  return (
    <Card >
      {/* <Box sx={{ display: "flex", flexDirection: "column" }}> */}
        <CardContent>

          <Grid container>
            <Grid item xs={8}>
              <Typography component="div" variant="h5">
                Contract
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="success" disabled>
                Activate
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                xxx-fs3434sw-wswed33443
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Button variant="contained" >
                Send
              </Button>
          </Grid>
          <Grid item xs={2}>
              <Button variant="contained" >
                Receive
              </Button>

          </Grid>
          </Grid>
          <Grid item xs={12}>

          <div style={{ height: 400, width: '100%' , paddingTop: "2rem"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
          </Grid>

        </CardContent>

    
        
      {/* </Box> */}
    </Card>
  );
};


// checkboxSelection
// {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box> */
