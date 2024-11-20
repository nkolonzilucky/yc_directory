import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = 
defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc)  {
  _id, 
  views,
  _createdAt,
  author -> {
    _id, name, image, bio
  },
  title,
  slug,
  desciption,
  category,
  image
}`)