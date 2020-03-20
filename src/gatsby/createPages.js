const createBlogPages = (pages, createPage, template) => {
  pages.forEach((page, index) => {
    const previous = index === pages.length - 1 ? null : pages[index + 1].node
    const next = index === 0 ? null : pages[index - 1].node

    createPage({
      path: page.node.fields.slug,
      component: template,
      context: {
        slug: page.node.fields.slug,
        timeToRead: page.node.timeToRead,
        previous,
        next,
      },
    })
  })
}

const createProjectPages = (pages, createPage, template) => {
  pages.forEach((page, index) => {
    const previous = index === pages.length - 1 ? null : pages[index + 1].node
    const next = index === 0 ? null : pages[index - 1].node

    createPage({
      path: page.node.fields.slug,
      component: template,
      context: {
        slug: page.node.fields.slug,
        previous,
        next,
      },
    })
  })
}
const createWorkPages = (pages, createPage, template) => {
  pages.forEach((page, index) => {
    const previous = index === pages.length - 1 ? null : pages[index + 1].node
    const next = index === 0 ? null : pages[index - 1].node

    createPage({
      path: page.node.fields.slug,
      component: template,
      context: {
        slug: page.node.fields.slug,
        timeToRead: page.node.timeToRead,
        previous,
        next,
      },
    })
  })
}

module.exports = { createBlogPages, createProjectPages, createWorkPages }
