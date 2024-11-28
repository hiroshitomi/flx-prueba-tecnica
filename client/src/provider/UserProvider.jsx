import {useState} from "react";
import {UserContext} from "../context/UserContext";

export const UserProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState([]);

  const getUsers = async () => {
    try {
      await fetch("http://localhost:4000/users")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
        });
    } catch (error) {
      console.log("Error al consultar la lista de usuarios", error.message);
    }
  };

  const addUser = (newUser) => {
    users.unshift({
      id: window.crypto.randomUUID(),
      username: newUser.username,
      name: newUser.name,
      lastname: newUser.lastname,
      email: newUser.email,
      status: newUser.status,
      age: newUser.age,
    });
    setNewUser(users);
  };

  const deleteUser = (userDelete) => {
    return users.filter((u) => u.id !== userDelete.id);
  };

  const handleSearch = (nameOrLastName) => {
    const userSearch = users.filter(
      (u) =>
        u.name.toUpperCase().includes(nameOrLastName.toUpperCase()) ||
        u.lastname.toUpperCase().includes(nameOrLastName.toUpperCase())
    );
    setUsers(userSearch);
  };

  const handleStatus = (statusSearch) => {
    const userStatus = users.filter((u) => u.status === statusSearch);
    setUsers(userStatus);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        getUsers,
        addUser,
        newUser,
        deleteUser,
        handleStatus,
        handleSearch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
