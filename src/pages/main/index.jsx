import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Main = () => {
    return (
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={1} aria-label="basic tabs example">
                <Tab label="Collares" value={1} />
                <Tab label="Pulseras" value={2} />
                <Tab label="Aros" value={3} />
            </Tabs>
        </Box>
    </Box>
    )
}

export default Main