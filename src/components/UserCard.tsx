import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { User } from "../types";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function UserCard({ user }: { user: User }) {
  const navigate = useNavigate();

  return (
    <ListItem
      onClick={() => navigate(`user/${user.login.username}`, { state: user })}
    >
      <ListItemAvatar>
        <Avatar
          alt={`${user.name.title} ${user.name.first} ${user.name.last}`}
          src={user.picture.thumbnail}
        />
      </ListItemAvatar>
      <ListItemText
        primary={`${user.name.title} ${user.name.first} ${user.name.last}`}
        secondary={moment(user.dob.date).format("DD MMM YYYY")}
      />
    </ListItem>
  );
}

export default UserCard;
