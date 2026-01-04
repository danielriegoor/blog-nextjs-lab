import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    // Cuidado com a próxima linha em ambientes de produção
    await drizzleDb.delete(postsTable);
    // A linha a cima faz um reset dos dados da tabela de posts, e pode apagar tudo que já existe nela e colocar apenas os dados do seed novamente.

    await drizzleDb.insert(postsTable).values(posts);

    console.log();
    console.log(`${posts.length} posts salvos na base de dados com sucesso!`);
    console.log();
  } catch (e) {
    console.log();
    console.log("Erro ao inserir posts na base de dados:");
    console.log();
    console.log(e);
    console.log();
  }
})();
