"use client"
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";


interface Pet {
  name: string,
  age: number,
  type: string
}

export default function Home() {
  const [data, setData] = useState<Pet[]>([])
  useEffect(() => {
    async function getData() {
      const response: Pet[] = await client.fetch("*[_type == 'pet']")
      setData(response)
    }
    getData()
  }, [])


  return (
    <div className="w-[80%] h-screen m-auto flex flex-wrap items-center justify-evenly ">
      {data.map((pet, index) => (
        <div className="w-[300px] h-[400px] bg-green-400 rounded-lg flex flex-col justify-around" key={index}>
          <h1 className="text-2xl font-bold text-center">Name: {pet.name}</h1>
          <h1 className="text-2xl font-bold text-center">Age: {pet.age}</h1>
          <h1 className="text-2xl font-bold text-center">Type: {pet.type}</h1>
        </div>
      ))}

    </div>
  );
}
