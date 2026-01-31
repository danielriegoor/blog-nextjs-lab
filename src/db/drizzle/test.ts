// import { drizzleDb } from ".";
// import { postsTable } from "./schemas";

// (async () => {
//   const posts = await drizzleDb.select().from(postsTable);

//   posts.forEach((post) => {
//     console.log(post.id, post.title, post.published, post.slug);
//   });
// })();

// import { eq } from "drizzle-orm";
// import { drizzleDb } from ".";
// import { postsTable } from "./schemas";

// (async () => {
//   await drizzleDb
//     .update(postsTable)
//     .set({
//       title: "Rotina Matinal de Pessoas Altamente Eficazes",
//       published: true,
//     })
//     .where(eq(postsTable.slug, "rotina-matinal-de-pessoas-altamente-eficazes"));
// })();
