import * as React from 'react';
import { UserHook } from "../../hook"

export const UserList=()=>{

    const { data: users, loading, setData: setUser,error } = UserHook(true);


    return(
        <>
            <h3>Display User List From Axios API</h3>
           <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Address Street</th>
                        <th>Address Suite</th>
                        <th>Address City</th>
                        <th>Address Zip Code</th>
                        <th>Geo latitude</th>
                        <th>Geo longitude</th>
                    </tr>

                    {
                        users.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.street}</td>
                                <td>{user.address.suite}</td>
                                <td>{user.address.city}</td>
                                <td>{user.address.zipcode}</td>
                                <td>{user.address.geo.lat}</td>
                                <td>{user.address.geo.lng}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h3>{error}</h3>
        </>
    )
}