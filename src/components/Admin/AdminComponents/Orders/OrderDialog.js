import React, { useState, useContext, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { BackendCall } from '../../../../store.js';
import OrdersProductCell from './OrdersProductCell.js';
import CostDetailsCell from './CostDetailsCell.js';
import UserDetailsCell from './UserDetailsCell.js';

export default function OrderDialog({ selectedOrder, setSelectedOrder }) {
  const [id, setId] = useState('');
  const [complete, setComplete] = useState('');
  const [deliveryFee, setDeliveryFee] = useState('');
  const [totalCost, setTotalCost] = useState('');
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    BackendCall.get(`/admin/order/${selectedOrder.id}`)
      .then((response) => {
        console.log(response.data);
        const { id, complete, deliveryFee, totalCost, products, user } =
          response.data;
        setId(id);
        setComplete(complete);
        setDeliveryFee(deliveryFee);
        setTotalCost(totalCost);
        setProducts(products);
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClose = () => {
    setSelectedOrder(null);
  };

  return (
    <div>
      <Dialog open={selectedOrder && true} onClose={handleClose}>
        <DialogTitle>
          Order #{id} ({complete ? 'Completed' : 'Pending'})
        </DialogTitle>
        <DialogContent>
          <List>
            {/* PRODUCTS */}
            <ListItem disablePadding key="products">
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText
                  primary={products.map((product, index) => {
                    return (
                      <OrdersProductCell purchase={product} index={index} />
                    );
                  })}
                />
              </ListItemButton>
            </ListItem>
            <Divider />

            {/* COSTS */}
            <ListItem disablePadding key="costs">
              <ListItemButton>
                <ListItemIcon>
                  <AccountBalanceWalletIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <CostDetailsCell
                      deliveryFee={deliveryFee}
                      totalCost={totalCost}
                    />
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider />

            {/* USER DETAILS */}
            <ListItem disablePadding key="userDetails">
              <ListItemButton>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary={<UserDetailsCell user={user} />} />
              </ListItemButton>
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
