import { createClient } from "@sanity/client"

const client = createClient({
  projectId: "ie8xrz97", // replace with your Overdrive Originals Sanity project ID
  dataset: "production",
  apiVersion: "2023-07-20",
  useCdn: true,
})

export default client