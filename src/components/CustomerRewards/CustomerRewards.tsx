import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const months =['January','February','March','April','May','June','July','August','September','October','November','December'];

const getPurchasesWithReward = (purchases: any[]) => {
    const purchasesWithReward = purchases.filter( (purchase: any) => parseInt(purchase.unitPrice) >= 50);
    return purchasesWithReward;
}

const getRewardPointsMonths = (purchases: any[]) => {
    let points = 0;
    return purchases.map((purchase: any)=>{
        const arrayDate = purchase.date.split('/');
        if(parseInt(purchase.unitPrice)> 50){
            points = points + 50;
        }
        if(parseInt(purchase.unitPrice)> 100){
            points = (parseInt(purchase.unitPrice)-100)*2;
        }
        return {
            month: months[(parseInt(arrayDate[0])-1)],
            generatedPoints: points
        }
    })
}

const getRewards = (rewardsByMonths: any[]) => {
    const rewards = Array.from(
        rewardsByMonths.reduce((m, {month, generatedPoints}) => m.set(month, (m.get(month) || 0) + generatedPoints), new Map()), 
        ([month, generatedPoints]) => ({month, generatedPoints} )
    );
    return rewards;
}

export const CustomerRewards = () => {
    let { id } = useParams() as any;
    const state = useSelector((state: any) => state);
    const {customers} = state.customers;
    const [customer] = customers.filter( (customer: any) => customer.id === id);

    const purchasesToCalculate = getPurchasesWithReward(customer.purchases);
    const rewardsByMonths = getRewardPointsMonths(purchasesToCalculate);
    const rewards = getRewards(rewardsByMonths);

    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
            <Grid container>
                <Grid xs={3}></Grid>
                <Grid item xs={6}>
                    <Typography variant="h3">Hi {customer.name} this are your reward points</Typography>
                </Grid>
                <Grid xs={3}></Grid>
                <Grid xs={3}></Grid>
                <Grid item xs={6}>
                    {rewards.map((reward: any)=>{
                        return (
                            <Chip
                                avatar={<Avatar style={{width: 50}}>{reward.month}</Avatar>}
                                label={reward.generatedPoints}
                                variant="outlined"

                            />
                        )
                    })}
                </Grid>
                <Grid xs={3}></Grid>
            </Grid>
        </Container>
    </React.Fragment>
    )
}
