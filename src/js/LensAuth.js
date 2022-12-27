import { web3Info,web3Store } from "./Web3Info";
import { get } from "svelte/store";
import { requestChallengeQuery, authenticateQuery } from "./LensQueries";

export async function handleLensAuth() {
  const address = get(web3Info).account;
  const web3 = get(web3Store);

  let challengeText = await requestChallengeQuery(address);

  let signature = await web3.eth.sign(challengeText, address);

  const response = await authenticateQuery(address, signature);

  return response.data.authenticate;
}
