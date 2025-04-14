import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react'
import * as actions from '@/actions';

const SnippetDetailPage = async  ({params} : {params: Promise<{id:string}>}) => {
    const id = parseInt((await params).id)

    const snippet = await prisma.snippeto.findUnique({
        where:{
            id
        }
    });
    if(!snippet) {
        return <div>Snippet not found</div>
    }
    const deleteSnippetAction = actions.deleteSnippet.bind(null, id)
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex items-center justify-between'>
        <h1>{snippet?.title}</h1>
        <div className='flex items-center gap-2'>
        <Link href={`/snippet/${snippet.id}/edit`}>
        <Button>Edit</Button>
        </Link>
        <form action={deleteSnippetAction}>

        <Button variant={'destructive'} type='submit'>Delete</Button>
        </form>
        </div>
        </div>
        <pre className='p-3 bg-gray-200 rounded border-gray-200'>
            <code>{snippet?.code}</code>
                
        </pre>      
    </div>
  )
}

export default SnippetDetailPage
