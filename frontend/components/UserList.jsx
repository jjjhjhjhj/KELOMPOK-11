import React from "react";

const UserList = () => {
    const users = [
        { id: 1, name: "Alif Akbar", email: "alif123@example.com", password: "123456" },
        { id: 2, name: "Muhammad Syarif", email: "syarif456@wxample.com", password: "456789" },
        { id: 3, name: "Dina Asritama", email: "dina789@example.com", password: "789123" },
    ];

    return (
        <div>
            <h1>User List</h1>
            <table border="1" style={{ width: "100%", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                                <button>Edit</button>
                                <button>Copy</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
