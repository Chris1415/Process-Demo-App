import { assetQuery } from "../Assets/SharedData";
import { stepQuery } from "../Steps/SharedData";

export const eventQuery =
  `
  id
  processDescription
  process_Name
  task
  processToProductFamily{
    results{
      productFamilyName
    }
  }
  workCluster
  processDescription
  workPackage
  cmpProcessToMasterAsset{
    results{${assetQuery}}
  }
  cmpProcessToAsset{
     results{${assetQuery}}
  }
  processToContent {
  results {
    id
    ... on M_Content_WorkInstructionTemplate {
      ${stepQuery}
      reference_WorkInstruction_NextStep_Children {
        results{
          ... on M_Content_WorkInstructionTemplate {
            id
          }
        }
      }
      reference_WorkInstruction_NextStep_Parents {
        results{
          ... on M_Content_WorkInstructionTemplate {
            id
          }
        }
      }
    }
    cmpContentToMasterLinkedAsset{
      results{${assetQuery}}
    }
    cmpContentToLinkedAsset{
      results{ ${assetQuery}}
    }
  }
}
`;
