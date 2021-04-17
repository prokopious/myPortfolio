export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607b05a4171dbb9dc2eda42e',
                  title: 'Sanity Studio',
                  name: 'myportfolio-studio-djr9f3t9',
                  apiId: 'ebafb2b5-0ca5-4b71-b219-36ed0e2ffa18'
                },
                {
                  buildHookId: '607b05a478459a66b498cb03',
                  title: 'Portfolio Website',
                  name: 'myportfolio-web-kvifsaz1',
                  apiId: '8c1a4c4b-0c44-47c6-951b-5dfe81256ec4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prokopious/myPortfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://myportfolio-web-kvifsaz1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
