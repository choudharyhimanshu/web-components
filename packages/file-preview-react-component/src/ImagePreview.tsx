import * as React from 'react';

export interface IImagePreviewProps {
    src: string;
    className?: string;
}

const ImagePreview = (props: IImagePreviewProps) => {
    return (
        <img
            className={props.className}
            style={{ width: '100%' }}
            src={props.src}
        />
    );
};

export default ImagePreview;
