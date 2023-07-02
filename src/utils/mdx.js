import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export const ARTICLES_PATH = "src/data/articles";

export async function getAllArticles() {
  const articles = fs.readdirSync(path.join(process.cwd(), ARTICLES_PATH));

  return articles.reduce((allArticles, articleSlug) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), ARTICLES_PATH, articleSlug),
      "utf-8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: articleSlug.replace(".mdx", ""),
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ];
  }, []);
}

export async function getArticleFromSlug(slug) {
  const postFilePath = path.join(ARTICLES_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  return {
    content,
    data,
    readingTime: readingTime(postFilePath).text,
  };
}

export const postFilePaths = fs
  .readdirSync("src/data/articles")
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const blogDateFormat = (date) => {
  const dateObject = new Date(date);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${dateObject.getDate()} ${monthNames[dateObject.getMonth() + 1]} ${dateObject.getFullYear()}`;
};
