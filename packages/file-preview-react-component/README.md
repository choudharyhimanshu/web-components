# react-file-preview

A react component to preview a file/blob with support for various formats.

Written in Typescript.

## Installation

```bash
npm i @muchhadd/react-file-preview --save
```

## Peer Dependencies

- "react": "^16.12.0"
- "react-dom": "^16.12.0"
- [Font Awesome](https://fontawesome.com/start)

## Supported formats for preview

- pdf
- images (png, jpg, jpeg, gif)

## Component props

- **file**: _Blob_ - File blob for preview
- **filename**: _string_ - Filename to be used for download action and for format extraction(if not passed explicitly)
- **format**?: _string_ - Optional value for the file format
- **className**?: _string_ - Optional css class for preview parent element
- **downloadButtonClassName**?: _string_ - For the download button displayed on unsupported format

## Usage

### Basic

```jsx
import {FilePreview} from '@muchhadd/react-file-preview';

<FilePreview
    file={new Blob(['test'], { type: 'text/plain' })}
    fileName={'test-file.txt'}
/>
```

### Custom format extension

**Else extracted from the filename**

```jsx
import {FilePreview} from '@muchhadd/react-file-preview';

<FilePreview
    file={new Blob(['test'], { type: 'text/plain' })}
    fileName={'test-file.txt'}
    format={'txt'}
/>
```

### Custom css class

```jsx
import {FilePreview} from '@muchhadd/react-file-preview';

<FilePreview
    file={new Blob(['test'], { type: 'text/plain' })}
    fileName={'test-file.txt'}
    className='card'
/>
```

### Custom download button class

_Download button displayed on unsupported format_

```jsx
import {FilePreview} from '@muchhadd/react-file-preview';

<FilePreview
    file={new Blob(['test'], { type: 'text/plain' })}
    fileName={'test-file.txt'}
    className='card'
    downloadButtonClassName='btn-primary'
/>
```
