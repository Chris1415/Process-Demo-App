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
  Type: string;
}


export interface eventI{
  Name: string;
  Id: string;
  Assets: assetI[];
  MainAsset: assetI;
  Steps: stepI[];
  Description: string;
  WorkPackage: string;
  ProcessDescription: string;
  WorkCluster: string;
  ProductFamilies: string[];
  Task: string;
  SubProcess: string;
}

export interface stepI{
  Title: string;
  Assets: assetI[];
  MainAsset: assetI;
  Id: string;
  Previous: string;
  Next: string;
  Process: string;
  StepNumber: string;
  GeneralSubjectInfo: string;
  SupportiveWBSStepInfo: string;
  NecessaryTaskInfoData: string;
  ReceivableDeviationInformation: string;
  CautionSafetyandCompliance: string;
  CriticalQualityIssue: string;
  CriticalProcessTaskCheck: string;
  RecurrentProficiencyChecks: string;
  PerformanceMetrixData: string;
  MisconductData: string;
  AuditFocus: string;
  ManagementDecision: string;
  Escalation: string;
  TaskCompletion: string;
  CompletionData: string;
  DeliveryInfoData: string;
  RequirementClassA: string;
  RequirementClassB: string;
  RequirementClassC: string;
  RequirementClassD: string;
  RequirementClassE: string;
  RequirementClassF: string;
  RequirementClassG: string;
  RequirementClassH: string;
  RequirementClassI: string;
  RequirementClassJ: string;
  RequirementClassK: string;
  RequirementClassL: string;
  RequirementClassM: string;
}

export interface dateI{
  Year: number;
  Month: number;
  Date: number;
}