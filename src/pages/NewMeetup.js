import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from 'react-router-dom';

function NewMeetupPage() {

    const hisotry = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-e7eb7-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type' : 'appplication/json'
                }
            }
        ).then((resposnse) => {
            hisotry('/', {replace: true});
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage;