export const resolveIPFS = (ipfs_url) => {
    return ipfs_url.replace('ipfs://','https://ipfs.io/ipfs/')
}