import * as React from 'react';

import ImagePreview from './ImagePreview';
import PdfPreview from './PdfPreview';

const getFormatFromFilename = (fileName: string | undefined): string => {
    const fileNameSplit = fileName?.split('.');
    const extension =
        fileNameSplit && fileNameSplit.length > 1 && fileNameSplit.pop();
    return extension || '';
};

export interface IFilePreviewProps {
    file: Blob;
    filename: string;
    format?: string;
    className?: string;
    downloadButtonClassName?: string;
}

const FilePreview = (props: IFilePreviewProps) => {
    const { file, filename, format, className } = props;

    const objectURL: string = React.useMemo(() => URL.createObjectURL(file), [
        file
    ]);
    const previewFormat: string = React.useMemo(
        () => format || getFormatFromFilename(filename),
        [format, filename]
    );

    switch (previewFormat) {
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'gif':
            return <ImagePreview className={className} src={objectURL} />;
        case 'pdf':
            return <PdfPreview className={className} src={objectURL} />;
        default:
            return (
                <div
                    className={className}
                    style={{ textAlign: 'center', padding: '20px 0' }}
                >
                    <h1>
                        <i className="fas fa-exclamation-circle" />
                    </h1>
                    <h5 style={{ marginBottom: 20 }}>
                        File format is not supported for a preview
                    </h5>
                    <h6 style={{ marginBottom: 20 }}>
                        Please dowload the file to open
                    </h6>
                    <a download={filename} href={objectURL}>
                        <button className="downloadButtonClassName">
                            <i
                                className="fas fa-download"
                                style={{ marginRight: 20 }}
                            />
                            Download
                        </button>
                    </a>
                </div>
            );
    }
};

export default FilePreview;
