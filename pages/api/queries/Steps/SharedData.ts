import { assetQuery } from "../Assets/SharedData";

export const stepQuery = `
    content_Name
    workInstructionTemplate_StepNumber
    workInstructionTemplate_GeneralSubjectInfo
    workInstructionTemplate_SupportiveWBSStepInfo
    workInstructionTemplate_NecessaryTaskInfoData
    workInstructionTemplate_ReceivableDeviationInformation
    workInstructionTemplate_CautionSafetyandCompliance
    workInstructionTemplate_CriticalQualityIssue
    workInstructionTemplate_CriticalProcessTaskCheck
    workInstructionTemplate_RecurrentProficiencyChecks
    workInstructionTemplate_PerformanceMetrixData
    workInstructionTemplate_MisconductData
    workInstructionTemplate_AuditFocus
    workInstructionTemplate_ManagementDecision
    workInstructionTemplate_Escalation
    workInstructionTemplate_TaskCompletion
    workInstructionTemplate_CompletionData
    workInstructionTemplate_DeliveryInfoData
    workInstructionTemplate_RequirementClassA
    workInstructionTemplate_RequirementClassB
    workInstructionTemplate_RequirementClassC
    workInstructionTemplate_RequirementClassD
    workInstructionTemplate_RequirementClassE
    workInstructionTemplate_RequirementClassF
    workInstructionTemplate_RequirementClassG
    workInstructionTemplate_RequirementClassH
    workInstructionTemplate_RequirementClassI
    workInstructionTemplate_RequirementClassJ
    workInstructionTemplate_RequirementClassK
    workInstructionTemplate_RequirementClassL
    workInstructionTemplate_RequirementClassM
    processToContent{
        id
    }
    id
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
            content_Name
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
