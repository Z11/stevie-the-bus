import * as prismic from '@prismicio/client'

export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY || 'steviethephotobus'

export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    ...config,
  })

  return client
}
