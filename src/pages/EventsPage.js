import EventsList from '../components/EventsList';
import { useLoaderData, json, defer, Await, useRouteError } from 'react-router-dom';
import { Suspense } from 'react';

function EventsPage() {

    /* const error = useRouteError();
    console.log(error); */
    //const data = useLoaderData();
    
    /* if (data.isError) {
        return <p>{data.message}</p>    
    } */

    /* const events = data.events;

  return (
  <EventsList events={events} />
  ); */

  const {events} = useLoaderData();
  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={events}>
            {(loadedEvents) => <EventsList events={loadedEvents}/> }
        </Await>
    </Suspense>
  ) 
}

export default EventsPage;

const loadEvents = async () => {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
      //return {isError: true, message: "Could not fetch data!"};
      /* throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {
          status: 500,
      }); */
      return json({message: 'Could not fetch events.'}, {status: 500});
    } else {
      const resData = await response.json();
      return resData.events;
    }
}

export const loader = () => {
     return defer({
        events: loadEvents(),
    });
};