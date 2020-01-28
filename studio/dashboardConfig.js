export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e2f871b83a12a4f1f2e771b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zxi4q7dk',
                  apiId: 'e56b7e45-a6a2-4d0f-a9d6-dcd77b8df6c1'
                },
                {
                  buildHookId: '5e2f871b8ac2c8d7ce4efa03',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jf81akm7',
                  apiId: '072d7a70-f8a2-4871-93cf-bc0f961cdc4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tcamara/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jf81akm7.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
