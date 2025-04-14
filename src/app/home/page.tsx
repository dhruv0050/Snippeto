import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippeto.findMany();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href={'/'}>
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-400">Snippeto</h1>
          </Link>
          <Link href="/snippet/new">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              New Snippet
            </Button>
          </Link>
        </div>
        
        {snippets.length === 0 ? (
          <div className="text-center py-10 bg-gray-800 rounded-lg border border-gray-700">
            <p className="text-gray-400">No snippets found. Create your first one!</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {snippets.map((snippet) => (
              <div 
                key={snippet.id} 
                className="flex items-center justify-between bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all shadow-md"
              >
                <h2 className="font-medium text-lg truncate">{snippet.title}</h2>
                <Link href={`/snippet/${snippet.id}`}>
                  <Button variant="ghost" className="text-indigo-400 hover:text-indigo-300 hover:bg-gray-700">
                    View
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
