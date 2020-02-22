import * as React from 'react';

export interface IGreeterProps {
    name?: string;
}

const Greeter = (props: IGreeterProps) => {
    return <h2>Welcome, {props.name ? props.name : 'User'}!</h2>;
};

export default Greeter;
