import { useContext, useState } from "react";
import FavoritesContext from "../FavoriteContextProvider.js";
function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  function ToggelFavorites() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  }
  return (
    <div>
      <div>
        <img src={props.image} alt={props.image} />
      </div>
      <div>
        <h3>{props.title} </h3>
        <h3>{props.id} </h3>
        <address>{props.address} </address>
        <p>{props.description} </p>
      </div>
      <div>
        <button onClick={ToggelFavorites}>
          {itemIsFavorite ? "Remove Favorite" : "Add Favorite"}
        </button>
      </div>
    </div>
  );
}

export default MeetupItem;
