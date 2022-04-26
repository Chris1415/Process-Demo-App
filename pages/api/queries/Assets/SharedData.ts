

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

// Needs to be customized added to graphQL -> Not OOTB
const tagToAsset = `
tagToAsset{
  results{
    tagName
    autoCreated
  }
} `