import Card from "@mui/material/Card";
import {
  CardContent,
  Typography,
  Avatar,
  CardHeader,
  Container,
} from "@mui/material";
import { useLocation } from "react-router-dom";

import { User } from "../types";
import moment from "moment";

function UserDetail() {
  const location = useLocation();
  const user: User = location.state;
  return (
    <Container
      style={{ alignContent: "center", justifyContent: "center" }}
      maxWidth="sm"
    >
      <Card>
        <CardHeader
          avatar={
            <Avatar
              src={user.picture.thumbnail}
              alt={`${user.name.title} ${user.name.first} ${user.name.last}`}
            />
          }
          title={`${user.name.title} ${user.name.first} ${user.name.last}`}
        />
        <CardContent>
          <Typography variant="body1">Email: {user.email}</Typography>
          <Typography variant="body1">
            DOB: {moment(user.dob.date).format("DD MMM YYYY")}
          </Typography>
          <Typography variant="body1">
            Address:{" "}
            {`${user.location.street.name}/${user.location.street.number} ${user.location.postcode}, ${user.location.state} ${user.location.country}`}
          </Typography>
          <Typography variant="body1">Cell: {user.cell}</Typography>
          <Typography variant="body1">Gender: {user.gender}</Typography>

          <img src={`https://flagsapi.com/${user.nat}/flat/64.png`} />
        </CardContent>
      </Card>
    </Container>
  );
}

export default UserDetail;
