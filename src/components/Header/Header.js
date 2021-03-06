import PropTypes from 'prop-types';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
    ThemeProvider,
    createTheme,
    experimental_sx as sx,
  } from '@mui/material/styles';

export default function Types() {
    return (
      <Box sx={{ width: '100%', textAlign: 'center'}}>
        <Typography variant="h3" gutterBottom component="div" >
          JUVE

        </Typography>
        </Box>
  );
}
