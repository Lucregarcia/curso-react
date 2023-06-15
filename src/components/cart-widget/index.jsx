import React from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const CartWidget = ({ cartLength }) => {
    return (
        <IconButton aria-label="delete">
            <Badge badgeContent={cartLength} color="secondary">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
    )
}

export default CartWidget;