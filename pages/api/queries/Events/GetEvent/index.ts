import { fetchGraphQL } from '../../../contenthub';
import { eventI } from '../../../../../interfaces';
import {eventParse}from '../../Parser'
import { eventQuery } from '../SharedData';

export const getEvent = async (id: string ): Promise<{ event: eventI }> => {
  try {
    const singleEventQuery: any = `
    query{
      demo_CMP_Process(id:"${id}") {
        ${eventQuery}
      }
    }
    `;
    console.log(singleEventQuery);
    const eventFeed: any = await fetchGraphQL(singleEventQuery);
    const mappedevent: eventI = eventParse(eventFeed.data.demo_CMP_Process);
    return {
      event: mappedevent,
    };
  } catch (err) {
    console.log(err);
     return {
       event: {} as eventI,
     };
  }
};