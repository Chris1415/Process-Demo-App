import getConfig from "next/config";
import {
  contentI,
  assetI,
  productI,
  eventI,
  renditionI,
  locationI,
  organizerI,
  dateI,
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

function singleContentParse(contentFeed: any): contentI {
  const assetArray: assetI[] = [];
  contentFeed.cmpContentToLinkedAsset?.results?.length > 0
    ? contentFeed.cmpContentToLinkedAsset.results.map((pa: any) => {
        var asset = assetParse(pa);
        assetArray.push(asset);
      })
    : null;

  const content: contentI = {
    Id: contentFeed.id,
    Name: contentFeed.content_Name,
    Description: contentFeed?._e71f_Title,
    Content: contentFeed?._e71f_Text ?? "",
    Introduction: contentFeed?._e71f_Introduction,
    Author: contentFeed?._e71f_Author ?? "",
    ReleaseDate:
      contentFeed?._e71f_PublishDate != null
        ? new Date(contentFeed?._e71f_PublishDate).toLocaleDateString()
        : "",
    assets: assetArray,
    PublishStatus: contentFeed.publishStatus,
  };

  return content;
}

function singleProductParse(productFeed: any): productI {
  const assetArray: assetI[] = [];
  productFeed.pCMProductToAsset?.results?.length > 0
    ? productFeed.pCMProductToAsset.results.map((pa: any) => {
        var asset = assetParse(pa);
        assetArray.push(asset);
      })
    : null;

  const contentArray: contentI[] = [];
  productFeed.pCMProductToContent?.results?.length > 0
    ? productFeed.pCMProductToContent.results.map((pc: any) => {
        var content = singleContentParse(pc);
        contentArray.push(content);
      })
    : null;

  const catalogs: string[] = [];
  productFeed.pCMCatalogToProduct?.results?.lenght > 0
    ? productFeed.pCMCatalogToProduct.results.map((pCatalog: any) => {
        catalogs.push(pCatalog.catalogName);
      })
    : null;

  const product: productI = {
    Id: productFeed.id,
    Name: productFeed.productName,
    LongDescription: productFeed.productLongDescription["en-US"],
    assets: assetArray,
    contents: contentArray,
    Price: productFeed.productPrice,
    Catalogs: catalogs,
  };

  return product;
}

function singleEventParse(eventFeed: any): eventI {
  const assetArray: assetI[] = [];
  eventFeed.eventToAsset?.results?.length > 0
    ? eventFeed.eventToAsset.results.map((pa: any) => {
        var asset = assetParse(pa);
        assetArray.push(asset);
      })
    : null;

  const mainAssetArray: assetI[] = [];
  eventFeed.eventToMainAsset?.results?.length > 0
    ? eventFeed.eventToMainAsset.results.map((pa: any) => {
        var asset = assetParse(pa);
        mainAssetArray.push(asset);
      })
    : null;

  var dateFeed = new Date(eventFeed?.date) ?? null;
  const date: dateI = {
    Year: dateFeed?.getFullYear() ?? 1900,
    Month: dateFeed?.getMonth() ?? 0,
    Date: dateFeed?.getDate() ?? 0,
  };
  const event: eventI = {
    Id: eventFeed.id,
    Name: eventFeed.title,
    Description: eventFeed?.description,
    EventDate:
      eventFeed?.date != null
        ? new Date(eventFeed?.date).toLocaleDateString()
        : "",
    EventDateRaw: date,
    Assets: assetArray,
    MainAsset:
      mainAssetArray != null && mainAssetArray.length > 0
        ? mainAssetArray[0]
        : null,
    Location: locationParse(eventFeed?.locationToEvent),
    Organizer: organizerListParse(eventFeed?.organizerToEvent),
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

export function contentListParse(contentFeed: any): contentI[] {
  var contentArray: contentI[] = [];
  contentFeed.data.allM_Content_8e71f?.results?.length > 0
    ? contentFeed.data.allM_Content_8e71f.results.map((c: any) => {
        var content = singleContentParse(c);
        contentArray.push(content);
      })
    : null;

  return contentArray;
}

export function contentParse(contentFeed: any): contentI {
  var returnedContent = contentFeed.data.m_Content;
  return singleContentParse(returnedContent);
}

export function productListParse(productFeed: any): productI[] {
  const productArray: productI[] = [];
  productFeed.data.allM_PCM_Product?.results?.length > 0
    ? productFeed.data.allM_PCM_Product.results.map((p: any) => {
        var product = singleProductParse(p);
        productArray.push(product);
      })
    : null;
  return productArray;
}

export function productParse(productFeed: any): productI {
  const p = productFeed.data.m_PCM_Product;
  return singleProductParse(p);
}

export function eventListParse(eventFeed: any): eventI[] {
  var eventArray: eventI[] = [];
  eventFeed.data.allFL_Event?.results?.length > 0
    ? eventFeed.data.allFL_Event.results.map((e: any) => {
        var event = eventParse(e);
        eventArray.push(event);
      })
    : null;

  return eventArray;
}

export function organizerListParse(organizerFeed: any): organizerI[] {
  var organizerArray: organizerI[] = [];
  organizerFeed.results?.length > 0
    ? organizerFeed.results.map((o: any) => {
        var organizer = organizerParse(o);
        organizerArray.push(organizer);
      })
    : null;

  return organizerArray;
}

export function eventParse(event: any): eventI {
  return singleEventParse(event);
}

export function locationParse(locationFeed: any): locationI {
  const location: locationI = {
    Id: locationFeed?.id ?? "",
    Name: locationFeed?.taxonomyName ?? "",
    Address: locationFeed?.address ?? "",
    Asset: assetParse(locationFeed?.locationToAsset?.results[0]),
  };

  return location;
}

export function organizerParse(organizerFeed: any): organizerI {
  const organizer: organizerI = {
    Id: organizerFeed.id,
    Name: organizerFeed.taxonomyLabel["en-US"],
    Asset: null,
  };
  return organizer;
}
//#endregion
