"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const saveSnippet = async (id: number, code: string) => {
    await prisma.snippeto.update({
        where: {
            id
        },
        data: {
            code
        }
    })
    revalidatePath('/home')
    redirect(`/snippet/${id}`)
}

export const deleteSnippet = async (id: number) => {    
    await prisma.snippeto.delete({
        where: { id }
    })
    revalidatePath('/home')
    redirect('/home')
}