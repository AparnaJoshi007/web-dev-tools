import {MarkdownToHtmlConverter} from "@/app/markdown-to-html/markdown-to-html";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Markdown to HTML converter',
  description: 'Convert markdown to HTML',
  keywords: 'markdown, html, converter, md'
}

const MarkdownToHtmlPage = () => {
  return (
    <MarkdownToHtmlConverter />
  )
}

export default MarkdownToHtmlPage;
