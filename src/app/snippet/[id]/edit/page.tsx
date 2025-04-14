import EditSnippetForm from '@/components/ui/EditSnippetForm'
import { prisma } from '@/lib/prisma'
import React from 'react'

const EditSnippetPage = async ({params}:{params:Promise<{id:string}>}) => {
const id = parseInt((await params).id)
const snippet = await prisma.snippeto.findUnique({
    where:{
        id
    }
})
if(!snippet) return <h1>Snippet Not Found</h1>
  return (
   <EditSnippetForm snippet = {snippet}/>
  )
}

export default EditSnippetPage
