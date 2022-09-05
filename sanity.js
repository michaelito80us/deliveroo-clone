import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = SanityClient({
  projectId: "jhm72jke",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-08-31",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception for localhost 300 CORS policy
// go to the santy folder :   cd sanity
// type:  sanity cors add http://localhost:3000
// Allow credentials to be sent from this origin? Please read the warning above. Yes

export default client;
