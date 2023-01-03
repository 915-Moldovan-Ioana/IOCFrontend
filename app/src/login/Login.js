import React from 'react';
import { Grid, Button, TextField } from '@mui/material';
import { CgLogIn } from 'react-icons/cg';

export default function Login() {
    return (
        <div className='login' style={{ padding: 30 }}>
            <Grid
                container
                spacing={3}
                direction={'column'}
                justify={'center'}
                alignItems={'center'}>
                <Grid align='center' marginTop={'20px'}>
                    <CgLogIn size={35} />
                    <h2>Login</h2>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email" />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Password"
                        type={'password'} />
                </Grid>
                <Grid item xs={12}>
                    <Button fullWidth sx={{ color: 'white', backgroundColor: 'black', borderColor: 'black' }}>Login</Button>
                </Grid>
            </Grid>
        </div>
    )
}