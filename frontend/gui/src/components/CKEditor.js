
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';

function Editor() {
  const {value, setValue} = useState("")

  const handleOnChange = (e, editor) => {
    const data = editor.getData();
  }
  return(
    <>
    <CKEditor
        editor={ClassicEditor}
        onChange={handleOnChange}
    />

    </>
  )
}

export default Editor;
