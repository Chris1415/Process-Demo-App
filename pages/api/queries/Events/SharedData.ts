import { assetQuery } from "../Assets/SharedData";

export const eventQuery =
  `
  id
  processDescription
  process_Name
  cmpProcessToMasterAsset{
    ${assetQuery}
  }
  cmpProcessToAsset{
     results{${assetQuery}}
  }
  processToContent {
  results {
    id
    ... on M_Content_WorkInstruction {
      workInstruction_Title
      workInstruction_Instructionvalidfrom
      workInstruction_Instructionvalidto
      workInstruction_WorkInstructionText
      reference_WorkInstruction_NextStep_Parents {
        results{
          ... on M_Content_WorkInstruction {
            id
          }
        }
      }
      reference_WorkInstruction_PreviousStep_Parents {
        results{
          ... on M_Content_WorkInstruction {
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
