import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import React from 'react'

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
  return (
    <div>
        <div>
        <h1>{snippet?.title}</h1>
        <Button>Edit</Button>
        <Button variant={'destructive'}>Delete</Button>
        </div>
        <p>{snippet?.code}</p>      
    </div>
  )
}

export default SnippetDetailPage
