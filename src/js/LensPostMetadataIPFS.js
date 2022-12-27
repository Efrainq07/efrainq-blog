import { v4 as uuidv4} from 'uuid';
import { uploadJSONtoIPFS } from "./JSONPinataPin.js";

const createLensPostMetadata = (title, post_content) => {
  return {
    version: "2.0.0",
    metadata_id: uuidv4(),
    description: `'${title}' blog post by Efrain Quintero.`,
    content: post_content,
    locale: "en-Us",
    tags: [APP_NAME, "blogpost"],
    mainContentFocus: "ARTICLE",
    name: title,
    attributes: [
      {
        traitType: "type",
        value: "post",
      },
    ],
    appId: APP_NAME,
  };
};

const createLensCommentMetadata = (post_title,comment_content) => {
  return {
    version: "2.0.0",
    metadata_id: uuidv4(),
    description: `Comment on "${post_title}" blog post by Efrain Quintero.`,
    content: comment_content,
    locale: "en-Us",
    tags: [APP_NAME, "comment"],
    mainContentFocus: "TEXT_ONLY",
    name: `Comment on "${post_title}"`,
    attributes: [
      {
        traitType: "type",
        value: "comment",
      },
    ],
    appId: APP_NAME,
  };
};

export const uploadPostMetadataToIPFS = async (title, post_content) => {
  const metadata = createLensPostMetadata(title, post_content);
  const cid = await uploadJSONtoIPFS(metadata);
  return cid;
};

export const uploadCommentMetadataToIPFS = async (post_title, post_content) => {
  const metadata = createLensCommentMetadata(post_title, post_content);
  const cid = await uploadJSONtoIPFS(metadata);
  return cid;
};
