import React, { useState } from "react";
import "./App.css";
import Card from "./Components/UI/Card";
import Users from "./Components/Users/Users";
import Form from "./Components/Form/Form";
import Backdrop from "./Components/Backdrop/Backdrop";
import PopUp from "./Components/PopUp/PopUp";
function App() {
  const [users, setUsers] = useState([]);
  const [pop,setPop] = useState(0);
  let text1 = "Please enter a valid name and age (non-empty values)";
  let text2 = "Please enter a valid age ( > 0  or < 150 ) ";
  function handleSubmitt(user) {
    if(user.name.trim().length === 0 || user.age.trim().length === 0){
      setPop(1);
      return;
    }
    const a = Number(user.age);
    if(a<=0 || a>=200)
    {
      setPop(2);
      return;
    }
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  }
  function removeP(){
    setPop(0);
  }
  return (
    <div className="App bcapp">
      <Card>
        <Form onSubmitt={handleSubmitt} />
      </Card>
      {users.length!==0 && <Card><Users users={users} /></Card>}
      {pop?<Backdrop removePop = {removeP}>
        <PopUp removePop = {removeP} text = {pop===1?text1:text2}/>
      </Backdrop>: <span/>}
    </div>
  );
}

export default App;



  