import { createClient, SanityClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

export const sanityClient: SanityClient = createClient({
  projectId: "3n5tl1px",
  dataset: "production",
  apiVersion: "2024-11-25",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

// const builder = imageUrlBuilder(sanityClient);

// export const urlFor = (source) => builder.image(source);
