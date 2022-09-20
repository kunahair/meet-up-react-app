import MeetupList from "../components/meetups/MeetupList";

import { useState, useEffect } from "react";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  //Use effect controls when a function is triggered
  //This will stop the fetch being triggered every time the component
  // reloads. It reloads on every state change.
  useEffect(() => {
    setIsLoading(true);

    fetch('https://react-getting-started-e7eb7-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
    .then((resp) => {
      return resp.json();
    }).then((data) => {

      //Data returned from Firebase is an object,
      //need to convert to an array
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }

      //Wrap in timeout to show that loading is working
      setTimeout(() => {
        setIsLoading(false);
        setData(meetups);
      }, 1000);      
    });
  }, []); //<--- We need the empty brackeds to ensure a single trigger

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  return (
      <section>
          <h1>All Meetups</h1>
          <MeetupList meetups={data} />
      </section>
  );
}

export default AllMeetupsPage;