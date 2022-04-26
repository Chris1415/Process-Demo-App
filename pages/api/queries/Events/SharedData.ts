import { assetQuery } from "../Assets/SharedData";

export const eventQuery =
  `
  id
  campaign_Name
  cmpCampaignToAsset{
     results{${assetQuery}}
  }
  campaignToContent {
  results {
    id
    ... on M_Content_WorkInstruction {
      workInstruction_Title
      workInstruction_Instructionvalidfrom
      workInstruction_Instructionvalidto
      workInstruction_WorkInstructionText
    }
    cmpContentToLinkedAsset{
      results{ ${assetQuery}}
    }
  }
}
`;
