import { Button, AppBar, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <AppBar >

            <Grid container='row' >
                <Typography variant='li'>
                    <Link

                        to='/'>
                        Home
                    </Link>
                </Typography>

                <Typography variant='li'>
                    <Link to="/destination">
                        Destination
                    </Link>
                </Typography>

                <Typography variant='li'>
                    <Link to="/crew">
                        Crew
                    </Link>
                </Typography>

                <Typography variant='li'>
                    <Link to="/technology">
                        Technology
                    </Link>
                </Typography>
            </Grid>
        </AppBar>
    );
}

export default Nav;