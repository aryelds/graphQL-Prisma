import {Prisma} from "prisma-binding";

const prisma = new Prisma({
   typeDefs: 'src/generated/prisma.graphql',
   endpoint: 'http://192.168.99.100:4466',
});

const updatePostForUser = async (postId, data) => {
   const post = await prisma.mutation.updatePost({
      where: {
         id: postId
      },
      data
   }, '{ author {id} }');

   return await prisma.query.user({
      where: {
         id: post.author.id
      }
   }, '{ id name email posts {id title published }}')
};

updatePostForUser("cjsuqcc2800620786qct6ysy9", { published: false } ).then((user) => {
   console.log(JSON.stringify(user, undefined, 2))
});


prisma.mutation.updatePost({
   where: {
      id: "cjsuofqfh002i0786uh00zzkf"
   },
   data: {
      body: "This is how to get started with Graphql...",
      published: true
   }
}, '{ id }').then((data) => {
   return prisma.query.posts(null, '{ id title body published }')
}).then((data) => {
   console.log(data)
});