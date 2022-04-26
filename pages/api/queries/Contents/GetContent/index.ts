import { fetchGraphQL } from '../../../contenthub';
import { contentI } from '../../../../../interfaces';
import {contentParse}from '../../Parser'
import { contentQuery } from '../SharedData';

export const getContent = async (id: string ): Promise<{ content: contentI }> => {
  try {
    const singleContentQuery: any = `
    query{
      m_Content(id: "${id}") {
        ${contentQuery}
      }
    }
    `;
    const contentFeed: any = await fetchGraphQL(singleContentQuery);
    const mappedcontent: contentI = contentParse(contentFeed);
    return {
      content: mappedcontent,
    };
  } catch (err) {
    console.log(err);
     return {
       content: {} as contentI,
     };
  }
};