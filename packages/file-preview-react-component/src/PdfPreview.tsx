import * as React from 'react';

export interface IPdfPreviewProps {
    src: string;
    className?: string;
}

const PdfPreview = (props: IPdfPreviewProps) => {
    return (
        <div className={props.className}>
            <iframe
                style={{
                    border: 0,
                    width: '100%',
                    height: '600px'
                }}
                src={props.src}
            >
                <p>
                    It appears you don't have a PDF plugin for this browser. No
                    biggie... you can{' '}
                    <a href="resume.pdf">
                        click here to download the PDF file.
                    </a>
                </p>
            </iframe>
        </div>
    );
};

export default PdfPreview;
