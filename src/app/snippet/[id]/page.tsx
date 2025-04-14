import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react'
import * as actions from '@/actions';

const SnippetDetailPage = async ({params} : {params: Promise<{id:string}>}) => {
    const id = parseInt((await params).id)

    const snippet = await prisma.snippeto.findUnique({
        where:{
            id
        }
    });
    if(!snippet) {
        return <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
                <h2 className="text-xl text-red-400">Snippet not found</h2>
            </div>
        </div>
    }
    const deleteSnippetAction = actions.deleteSnippet.bind(null, id)
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-400">{snippet?.title}</h1>
          <div className="flex items-center gap-3">
            <Link href={`/snippet/${snippet.id}/edit`}>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Edit</Button>
            </Link>
            <form action={deleteSnippetAction}>
              <Button variant="destructive" type="submit" className="bg-red-600 hover:bg-red-700">Delete</Button>
            </form>
          </div>
        </div>
        
        <div className="relative">
          <pre className="p-4 md:p-6 bg-gray-800 rounded-lg border border-gray-700 overflow-x-auto text-gray-200 shadow-md">
            <code className="font-mono text-sm md:text-base">{snippet?.code}</code>
          </pre>
          <div className="absolute top-2 right-2">
            <Link href="/">
              <Button variant="ghost" className="text-gray-400 hover:text-gray-200 hover:bg-gray-700">
                Back
              </Button>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SnippetDetailPage