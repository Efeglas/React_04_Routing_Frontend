import { useParams, useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventsDetailsPage = () => {

    const params = useParams(); 
    const data = useRouteLoaderData('event-details');
    console.log(data);
    return (
        <EventItem event={data.event}/>
    );
}

export default EventsDetailsPage;

export const loader = async ({request, params}) => {

    let id = params.someId;

    const response = await fetch(`http://localhost:8080/events/${id}`);

    if (!response.ok) {
        return json({message: 'Could not fetch details for this event.'}, {status: 500});
    } else {
        return response;
    }
} 

export const action = async ({params, request}) => {
    const eventId = params.someId;
    console.log(eventId);
    const response = await fetch(`http://localhost:8080/events/${eventId}`, {method: request.method});
    if (!response.ok) {
        return json({message: 'Could not delete event.'}, {status: 500});
    }

    return redirect('/events');
}