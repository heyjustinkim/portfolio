import { slugifyAll } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getPostsByTags = (
  posts: CollectionEntry<"blog">[],
  tag1: string,
  tag2: string,
  tag3: string
) =>
  posts.filter(
    post =>
      slugifyAll(post.data.tags).includes(tag1) &&
      slugifyAll(post.data.tags).includes(tag2) &&
      slugifyAll(post.data.tags).includes(tag3)
  );

export default getPostsByTags;
