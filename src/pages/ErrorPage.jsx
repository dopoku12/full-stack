import { useRouteError } from "react-router-dom";
import { Typography } from '@mui/material'
const ErrorPage = () => {
    const error = useRouteError()
    console.error(error);
    return (
        <div id="error-page">
            <Typography>
                Oops!
            </Typography>

            <Typography>
                Sorry,an unexpected error has occured.
            </Typography>

            <i>{error.statusText || error.message}</i>

        </div>

    );
}

export default ErrorPage;