import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1>Snippeto</h1>
        <Link href={"/snippet/new"}><Button>New</Button></Link>
      </div>
    </div>
  );
}
