import { useContext } from "react";
import FavoritesContext from "../Component/FavoriteContextProvider.js";
import ListMeetup from "../Component/Meetup/ListMeetup";
function Favorite() {
  const FavContext = useContext(FavoritesContext);
  const Content =
    FavContext.totalFavorites == 0 ? (
      <div>No Favorites</div>
    ) : (
      <ListMeetup meetups={FavContext.favorites}></ListMeetup>
    );
  return <div>{Content}</div>;
}
export default Favorite;
