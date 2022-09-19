
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
    return(
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
                <button>Add Fav +</button>
            </div>
        </li>
    );
}

export default MeetupItem;