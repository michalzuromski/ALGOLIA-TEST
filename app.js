const searchClient = algoliasearch(
  'Q0EH1N6WCD',  // Your Algolia App ID
  'c903bcbddf4530dae4139dd8e8cf23b7'  // Your Algolia API Key
);

const search = instantsearch({
  indexName: 'ALGOLIA_TST',  // Your Algolia Index Name
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#search-box',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div class="hit">
          <div class="hit-name">{{#helpers.highlight}}{ "attribute": "Topics related questions" }{{/helpers.highlight}}</div>
          <div class="hit-name">{{#helpers.highlight}}{ "attribute": "Genereal topics" }{{/helpers.highlight}}</div>
        </div>
      `,
    },
  }),
]);

search.start();
