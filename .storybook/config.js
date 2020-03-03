import { configure, addParameters, addDecorator } from '@storybook/react';
import { withCssResources } from '@storybook/addon-cssresources';

addParameters({
    cssresources: [
        {
            id: `font-awesome`,
            code: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">`,
            picked: true
        },
        {
            id: `skeleton`,
            code: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">`,
            picked: true
        }
    ]
});

addDecorator(withCssResources);

configure(require.context('../packages', true, /\.stories\.(ts|tsx)$/), module);
