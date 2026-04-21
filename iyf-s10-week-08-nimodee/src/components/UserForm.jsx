import { useState } from 'react';

function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);

    return (
        <div>
            <h2>User Form</h2>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />

            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />

            <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder="Age"
            />

            <div>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Age: {age}</p>
            </div>
        </div>
    );
}

export default UserForm;