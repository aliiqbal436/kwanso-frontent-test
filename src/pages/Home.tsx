import LoadingButton from "@mui/lab/LoadingButton";
import {
  FormControl,
  Container,
  InputLabel,
  MenuItem,
  Select,

} from "@mui/material";
import UserList from "../components/UserList";
import { useApi } from "../context/ApiContext";
import SearchUser from "../components/SearchUser";

function Home() {
  const {
    users,
    loading,
    loadMore,
    applyFilters,
    gender,
    searchUsers,
    handleSearchUser,
  } = useApi();

  return (
    <Container
      style={{ alignContent: "center", justifyContent: "center" }}
      maxWidth="sm"
    >
      <h1>Users list</h1>
      <SearchUser handleSearchUser={handleSearchUser}/>
      <FormControl sx={{ m: 2, minWidth: 300 }} size="small">
        <InputLabel id="demo-select-small-label">Filter by Gender</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={gender}
          label="Age"
          onChange={(event) => applyFilters(event.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Select>
      </FormControl>
      <UserList users={users} searchUsers={searchUsers} />

      {searchUsers.length === 0 && (
        <LoadingButton loading={loading} variant="contained" onClick={loadMore}>
          Load More
        </LoadingButton>
      )}
    </Container>
  );
}

export default Home;
