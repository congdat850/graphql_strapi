# graphql_strapi
# install graphql for strapi
- source: https://docs.strapi.io/developer-docs/latest/plugins/graphql.html#usage
yarn strapi install graphql

create file ./config/plugins.js input text below

module.exports = {
  //
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};

# documnet help query graphql in trapi
- source: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/graphql-api.html#fetch-multiple-entries

query
query {
  stores {
    data{
      id,
      attributes {
        name
      }
    }
  }
}

username: congdat.1088@gmail.com
password: Datnc123