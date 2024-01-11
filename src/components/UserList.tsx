import List from "@mui/material/List";
import { User } from "../types";
import UserCard from "./UserCard";

function UserList({
  users,
  searchUsers,
}: {
  users: User[];
  searchUsers: User[];
}) {

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {searchUsers.length > 0 &&
          searchUsers.map((user: User) => <UserCard key={user.login.uuid} user={user} />)}
        {searchUsers.length === 0 &&
          users.map((user: User) => <UserCard key={user.login.uuid} user={user} />)}
      </List>
    </>
  );
}

export default UserList;
