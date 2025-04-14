import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const CreateSnippetPage = () => {

    async function createSnippet(formData: FormData) {
        'use server'
        const title = formData.get('title') as string
        const code = formData.get('code') as string

       const snippet = await prisma.snippeto.create({     //Snippeto = model name
        data:{
            title,
            code
        }
       })
       
       console.log(snippet)

       redirect('/')
    }
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl md:text-3xl font-bold text-indigo-400">Create New Snippet</h1>
                    <Link href="/">
                        <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800">
                            Cancel
                        </Button>
                    </Link>
                </div>
                
                <form action={createSnippet} className="space-y-6 bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md">
                    <div className="space-y-2">
                        <Label htmlFor="title" className="text-gray-300 text-sm">Title</Label>
                        <Input 
                            type="text" 
                            name="title" 
                            id="title" 
                            className="bg-gray-700 border-gray-600 text-white focus:ring-indigo-500 focus:border-indigo-500" 
                            placeholder="Enter snippet title"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="code" className="text-gray-300 text-sm">Code</Label>
                        <Textarea 
                            name="code" 
                            id="code" 
                            className="bg-gray-700 border-gray-600 text-white focus:ring-indigo-500 focus:border-indigo-500 min-h-32 font-mono" 
                            placeholder="Paste your code here..."
                            required
                        />
                    </div>
                    <div className="pt-2">
                        <Button 
                            type="submit" 
                            className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white"
                        >
                            Create Snippet
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateSnippetPage