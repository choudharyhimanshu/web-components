import * as React from 'react';

export interface IImagePreviewProps {
    src: string;
}

const ImagePreview = (props: IImagePreviewProps) => {
    return (
        <div className="text-center pt-2 pb-2">
            <img className="w-50" src={props.src} />
        </div>
    );
};

export default ImagePreview;
