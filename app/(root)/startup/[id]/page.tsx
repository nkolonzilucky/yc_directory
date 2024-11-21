import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }>}) => {
    const id = (await params).id
    const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

    if (!post) return notFound();
  return (
    <>
    <section className='pink_container !min-h-[230px]'>
      <h1 className="heading">{post.title}</h1>
      <p className="sub-heading !max-w-5xl">{post.description}</p>
    </section>
    <section className="section_container">
      <Image 
      src={post.image} 
      alt="thumbnail"
      className="w-full h-auto rounded-xl"
      />
      <div className="space-y-5 mt-10 max-w-4xl mx-auto">
        <div className="flex-between gap-5">
          
        </div>

      </div>
    </section>
    </>
  )
}

export default page
