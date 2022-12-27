import axios from "axios";

export const uploadJSONtoIPFS = async (json) => {
  const resFile = await axios({
    method: "post",
    url: `${AWS_IPFS_LAMBDA_ENDPOINT}`,
    data: json,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let ipfsHash = `ipfs://${resFile.data.ipfs_hash}`;
  return ipfsHash;
};
