# file-preview-react-component

A react component to preview a file/blob with support for various formats.

## Installation

```bash
npm i @muchhadd/file-preview-react-component --save
```

## Usage

```jsx
import {FilePreview} from '@muchhadd/file-preview-react-component';

<FilePreview
    file={new Blob(['test'], { type: 'text/plain' })}
    fileName={'test file.txt'}
/>

```
