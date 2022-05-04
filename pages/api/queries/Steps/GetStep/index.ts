import { fetchGraphQL } from "../../../contenthub";
import { stepI } from "../../../../../interfaces";
import { stepParse } from "../../Parser";
import { stepQuery } from "../SharedData";

export const getStep = async (id: string): Promise<{ step: stepI }> => {
  try {
    const singleStepQuery: any = `
    query{
      m_Content_WorkInstructionTemplate(id:"${id}") {
        ${stepQuery}
      }
    }
    `;
    console.log(singleStepQuery);
    const stepFeed: any = await fetchGraphQL(singleStepQuery);
    const mappedStep: stepI = stepParse(stepFeed.data.m_Content_WorkInstructionTemplate);
    return {
      step: mappedStep,
    };
  } catch (err) {
    console.log(err);
    return {
      step: {} as stepI,
    };
  }
};
