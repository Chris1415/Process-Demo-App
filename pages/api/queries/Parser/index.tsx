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
  stepsFeed.cmpContentToLinkedAsset?.results?.length > 0
    ? stepsFeed.cmpContentToLinkedAsset.results.map((as: any) => {
        var asset = assetParse(as);
        assetArray.push(asset);
      })
    : null;

  const step: stepI = {
    Assets: assetArray,
    MainAsset:
      assetArray != null && assetArray.length > 0 ? assetArray[0] : null,
    Title: stepsFeed.workInstruction_Title ?? "",
    Text: stepsFeed.workInstruction_WorkInstructionText ?? "",
    ValidFrom: stepsFeed.workInstruction_Instructionvalidfrom ?? "",
    ValidTo: stepsFeed.workInstruction_Instructionvalidto ?? "",
    ValidFromRaw:
      stepsFeed?.workInstruction_Instructionvalidfrom != null
        ? new Date(
            stepsFeed?.workInstruction_Instructionvalidfrom
          ).toLocaleDateString()
        : "",
    ValidToRaw:
      stepsFeed?.workInstruction_Instructionvalidto != null
        ? new Date(
            stepsFeed?.workInstruction_Instructionvalidto
          ).toLocaleDateString()
        : "",
    Id: stepsFeed.id ?? "",
    Previous: stepsFeed.reference_WorkInstruction_PreviousStep_Parents?.results[0]?.id ?? "",
    Next: stepsFeed.reference_WorkInstruction_NextStep_Parents?.results[0]?.id ?? ""
  };

  return step;
}

function singleEventParse(eventFeed: any): eventI {
  const assetArray: assetI[] = [];
  eventFeed.cmpCampaignToAsset?.results?.length > 0
    ? eventFeed.cmpCampaignToAsset.results.map((pa: any) => {
        var asset = assetParse(pa);
        assetArray.push(asset);
      })
    : null;

  const stepsArray: stepI[] = [];
  eventFeed.campaignToContent?.results?.length > 0
    ? eventFeed.campaignToContent.results.map((st: any) => {
        var step = singleStepParse(st);
        stepsArray.push(step);
      })
    : null;

  var dateFeed = new Date(eventFeed?.date) ?? null;
  const date: dateI = {
    Year: dateFeed?.getFullYear() ?? 1900,
    Month: dateFeed?.getMonth() ?? 0,
    Date: dateFeed?.getDate() ?? 0,
  };
  const event: eventI = {
    Id: eventFeed.id ?? "",
    Name: eventFeed.campaign_Name ?? "",
    Assets: assetArray,
    MainAsset:
      assetArray != null && assetArray.length > 0 ? assetArray[0] : null,
    Steps: stepsArray,
  };

  return event;
}

//#endregion

//#region Interface

export function assetParse(assetFeed: any): assetI {
  var renditions: renditionI[] = [];
  assetFeed.assetToPublicLink?.results?.length > 0
    ? assetFeed.assetToPublicLink.results.map((publicLink: any) => {
        var rendition = renditionParse(publicLink);
        renditions.push(rendition);
      })
    : null;

  const asset: assetI = {
    title: assetFeed.title,
    id: assetFeed.id,
    fileName: assetFeed.fileName,
    Renditions: renditions,
  };

  return asset;
}

export function eventListParse(eventFeed: any): eventI[] {
  var eventArray: eventI[] = [];
  eventFeed.data.allM_CMP_Campaign?.results?.length > 0
    ? eventFeed.data.allM_CMP_Campaign.results.map((e: any) => {
        var event = eventParse(e);
        eventArray.push(event);
      })
    : null;

  return eventArray;
}

export function stepListParse(eventFeed: any): stepI[] {
  var eventArray: stepI[] = [];
  eventFeed.data.allM_Content_WorkInstruction?.results?.length > 0
    ? eventFeed.data.allM_Content_WorkInstruction.results.map((e: any) => {
        var event = stepParse(e);
        eventArray.push(event);
      })
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
