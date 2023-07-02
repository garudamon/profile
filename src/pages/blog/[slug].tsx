import { postFilePaths, getArticleFromSlug, blogDateFormat } from "@/utils/mdx";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { BlogDetailProps } from "@/types/pages.blog";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHilight from "rehype-highlight";
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import Head from "next/head";
import { GetStaticProps } from "next/types";


export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path: string) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug: string) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps:GetStaticProps = async ({ params }) => {
  const { content, data, readingTime } = await getArticleFromSlug(params?.slug);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeCodeTitles, rehypeHilight],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      readingTime,
    },
  };
};

const BlogDetail = ({ source, frontMatter, readingTime }: BlogDetailProps) => {
  return (
    <>
    <Head>
      <title>Blog: {frontMatter.title}</title>
    </Head>
    <div className="flex flex-col w-full max-w-5xl">
      <section className="border-b dark:border-b-gray-800 border-b-gray-200 pb-5 mb-7">
        <div className="text-3xl mb-2">{frontMatter.title}</div>
        <div className="dark:text-gray-400 text-sm">
          Published at {frontMatter.publishedAt?.toString()}&nbsp;
          <span className="px-1">&#9679;</span> {readingTime}
        </div>
      </section>
      <article className="prose lg:prose-xl dark:prose-invert w-full">
        <MDXRemote {...source} />
      </article>
    </div>
    </>
  );
};

export default BlogDetail;
