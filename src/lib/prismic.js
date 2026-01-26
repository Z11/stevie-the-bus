import * as prismic from '@prismicio/client'

export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY

export const createClient = (config = {}) => {
  if (!repositoryName) {
    throw new Error('NEXT_PUBLIC_PRISMIC_REPOSITORY environment variable is required')
  }
  
  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    ...config,
  })

  return client
}
