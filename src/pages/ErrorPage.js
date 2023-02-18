import { Fragment } from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {

    const error = useRouteError();
    //error.status

    let title = 'An error occurred!';
    let message = 'Something went wrong!';

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not found resource or page!';
    }

    return (
        <Fragment>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </Fragment>
    );
}

export default ErrorPage;