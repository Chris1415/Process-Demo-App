module.exports = {
  publicRuntimeConfig: {
    REVALIDATE: process.env.REVALIDATE,
    PUBLIC_LINK_URL: process.env.PUBLIC_LINK_URL,
    API_KEY: process.env.API_KEY,
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['jora415rosen.sitecoresandbox.cloud'],
  },
};
