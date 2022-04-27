import { assetQuery } from "../Assets/SharedData";

export const stepQuery = `
    processToContent{
        id
    }
    workInstruction_Title
    workInstruction_WorkInstructionText
    workInstruction_Instructionvalidfrom
    workInstruction_Instructionvalidto
    id
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
    cmpContentToLinkedAsset{
    results{${assetQuery}}
    }
    cmpContentToMasterLinkedAsset{
        results{${assetQuery}}
    }

`;
