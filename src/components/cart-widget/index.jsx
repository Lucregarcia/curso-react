import React from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
    return (
        <IconButton aria-label="delete">
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
    )
}

export default CartWidget;