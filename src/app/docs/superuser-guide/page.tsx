import { FC } from "react";
import fs from "fs";
import path from "path";
import { marked } from "marked";

async function getGuideContent() {
  const filePath = path.join(process.cwd(), "docs", "superuser-guide.md");
  const fileContent = await fs.promises.readFile(filePath, "utf8");
  return marked(fileContent);
}

const SuperuserGuidePage: FC = async () => {
  const content = await getGuideContent();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <article className="prose prose-lg prose-indigo max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>
  );
};

export default SuperuserGuidePage;
