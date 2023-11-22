import { promises as fs } from 'fs';
import path from 'path';

async function update() {
  let i = 0;

  const combinedFilePath = './data/combined.json';
  const jsonContents = await fs.readFile(combinedFilePath, 'utf8');
  const latest2 = JSON.parse(jsonContents);

  for (const prop of latest2) {
    const gpt = prop.pageProps.gpt;
    //if (!prop.flow || prop.flow.nsfw) continue;

    let initPrompt = !prop.flow?'':`
<details>
<summary>initPrompt</summary>

\`\`\`
${prop.flow.initPrompt}
\`\`\`

</details>
`;

    const photo = gpt.openAiMetadata.gizmo.display.profile_picture_url;

 

    const gptContent = `
[![${gpt.name}](${photo})](${gpt.url})

# ${gpt.name} [ChatGPT Plus](${gpt.url}) / [Search ChatGPT Free](https://gptcall.net/index.html#/?search=${encodeURIComponent(gpt.name)})

${gpt.descriptionGenerated}

${gpt.guideGenerated}

${initPrompt}
`;

    const gptFileName = `${gpt.slug}.md`;
    const gptFilePath = path.join("gpts", gptFileName);

    await fs.writeFile(gptFilePath, gptContent);
    //console.log(i++);
  }
}

update();