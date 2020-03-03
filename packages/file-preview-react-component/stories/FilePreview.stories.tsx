import * as React from 'react';
import FilePreview from '../src/FilePreview';
import { withKnobs, files } from '@storybook/addon-knobs';

const dataURItoBlob = (dataURI: string): Blob => {
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    const mimeString = dataURI
        .split(',')[0]
        .split(':')[1]
        .split(';')[0];

    // write the bytes of the string to a typed array
    const ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
};

export default {
    title: 'FilePreview',
    component: FilePreview,
    decorators: [withKnobs]
};

export const forImages = () => (
    <FilePreview
        file={
            files('file', 'jpg', []).map(dataURI => dataURItoBlob(dataURI))[0]
        }
        format="jpg"
    />
);

export const forPDF = () => (
    <FilePreview
        file={
            files('file', 'pdf', []).map(dataURI => dataURItoBlob(dataURI))[0]
        }
        format="pdf"
    />
);
