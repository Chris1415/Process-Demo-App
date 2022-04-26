export interface contentI {
  Name: string;
  PublishStatus: string;
  Description: string;
  Content: string;
  Introduction: string;
  assets: assetI[];
  Id: string;
  Author: string;
  ReleaseDate: string;
}

export interface renditionI {
  relativeUrl: string;
  versionHash: string;
  url: string;
  resource: string;
  type: string;
}

export interface assetI {
  fileName: string;
  id: string;
  title: string;
  Renditions: renditionI[];
}

export interface contentDataI {
  contents: contentI[];
}

export interface productI {
  Name: string;
  Id: string;
  Price: string;
  assets: assetI[];
  contents: contentI[];
  LongDescription: string;
  Catalogs: string[];
}

export interface eventI{
  Name: string;
  Id: string;
  Description: string;
  Location: locationI;
  Organizer: organizerI[];
  Assets: assetI[];
  MainAsset: assetI;
  EventDate : string;  
  EventDateRaw : dateI;
}

export interface locationI{
  Name: string;
  Id: string;
  Address: string;
  Asset: assetI;
}

export interface organizerI{
  Name: string;
  Id: string;
  Asset: assetI;
}

export interface dateI{
  Year: number;
  Month: number;
  Date: number;
}