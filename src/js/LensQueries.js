import axios from "axios";

//const API_URL = "https://api.lens.dev/playground";

export async function getLensCommentContent(pub_id){
  const lensCommentContentQuery = `query comments($limit: LimitScalar = 10, $cursor: Cursor = null, $pubId: InternalPublicationId = "0x43e0-0x14"){
    publications(request: {
      limit: $limit
      cursor: $cursor
      commentsOf: $pubId
      metadata:{
        tags:{
          all:["${APP_NAME}"]
        }
      }
    }) {
      items{
        ...CommentFields
      }
      pageInfo{
        totalCount
      }
    }
  }
  
  
  fragment MetadataOutputFields on MetadataOutput {
    name
    content
  }
  
  
  fragment CommentFields on Comment {
    id
    profile{
      id
      handle
      picture{
          ... on NftImage{
            contractAddress
            tokenId
            chainId
            uri
          }
          ... on MediaSet{
            original{
            url
          }
        }
      }
      
    }
    metadata {
      ...MetadataOutputFields
    }
    createdAt
  }`
  const payload = {
    query: lensCommentContentQuery,
    variables: {
      pubId: pub_id
    },
  }; 
  const result = await axios.post(LENS_API_URL, payload);
  return result.data.data.publications.items.map((element) => {
    return {
      id: element.id,
      content: element.metadata.content,
      profile: {
        id: element.profile.id,
        handle: element.profile.handle,
        pfp_url: element.profile.picture.original.url
      }
    };
  });
}

export async function getLensPostContent(id){
  const lensPostContentQuery = `query Publication($publicationId: InternalPublicationId = "0x43e0-0x12"){
    publication(request: {
      publicationId: $publicationId
    }) {
        ...PostFields
    }
  }
  
  
  fragment MetadataOutputFields on MetadataOutput {
    name
    content
  }
  
  
  fragment PostFields on Post {
    metadata {
      ...MetadataOutputFields
    }
    createdAt
  }`
  const payload = {
    query: lensPostContentQuery,
    variables: {
      publicationId: id
    },
  }; 
  const result = await axios.post(LENS_API_URL, payload);
  return result.data.data.publication.metadata;
}

export async function getLensPostTitles(limit = 10, cursor = null) {
  const lensPostTitlesQuery = `query Publication($limit: LimitScalar = 10, $cursor: Cursor = null, $profileId: ProfileId = "0x43e0"){
    publications(request: {
      limit: $limit
      cursor: $cursor
      profileId: $profileId
      publicationTypes: POST
      metadata:{
        tags:{
          all:["${APP_NAME}"]
        }
      }
    }) {
      items{
        ...PostFields
      }
      pageInfo{
        prev
        next
        totalCount
      }
    }
  }
  
  
  fragment MetadataOutputFields on MetadataOutput {
    name
  }
  
  
  fragment PostFields on Post {
    id
    metadata {
      ...MetadataOutputFields
    }
    createdAt
  }`;
  const payload = {
    query: lensPostTitlesQuery,
    variables: {
      limit: limit,
      cursor: cursor,
      profileId: LENS_PROFILE_ID
    },
  };
  const result = await axios.post(LENS_API_URL, payload);
  return {
    title_data: result.data.data.publications.items.map((element) => {
      return {
        title: element.metadata.name,
        id: element.id,
      };
    }),
    pageInfo: result.data.data.publications.pageInfo,
  };
}

export async function getLensProfileData(address) {
  const lensProfileDataQuery = `query ProfileData($address: EthereumAddress = "0x0000000000000000000000000000000000000001"){
        profiles(request: {
          ownedBy: [$address]
        }){
          items{
            id
            name
            bio
            handle
            picture{
              ... on NftImage{
                contractAddress
                tokenId
                chainId
                uri
              }
                ... on MediaSet{
                  original{
                  url
                }
                }
            }
            isDefault
          }
        }
      }`;
  const payload = {
    query: lensProfileDataQuery,
    variables: {
      address: address,
    },
  };
  let result = undefined;
  await axios.post(LENS_API_URL, payload).then((res) => {
    result = res.data;
  });
  return result.data.profiles.items[0];
}

export async function requestChallengeQuery(address) {
  const challengeQuery = `query Challenge {
        challenge(request: { address: "${address}"  }) {
        text
        } 
        }`;
  const payload = {
    operationName: "Challenge",
    variables: {},
    query: challengeQuery,
  };
  let result = undefined;
  await axios.post(LENS_API_URL, payload).then((res) => {
    result = res.data;
  });
  return result.data.challenge.text;
}

export async function authenticateQuery(address, signature) {
  const authenticationQuery = `
    mutation Authenticate {
    authenticate(request: {
        address: "${address}",
        signature: "${signature}"
    }) {
        accessToken
        refreshToken
    }
    }`;
  const payload = {
    operationName: "Authenticate",
    variables: {},
    query: authenticationQuery,
  };
  let result = undefined;
  await axios.post(LENS_API_URL, payload).then((res) => {
    result = res.data;
  });
  return result;
}
