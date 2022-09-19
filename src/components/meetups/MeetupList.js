import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css'

function MeetupList(props) {
    return (
        <ul>
            {console.log(props.meetups)}
            {props.meetups.map((meetup) => {
                return <MeetupItem 
                    key={meetup.id} 
                    id={meetup.id} 
                    image={meetup.image} 
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description} />
            })}
        </ul>
    );
}

export default MeetupList;