import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
export type frontMatterType = {
  title?: string;
  publishedAt?: Date;
  excerpt?: string;
  cover_image?: string;
  category?: string;
};

export type sourceType = {
  compiledSource?: string;
  frontmatter: frontMatterType;
  scope: object;
};

export type BlogDetailProps = {
  source: MDXRemoteSerializeResult<object, frontMatterType>;
  frontMatter: frontMatterType;
  readingTime: string;
};

export type ArticleType = {
  data: {data: {publishedAt: string}}
}

export type BlogProps = {
  posts: { slug: string; title:string; excerpt: string; category: string }[];
};