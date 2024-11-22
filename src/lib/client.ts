import { createClient, SanityClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

export const sanityClient: SanityClient = createClient({
  projectId: "8xpjg0gr",
  dataset: "production",
  apiVersion: "2024-11-22",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

// const builder = imageUrlBuilder(sanityClient);

// export const urlFor = (source) => builder.image(source);
