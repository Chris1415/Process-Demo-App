import { assetQuery } from '../Assets/SharedData';

export const contentQuery =  `
... on M_Content_8e71f{
  _e71f_Title
  _e71f_Introduction
  _e71f_Text
  _e71f_Author
  _e71f_PublishDate
}
content_Name
publishStatus
__typename
localizationToContent {
  valueName
  displayName
}
id
cmpContentToLinkedAsset {
  total
  results {
    ${assetQuery}
  }
}
`