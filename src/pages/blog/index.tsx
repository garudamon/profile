import Tag from "@/components/Tag";
import { ArticleType, BlogProps } from "@/types/pages.blog";
import { getAllArticles } from "@/utils/mdx";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const articles = await getAllArticles() as unknown as Array<ArticleType>;
  articles
    .map((article: ArticleType ) => article.data)
    .sort((a: {data: {publishedAt: string}}, b: {data: {publishedAt: string}}) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

  return {
    props: {
      posts: articles.reverse(),
    },
  };
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="flex flex-col gap-2 w-full max-w-5xl">
        {posts.map((post, id) => {
          return (
            <Link
              href={`blog/${post.slug}`}
              key={id}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className="mb-3 text-2xl font-semibold">{post.title}</h2>
              <p className="m-0 text-sm opacity-50 mb-4">{post.excerpt}</p>
              <Tag text={post.category} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
