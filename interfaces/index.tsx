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


export interface eventI{
  Name: string;
  Id: string;
  Assets: assetI[];
  MainAsset: assetI;
  Steps: stepI[];
}

export interface stepI{
  ValidFromRaw: string;
  ValidToRaw: string;
  ValidFrom: dateI;
  ValidTo: dateI;
  Title: string;
  Text: string;
  Assets: assetI[];
  MainAsset: assetI;
  Id: string;
  Previous: string;
  Next: string;
  Process: string;
}

export interface dateI{
  Year: number;
  Month: number;
  Date: number;
}