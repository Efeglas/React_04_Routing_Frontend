import { Outlet } from "react-router-dom";
import EventsNavigation from '../components/EventsNavigation'
import { Fragment } from "react";

const EventsRoot = () =>{
    return (
        <Fragment>
            <EventsNavigation />
            <Outlet />
        </Fragment>
    );
}

export default EventsRoot;