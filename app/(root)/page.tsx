import SearchForm from '../../components/SearchForm';


export default async function Home({ searchParams } : { searchParams: Promise<{query?: string}> }) {
  const query = (await searchParams).query
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Young Adrian" },
      description: "This is a description",
      image: "'https://dummyjson.com/image/150'",
      category: "Robots",
      title: "We Robots",
    },
]
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
          posts.map((post: StartupCardType, index: number) => ( <StartupCard key={post?.id} post={post} />))
        ) : (<p className='no-results'> No Startups found</p>)}
      </ul>

    </section>
    
    </>
  );
}
