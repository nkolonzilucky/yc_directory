import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = 
defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc)  {
  _id, 
  views,
  _createdAt,
  author -> {
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  id,
  name,
  username,
  email,
  image,
  bio
  },
  title,
  slug,
  desciption,
  category,
  image,
  _type, 
  _updatedAt, 
  _rev
}`)