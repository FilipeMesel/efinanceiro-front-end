import React from 'react';
import Grid from '@mui/material/Grid';
import StatCard from '../atoms/StatCard';

const StatCardList = ({ data }) => (
  <Grid container spacing={2} columns={12}>
    {data.map((card, index) => (
      <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
        <StatCard {...card} />
      </Grid>
    ))}
  </Grid>
);

export default StatCardList;