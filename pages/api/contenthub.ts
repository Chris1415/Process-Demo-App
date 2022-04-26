import getConfig from "next/config";

export async function fetchGraphQL(query: any): Promise<any> {
  const { publicRuntimeConfig } = getConfig();
  let apiKey = publicRuntimeConfig.API_KEY;
  let endpointUrl = publicRuntimeConfig.GRAPHQL_ENDPOINT;

  try {
    const result = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-GQL-Token': apiKey,
      },
      body: JSON.stringify({ query }),
    }).then((response: any) => response.json());
    return result;
  } catch (error) {
    return console.log(error);
  }
}
