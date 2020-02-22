import * as React from 'react';

export interface IGreeterProps {
    name?: string;
}

const Greeter = (props: IGreeterProps) => {
    return <h1>Welcome, {props.name ? props.name : 'User'}!</h1>;
};

export default Greeter;
