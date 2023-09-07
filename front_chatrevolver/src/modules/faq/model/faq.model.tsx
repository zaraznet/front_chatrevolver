import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { markdownToHtml } from "./markdown-to-html";

interface IFaq {
  slug: string;
  content: string;
}

const dir = join(process.cwd(), "src/markdown/faq");

export const getFaqBySlug = async (slug: string): Promise<IFaq> => {
  const path = join(dir, `${slug}.md`);
  const file = fs.readFileSync(path, "utf8");

  const { data: meta, content: markdown } = matter(file);
  const content = await markdownToHtml(markdown);

  return {
    slug,
    content,
  };
};

export const getFaqSlugs = (): string[] => {
  return fs
    .readdirSync(dir)
    .filter((it) => it.endsWith(".md"))
    .map((it) => it.replace(/.md$/, ""));
};
