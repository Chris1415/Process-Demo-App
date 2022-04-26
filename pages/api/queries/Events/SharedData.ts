import { assetQuery } from '../Assets/SharedData';

export const eventQuery =  `
      id
      title
      description
      date
      locationToEvent{
        id
        address
        taxonomyName
        taxonomyLabel
        locationToAsset{
          results{
            id
            fileName
            title
          assetToPublicLink {
            results {
              relativeUrl
              versionHash
              status
              fileKey
              resource
              relativeUrl
              versionHash
                }
              }
          }
        }
      }
      organizerToEvent{
        results{
          id
          taxonomyName
          taxonomyLabel
          organizerToAsset {
            results {
              id
              fileName
              title
              assetToPublicLink{
                results {
									status
                  fileKey
                  resource
                  relativeUrl
                  versionHash
                  
                	}
              	}
              }
            }
          }
        }
      eventToAsset{
        results{
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
          }
          }
      eventToMainAsset{
        results{
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
        }
      }
`