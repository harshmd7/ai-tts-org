import { prisma } from "@/lib/db";

export default async function TestPage(){

    const voices = await prisma.voice.findMany()

    return <div>
        <h1>voices {voices.length}</h1>
        <ul>
            {
                voices.map((v)=>(
                    <li key={v.id} >
                        {v.name} - {v.variant}
                    </li>
                ))
            }
        </ul>
    </div>
}