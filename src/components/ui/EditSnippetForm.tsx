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
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <form action={saveSnippetAction} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="font-bold text-2xl text-indigo-400">
              {snippet.title}
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Edit your snippet code below
            </p>
          </div>
          <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6">
            Save Changes
          </Button>
        </form>
        
        <div className="border border-gray-700 rounded-lg overflow-hidden shadow-lg">
          <Editor
            height="50vh"
            defaultLanguage="javascript"
            theme="vs-dark"
            defaultValue={code}
            onChange={changeEventHandler}
            options={{
              minimap: { enabled: true },
              scrollBeyondLastLine: false,
              fontSize: 14,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              padding: { top: 16 }
            }}
            className="w-full"
          />
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={() => window.history.back()} 
            variant="outline" 
            className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EditSnippetForm