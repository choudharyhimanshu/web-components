import * as React from 'react';

import './style.css';
import ImagePreview from './ImagePreview';

const getFormatFromFilename = (fileName: string | undefined): string => {
    const fileNameSplit = fileName?.split('.');
    const extension =
        fileNameSplit && fileNameSplit.length > 1 && fileNameSplit.pop();
    return extension || '';
};

export interface IFilePreviewProps {
    file: Blob | undefined;
    fileName?: string;
    format?: string;
}

const FilePreview = (props: IFilePreviewProps) => {
    const { file, fileName, format } = props;

    if (file) {
        const blobURL: string = URL.createObjectURL(file);
        const previewFormat: string = format
            ? format
            : getFormatFromFilename(fileName);

        switch (previewFormat) {
            case 'png':
            case 'jpg':
            case 'gif':
                return <ImagePreview src={blobURL} />;
            default:
                return (
                    <div className="text-center pt-5 pb-5">
                        <h1>
                            <i className="fas fa-exclamation-circle" />
                        </h1>
                        <h5>File format is not supported for a preview</h5>
                        <h6>Please dowload file to open</h6>
                        <a download={fileName || 'download'} href={blobURL}>
                            <button>
                                <i className="fas fa-download mr-1" /> Download
                            </button>
                        </a>
                    </div>
                );
        }
    } else {
        return (
            <h2 className="text-center pt-2 pb-2">
                <i className="fas fa-exclamation mr-1" />
                Please select a file to preview
            </h2>
        );
    }
};

export default FilePreview;
