import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';
import { Icon } from 'semantic-ui-react';
const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [all, setAll] = useState([]);
    function login(e) {
        e.preventDefault();
        const newEntry = { email: email, password: password };
        setAll([...all, newEntry]);
        console.log(all);
    };
    return (
        <Form onSubmit={login} className="App" >
            <Icon.Group size='huge'>
                <Icon color='black' size='big' name='circle outline' />
                <Icon color='red' name='user' />
            </Icon.Group>
            <h3 >
                <span className="font-weight-bold">Sign in</span>
            </h3 >
            <FormGroup>
                <Label >Email</Label>
                <Input type="email" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label >Password</Label>
                <Input type="password" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>
            <Button type="submit" color="primary" size="lg" block >
                manvir
            </Button>
        </Form >
    );
};

export default App;
