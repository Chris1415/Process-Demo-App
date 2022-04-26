import { fetchGraphQL } from '../../../contenthub';
import { stepI } from '../../../../../interfaces';
import {stepListParse}from '../../Parser'
import { stepQuery } from '../SharedData';

export const getSteps = async(numberResults: number = 1000) 
: Promise<{ steps: stepI[] }> => {
  try {
    const eventListQuery: any = `
    query{
        allM_Content_WorkInstruction{
        total
        results {
          ${stepQuery}
        }
      }
    }    
    `;  
 
    console.log(eventListQuery);
    const eventFeed: any = await fetchGraphQL(eventListQuery);
    // console.log("fetch events from graph: " + JSON.stringify(eventFeed));
    const eventArray: stepI[] = stepListParse(eventFeed);
    // console.log(eventArray);
    return {
        steps: eventArray,
    };
  } catch (err) {
    console.log(err);
    return {
        steps: [],
    };
  }
};