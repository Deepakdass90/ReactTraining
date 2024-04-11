import React, { useState } from "react";

function AddToList(){

    const [displayList, setDisplayList] = useState([{id:1 , title : "defaultItem"}]);
    //const dispList = displayList;
    const addItem = (e:any) => {
        if(e.keyCode === 13)
        {
            console.log("Enter pressed");
            const title = e.target.value;
            const enteredVal = {id : displayList.length+1 ,title};
            setDisplayList([...displayList, enteredVal]);
            e.target.value = "";

        }

    }

    return(
        <div>
            Add To List Component
            <div>Add Item  : <input type="text" onKeyUp={addItem} ></input></div>
            <table>
                <tr><th>id</th><th>title</th></tr>
                {displayList.map((dList , index)=>{

                    return(
                        <tr>
                            <td>{dList.id}</td>
                            <td>{dList.title}</td>
                        </tr>
                    )
                })}

            </table>
        </div>
    )
}

export default AddToList;