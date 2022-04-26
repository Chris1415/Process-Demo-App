

export const assetQuery =  `
id
fileName
title  
assetToPublicLink {
  results {
    status
    fileKey
    resource
    relativeUrl
    versionHash
  }
}
renditions
`