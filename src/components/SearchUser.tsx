import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useState } from "react";

function SearchUser({
  handleSearchUser,
}: {
  handleSearchUser: (value: string) => void;
}) {
  const [search, setSearch] = useState<string>("");

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={9}>
            <TextField
              label="Search Users"
              variant="outlined"
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSearchUser(search)} // Clear search on button click
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SearchUser;
