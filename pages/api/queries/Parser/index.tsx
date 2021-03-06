import getConfig from "next/config";
import {
  assetI,
  eventI,
  renditionI,
  dateI,
  stepI,
} from "../../../../interfaces";

//#region Helper

function renditionParse(renditionFeed: any): renditionI {
  const { publicRuntimeConfig } = getConfig();
  const rendition: renditionI = {
    relativeUrl: renditionFeed.relativeUrl,
    versionHash: renditionFeed.versionHash,
    url:
      publicRuntimeConfig.PUBLIC_LINK_URL +
      renditionFeed.relativeUrl +
      "?" +
      renditionFeed.versionHash,
    resource: renditionFeed.resource,
    type: "",
  };

  return rendition;
}

function singleStepParse(stepsFeed: any): stepI {
  const assetArray: assetI[] = [];
  stepsFeed?.cmpContentToLinkedAsset?.results?.length > 0 ?? false
    ? stepsFeed.cmpContentToLinkedAsset.results.map((as: any) => {
        var asset = assetParse(as);
        if (asset != null) {
          assetArray.push(asset);
        }
      })
    : null;

  const step: stepI = {
    Assets: assetArray,
    MainAsset:
      stepsFeed?.cmpContentToMasterLinkedAsset?.results[0] != null
        ? assetParse(stepsFeed?.cmpContentToMasterLinkedAsset?.results[0])
        : null,
    Title: stepsFeed.content_Name ?? "",
    Id: stepsFeed.id ?? "",
    Previous:
      stepsFeed.reference_WorkInstruction_NextStep_Children?.results[0]?.id ??
      "",
    Next:
      stepsFeed.reference_WorkInstruction_NextStep_Parents?.results[0]?.id ??
      "",
    Process: stepsFeed?.processToContent?.id ?? "",
    AuditFocus: stepsFeed?.workInstructionTemplate_AuditFocus ?? "",
    CautionSafetyandCompliance:
      stepsFeed?.workInstructionTemplate_CautionSafetyandCompliance ?? "",
    CompletionData: stepsFeed?.workInstructionTemplate_CompletionData ?? "",
    CriticalProcessTaskCheck:
      stepsFeed?.workInstructionTemplate_CriticalProcessTaskCheck ?? "",
    CriticalQualityIssue:
      stepsFeed?.workInstructionTemplate_CriticalQualityIssue ?? "",
    DeliveryInfoData: stepsFeed?.workInstructionTemplate_DeliveryInfoData ?? "",
    Escalation: stepsFeed?.workInstructionTemplate_Escalation ?? "",
    GeneralSubjectInfo:
      stepsFeed?.workInstructionTemplate_GeneralSubjectInfo ?? "",
    ManagementDecision:
      stepsFeed?.workInstructionTemplate_ManagementDecision ?? "",
    MisconductData: stepsFeed?.workInstructionTemplate_MisconductData ?? "",
    NecessaryTaskInfoData:
      stepsFeed?.workInstructionTemplate_NecessaryTaskInfoData ?? "",
    PerformanceMetrixData:
      stepsFeed?.workInstructionTemplate_PerformanceMetrixData ?? "",
    ReceivableDeviationInformation:
      stepsFeed?.workInstructionTemplate_ReceivableDeviationInformation ?? "",
    RecurrentProficiencyChecks:
      stepsFeed?.workInstructionTemplate_RecurrentProficiencyChecks ?? "",
    RequirementClassA:
      stepsFeed?.workInstructionTemplate_RequirementClassA ?? "",
    RequirementClassB:
      stepsFeed?.workInstructionTemplate_RequirementClassB ?? "",
    RequirementClassC:
      stepsFeed?.workInstructionTemplate_RequirementClassC ?? "",
    RequirementClassD:
      stepsFeed?.workInstructionTemplate_RequirementClassD ?? "",
    RequirementClassE:
      stepsFeed?.workInstructionTemplate_RequirementClassE ?? "",
    RequirementClassF:
      stepsFeed?.workInstructionTemplate_RequirementClassF ?? "",
    RequirementClassG:
      stepsFeed?.workInstructionTemplate_RequirementClassG ?? "",
    RequirementClassH:
      stepsFeed?.workInstructionTemplate_RequirementClassH ?? "",
    RequirementClassI:
      stepsFeed?.workInstructionTemplate_RequirementClassI ?? "",
    RequirementClassJ:
      stepsFeed?.workInstructionTemplate_RequirementClassJ ?? "",
    RequirementClassK:
      stepsFeed?.workInstructionTemplate_RequirementClassK ?? "",
    RequirementClassL:
      stepsFeed?.workInstructionTemplate_RequirementClassL ?? "",
    RequirementClassM:
      stepsFeed?.workInstructionTemplate_RequirementClassM ?? "",
    StepNumber: stepsFeed?.workInstructionTemplate_StepNumber ?? "",
    SupportiveWBSStepInfo:
      stepsFeed?.workInstructionTemplate_SupportiveWBSStepInfo ?? "",
    TaskCompletion: stepsFeed?.workInstructionTemplate_TaskCompletion ?? "",
  };

  return step;
}

