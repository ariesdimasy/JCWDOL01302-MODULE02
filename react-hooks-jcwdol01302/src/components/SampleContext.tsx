import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Component1() {
  const [user, setUser] = useState<string>("Hello World");

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>{`Hello ${user}`}</h1>
        <Component2></Component2>
      </div>
    </UserContext.Provider>
  );
}

function Component2() {
  //const { user } = props;
  return (
    <div>
      <h1> Component 2</h1>
      <Component3></Component3>
    </div>
  );
}

function Component3() {
  //   const { user } = props;
  const user = useContext<string>(UserContext);
  return (
    <div>
      <h1> Component 3</h1>
      <div> User : {user}</div>
    </div>
  );
}
