import { fetchGraphQL } from '../../../contenthub';
import { eventI } from '../../../../../interfaces';
import {eventParse}from '../../Parser'
import { eventQuery } from '../SharedData';

export const getEvent = async (id: string ): Promise<{ event: eventI }> => {
  try {
    const singleEventQuery: any = `
    query{
      m_CMP_Campaign(id:"${id}") {
        ${eventQuery}
      }
    }
    `;
    console.log(singleEventQuery);
    const eventFeed: any = await fetchGraphQL(singleEventQuery);
    const mappedevent: eventI = eventParse(eventFeed.data.m_CMP_Campaign);
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