function singleEventParse(eventFeed: any): eventI {
  const assetArray: assetI[] = [];
  eventFeed.cmpProcessToAsset?.results?.length > 0
    ? eventFeed.cmpProcessToAsset.results.map((pa: any) => {
        if (pa) {
          var asset = assetParse(pa);
          if (asset != null) {
            assetArray.push(asset);
          }
        }
      })
    : null;

  const stepsArray: stepI[] = [];
  eventFeed.processToContent?.results?.length > 0
    ? eventFeed.processToContent.results.map((st: any) => {
        var step = singleStepParse(st);
        stepsArray.push(step);
      })
    : null;

  const sortedStepsArray = SortSteps(stepsArray);

  var dateFeed = new Date(eventFeed?.date) ?? null;
  const date: dateI = {
    Year: dateFeed?.getFullYear() ?? 1900,
    Month: dateFeed?.getMonth() ?? 0,
    Date: dateFeed?.getDate() ?? 0,
  };

  const event: eventI = {
    Id: eventFeed.id ?? "",
    Name: eventFeed?.process_Name["en-US"] ?? "",
    Assets: assetArray,
    MainAsset:
      eventFeed?.cmpProcessToMasterAsset?.results[0] != null
        ? assetParse(eventFeed.cmpProcessToMasterAsset.results[0])
        : null,
    Steps: sortedStepsArray,
    Description: eventFeed?.processDescription["en-US"] ?? "",
    ProcessDescription: eventFeed?.processDescription["en-US"] ?? "",
    SubProcess: eventFeed?.processToSubProcess?.taxonomyName ?? "",
    Task: eventFeed?.task["en-US"] ?? "",
    WorkCluster: eventFeed?.workCluster["en-US"],
    WorkPackage: eventFeed?.workPackage["en-US"],
    ProductFamilies: eventFeed?.processToProductFamily?.results?.map(
      (element: { productFamilyName: any }) => element.productFamilyName
    ),
  };

  return event;
}

//#endregion

//#region Interface

function SortSteps(steps: stepI[]): stepI[] {
  return steps.sort(
    (a, b) => parseInt(a.StepNumber, 10) - parseInt(b.StepNumber, 10)
  );
}

export function assetParse(assetFeed: any): assetI {
  var renditions: renditionI[] = [];
  assetFeed?.assetToPublicLink?.results?.length > 0
    ? assetFeed.assetToPublicLink.results.map((publicLink: any) => {
        var rendition = renditionParse(publicLink);
        renditions.push(rendition);
      })
    : null;

  const asset: assetI = {
    title: assetFeed?.title ?? "",
    id: assetFeed?.id ?? "",
    fileName: assetFeed?.fileName ?? "",
    Renditions: renditions,
    Type: assetFeed?.fileName.includes(".mp4") ? "mp4" : "jpg",
  };

  return asset;
}

export function eventListParse(eventFeed: any): eventI[] {
  var eventArray: eventI[] = [];
  eventFeed.data.allDemo_CMP_Process?.results?.length > 0
    ? eventFeed.data.allDemo_CMP_Process.results.map((e: any) => {
        var event = eventParse(e);
        eventArray.push(event);
      })
    : null;

  return eventArray;
}

export function stepListParse(eventFeed: any): stepI[] {
  var eventArray: stepI[] = [];
  eventFeed.data.allM_Content_WorkInstructionTemplate?.results?.length > 0
    ? eventFeed.data.allM_Content_WorkInstructionTemplate.results.map(
        (e: any) => {
          var event = stepParse(e);
          eventArray.push(event);
        }
      )
    : null;

  return eventArray;
}

export function eventParse(event: any): eventI {
  return singleEventParse(event);
}

export function stepParse(step: any): stepI {
  return singleStepParse(step);
}

//#endregion
