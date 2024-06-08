import React, { useContext, useState } from "react";
import Users from "./Users";
import { searchUsers } from "../../api";
import GithubContext from "../../github/GithubContext";

const Search = () => {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-danger btn-block"
          onClick={() => dispatch({ type: "CLEAR_USERS" })}
        >
          Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};

export default Search;
