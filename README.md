# EfrainQ Blog

This my personal blog website built with Svelte, IPFS and LensProtocol. This site mostly avoids importing any component libraries in order to stay relatively simple and 
allow me to learn more about Svelte. This was made initially as an exploratory exercise on how would one go about building a fully decentralized blog using Lens Protocol.

In order to run this site locally you need a `.env` file with the following variables:
```AWS_IPFS_LAMBDA_ENDPOINT={Endpoint to an AWS lambda function shown on another repo}
LENSHUB_CONTRACT_ADDRESS=0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d {LensHub contract address}
LENS_API_URL=https://api.lens.dev/playground {API link for Lens}
APP_NAME={Name of the app used on the tags for Lens Protocol Posts}
LENS_PROFILE_ID={User id in Lens Protocol used to control access}```
