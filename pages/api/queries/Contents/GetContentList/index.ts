import { fetchGraphQL } from '../../../contenthub';
import { contentI } from '../../../../../interfaces';
import {contentListParse}from '../../Parser'
import { contentQuery } from '../SharedData';

export const getContentList = async (asc: boolean, contentName: string = "", numberResults: number = 1000 ) 
: Promise<{ content: contentI[] }> => {
  try {
    const contentListQuery: any = ` 
    query{  
      allM_Content_8e71f(
        orderBy: _E71F_PUBLISHDATE_${asc ? "ASC" : "DESC"}, 
        first: ${numberResults},
        where: { 
          OR : {
            _e71f_Title_contains : "${contentName}"
            _e71f_Introduction_contains : "${contentName}"
            _e71f_Text_contains : "${contentName}"
          }}){
        total
        results {
          ${contentQuery}
        }
      }
    }    
    `;

    // console.log(contentListQuery)
    const contentFeed: any = await fetchGraphQL(contentListQuery);
    // console.log(contentFeed)
    const contentArray: contentI[] = contentListParse(contentFeed);
    // console.log(contentArray)
    return {
      content: contentArray,
    };
  } catch (err) {
    console.log(err);
    return {
      content: [],
    };
  }
};