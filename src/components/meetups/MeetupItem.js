
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
    return(
        <Card>
            <li className={classes.item}>
                <div>
                    <img className={classes.image} src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button>Add Favourite</button>
                </div>
            </li>
        </Card>
    );
}

export default MeetupItem;