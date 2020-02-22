import * as React from 'react';
import Greeter from '../src/Greeter';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Greeter',
    component: Greeter,
    decorators: [withKnobs]
};

export const withName = () => <Greeter name={text('name', 'User')} />;

export const withoutName = () => <Greeter />;
