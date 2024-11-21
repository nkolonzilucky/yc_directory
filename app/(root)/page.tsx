import SearchForm from '../../components/SearchForm';
import StartupCard from '@/components/StartupCard';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { StartupTypeCard } from '@/components/StartupCard';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { client } from '@/sanity/lib/client';



export default async function Home({ searchParams } : { searchParams: Promise<{query?: string}> }) {
  const query = (await searchParams).query
  const params = { search: query || null } 
  const posts = await client.fetch(STARTUPS_QUERY, params)
  // const {data: posts} = await sanityFetch({query: STARTUPS_QUERY})

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: "Young Adrian" },
  //     description: "This is a description",
  //     image: 'https://dummyjson.com/image/600x400',
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  // ]
  return (
    <>
    <section className="pink_container">
      <h1 className="heading">
        Pitch Your Startup <hr />
        Connect with Entrepreneurs
      </h1>
      <p className="sub-heading max-w-3">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </p>
    <SearchForm query={query} />
    </section>
    <section className='section_container'>
      <p className='text-30-semibold'>
        {query ? `Search results for "${query}"` : 'All Startups'}
      </p>
      <ul className='mt-7 card_grid'>
        {posts?.length > 0 ? (
          posts.map((post, index: number) => ( <StartupCard key={index} post={post as StartupTypeCard} />))
        ) : (<p className='no-results'> No Startups found</p>)}
      </ul>

    </section>
    <SanityLive />
    </>
  );
}
