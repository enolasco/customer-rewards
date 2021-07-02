import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Customer from '../Customers/Customer';
import { useSelector } from "react-redux";

export const CustomersList = () => {
    const state = useSelector((state: any) => state);
    const {customers} = state.customers;
    const customerList = customers.map((customer: any) =>({
        id: customer.id,
        name: customer.name,
        lastName: customer.lastName,
        email: customer.emailAddress
    }));

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Grid container>
                    <Grid xs={3}></Grid>
                    <Grid item xs={6}>
                        <Typography variant="h3">Customer Rewards</Typography>
                    </Grid>
                    <Grid xs={3}></Grid>
                </Grid>
                <Grid container>
                    <Customer customers={customerList}></Customer>
                </Grid>
            </Container>
        </React.Fragment>
    );
};
