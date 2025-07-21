import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'mphs3832',
  dataset: 'production',
  apiVersion: '2023-07-20',
  useCdn: true,
});