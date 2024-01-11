import { useState, useEffect, useCallback } from "react";
import { User } from "../types";

interface ApiResponse {
  results: User[];
}

export interface ApiWithPaginationAndFiltersHook {
  users: User[];
  loading: boolean;
  error: Error | unknown;
  loadMore: () => void;
  gender: string;
  applyFilters: (gender: string) => void;
  searchUsers: User[];
  handleSearchUser: (value: string) => void;
}

const useApiCall = (): ApiWithPaginationAndFiltersHook => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | unknown>(null);
  const [page, setPage] = useState<number>(1);
  const [gender, setGender] = useState<string>("");
  const [searchUsers, setSearchUser] = useState<User[]>([]);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const apiUrl = `https://randomuser.me/api/?page=${page}&results=10&gender=${gender}`;
      const response = await fetch(apiUrl);
      const responseResult: ApiResponse = await response.json();
      if (page === 1) {
        setUsers(responseResult.results);
      } else {
        setUsers((prevData) => [...prevData, ...responseResult.results]);
      }
    } catch (error: unknown) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [page, gender]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const applyFilters = (gender: string) => {
    setGender(gender);
    setPage(1);
  };

  const handleSearchUser = (value: string) => {
    if (value) {
      const userData = users.filter((user: User) =>
        JSON.stringify(user).toLowerCase().includes(value.toLowerCase())
      );

      setSearchUser(userData);
    } else {
      setSearchUser([]);
    }
  };

  return {
    users,
    loading,
    error,
    loadMore,
    gender,
    applyFilters,
    handleSearchUser,
    searchUsers,
  };
};

export default useApiCall;
