import { Prisma } from "prisma-binding";

const prisma = new Prisma({
   typeDefs: 'src/generated/prisma.graphql',
   endpoint: 'http://192.168.99.100:4466',
});

// prisma.query.users(null, '{ id name posts {id title} }').then((data) => {
//    console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.mutation.createPost({
//    data: {
//       title: "GraphQL 101",
//       body: "",
//       published: false,
//       author: {
//          connect: {
//             id: "cjsdsmmdh000s0786y12dx5bk"
//          }
//       }
//
//    }
// }, '{ id title body published }').then((data) => {
//    console.log(data);
//    return prisma.query.users(null, '{ id name posts {id title} }')
// }).then((data) => {
//    console.log(JSON.stringify(data, undefined, 2))
// });

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