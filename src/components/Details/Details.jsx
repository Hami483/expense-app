import React from 'react'
import {Card,CardHeader,CardContent,Typography} from '@material-ui/core'

import useTransactions from '../../useTranscations'

import useStyles from './styles'

import {Doughnut} from 'react-chartjs-2'

const Details = ({title}) => {
    const classes = useStyles()
    const {total,chartData}= useTransactions(title)
    return(
        <Card className={title === 'income' ? classes.income : classes.expense}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant='h5'>${total}</Typography>
                <Doughnut data={chartData}/>
            </CardContent>
        </Card>
    )
}

export default Details;