import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "zznozn4y",
  dataset: "production",
  useCdn: true,
});
export default client;
