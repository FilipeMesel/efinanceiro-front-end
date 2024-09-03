import React from 'react';
import Box from '../atoms/Box';
import Typography from '../atoms/Typography';
import StatCardList from '../molecules/StatCardList';
import HighlightedCard from '../molecules/HighlightedCard';
import SessionsChart from '../molecules/SessionsChart';
import PageViewsBarChart from '../molecules/PageViewsBarChart';
import DetailsSection from '../molecules/DetailsSection';
import Copyright from '../internals/components/Copyright';

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <StatCardList data={data.slice(0, 3)} /> {/* First 3 cards for overview */}

      <HighlightedCard />

      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        <SessionsChart />
        <PageViewsBarChart />
      </Box>

      <DetailsSection />

      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}