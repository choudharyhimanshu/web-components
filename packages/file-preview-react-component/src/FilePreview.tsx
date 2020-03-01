import * as React from 'react';

export interface IFilePreviewProps {
    file: Blob | undefined;
    fileName?: string;
    format?: string;
}

const FilePreview = (props: IFilePreviewProps) => {
    const { file, fileName } = props;

    if (file) {
        const blobURL = URL.createObjectURL(file);

        return (
            <div>
                <div>
                    <h3>{fileName}</h3>
                    <button>Download!</button>
                </div>
                <hr />
                <div>
                    <img src={blobURL} />
                </div>
            </div>
        );
    } else {
        return <h2>Please pass a file in the properties</h2>;
    }
};

export default FilePreview;
