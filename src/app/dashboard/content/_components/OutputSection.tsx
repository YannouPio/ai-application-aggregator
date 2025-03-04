import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface PROPS { 
  aiOutput: string 
}

function OutputSection({ aiOutput }: PROPS) {
  const editorRef: any = useRef(null);
  
  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
   },[aiOutput])

  return (
    <div className=' bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>你的结果</h2>
        <Button className='flex gap-2'
          onClick={() => {navigator.clipboard.writeText(aiOutput)}}
        ><Copy />Copy</Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="输出结果在此"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default OutputSection