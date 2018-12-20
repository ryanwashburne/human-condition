const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const articleTemplate = path.resolve('./src/templates/ArticleTemplate.js')
    const issueTemplate = path.resolve('./src/templates/IssueTemplate.js')
    resolve(
      // Create article pages
      graphql(
        `
          {
            allContentfulArticle {
              edges {
                node {
                  type
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const articles = result.data.allContentfulArticle.edges
        articles.forEach((article) => {
          createPage({
            path: `/${article.node.type.toLowerCase()}/${article.node.slug}`,
            component: articleTemplate,
            context: {
              slug: article.node.slug
            },
          })
        })
      }),

      // Create issue pages
      graphql(
        `
          {
            allContentfulIssue {
              edges {
                node {
                  number
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const issues = result.data.allContentfulIssue.edges
        issues.forEach((issue) => {
          createPage({
            path: `/issue/${issue.node.number}`,
            component: issueTemplate,
            context: {
              slug: issue.node.number + '',
              number: issue.node.number
            },
          })
        })
      })
    )
  })
}
