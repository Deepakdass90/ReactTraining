import React from "react";

function DisplayTable() {
    const itemList = [{id : 1 , name : "milk", qty : 1}, {id : 2 , name : "egg", qty : 6}];
    return(
        <div>
            <div>
                <table>
                    <tr>
                        <th> Id </th>
                        <th> Item Name </th>
                        <th> Quantity </th>
                    </tr>
                    {itemList.map((item , index) => {
                        return (                    <tr>
                            <td> {item.id} </td>
                            <td> {item.name} </td>
                            <td> {item.qty} </td>
                        </tr>)
                    }) }


                </table>

            </div>
        </div>
    );
}

export default DisplayTable;