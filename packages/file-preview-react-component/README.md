# file-preview-react-component

A react component to preview a file/blob with support for various formats.

## Installation

```bash
npm i @muchhadd/react-file-preview --save
```

## Usage

```jsx
import {FilePreview} from '@muchhadd/react-file-preview';

<FilePreview
    file={new Blob(['test'], { type: 'text/plain' })}
    fileName={'test-file.txt'}
/>

```
