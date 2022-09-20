
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useContext } from 'react';
import FavouritesContext from '../../store/favourites-context';

function MeetupItem(props) {

    const favouritesContext = useContext(FavouritesContext);

    const itemIsFavourite = favouritesContext.itemIsFavourite(props.id);

    function toggleFavouriteStatusHandler() {
        if (itemIsFavourite) {
            favouritesContext.removeFavourite(props.id);
        } else {
            favouritesContext.addFavourite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            })
        }
    }

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
                    <button onClick={toggleFavouriteStatusHandler}>
                        {itemIsFavourite ? 'Remove from Favourites' : 'Add Favourite'}
                    </button>
                </div>
            </li>
        </Card>
    );
}

export default MeetupItem;