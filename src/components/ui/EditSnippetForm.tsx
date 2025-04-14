"use client"
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import type { Snippeto } from '@prisma/client'
import { Button } from './button'
import * as actions from '@/actions'

const EditSnippetForm = ({snippet}:{snippet:Snippeto}) => {
    const [code, setCode] = useState(snippet.code)
    const saveSnippetAction = actions.saveSnippet.bind(null,snippet.id,code)
    const changeEventHandler = (value:string="")=>{
        setCode(value)
    }

  return (
    <div className='flex flex-col gap-4'>
        <form action={saveSnippetAction} className='flex items-center justify-between'>
            <h1 className='font-bold text-xl'>
                Your Code Editor
            </h1>
        <Button type='submit'>Save</Button>
        </form>
      <Editor
      height="40vh"
      defaultLanguage="javascript"
      theme='vs-dark'
      defaultValue={code}
      onChange={changeEventHandler}
    />
    </div>
  )
}

export default EditSnippetForm
