import { fetchGraphQL } from '../../../contenthub';
import { eventI } from '../../../../../interfaces';
import {eventListParse}from '../../Parser'
import { eventQuery } from '../SharedData';

export const getEventList = async(numberResults: number = 1000) 
: Promise<{ events: eventI[] }> => {
  try {
    const eventListQuery: any = `
    query{
      allDemo_CMP_Process{
        total
        results {
          ${eventQuery}
        }
      }
    }    
    `;  
 
    //console.log(eventListQuery);
    const eventFeed: any = await fetchGraphQL(eventListQuery);
    // console.log("fetch events from graph: " + JSON.stringify(eventFeed));
    const eventArray: eventI[] = eventListParse(eventFeed);
    // console.log(eventArray);
    return {
      events: eventArray,
    };
  } catch (err) {
    console.log(err);
    return {
      events: [],
    };
  }
};