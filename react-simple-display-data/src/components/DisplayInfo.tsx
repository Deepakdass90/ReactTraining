import React from 'react';

function DisplayInfo() {
    const user = {name: "John", role : "admin"};
  return (
    <div >
        <h1>Display info section</h1>
        <div> name : {user.name} / role : {user.role}</div><div/>
    </div>
  );
}

export default DisplayInfo;
