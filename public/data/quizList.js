const quizList = [
  {
    question: `What is the difference between a library and a framework?`,
    choices: [
      { content: `No difference, they are the same.`, answerYn: `N` },
      {
        content: `A library calls our code, we call the framework.`,
        answerYn: `N`,
      },
      {
        content: `A framework calls our code, we call the library.`,
        answerYn: `Y`,
      },
    ],
    desc: `A Library is my slave. But A framework is my master.`,
  },
  {
    question: `NextJS is a framework.`,
    choices: [
      { content: `True`, answerYn: `Y` },
      {
        content: `False`,
        answerYn: `N`,
      },
    ],
    desc: `NextJS is an awwwwsome framework!!!`,
  },
  {
    question: `If I want to create a /about URL what should I do?`,
    choices: [
      {
        content: `Create an 'about.jsx' file inside of the '/src' folder.`,
        answerYn: `N`,
      },
      {
        content: `Create an 'about.jsx' file inside of the '/pages' folder.`,
        answerYn: `Y`,
      },
    ],
    desc: `We can make some URL by locating the file inside of the '/pages'. And then we can access the URL as '/{fileName}'.`,
  },
  {
    question: `What is _app.jsx`,
    choices: [
      { content: `It's a file for the /app URL.`, answerYn: `N` },
      {
        content: `It's a blueprint that NextJS will use to build all our pages.`,
        answerYn: `Y`,
      },
    ],
    desc: `_app.jsx is like a Door-Keeper`,
  },
  {
    question: `Can we use CSS in NextJS without installing anything else?`,
    choices: [
      { content: `True`, answerYn: `Y` },
      {
        content: `False`,
        answerYn: `N`,
      },
    ],
    desc: `We can use css by using module.xxx.css or styled-jsx!!`,
  },
  {
    question: `Why do we use getServerSideProps?`,
    choices: [
      {
        content: `To run code on the backend after the page is rendered.`,
        answerYn: `N`,
      },
      {
        content: `To run code on the backend before the page is rendered.`,
        answerYn: `Y`,
      },
    ],
    desc: `For the powerful SSR`,
  },
  {
    question: `What file do we have to create to get a URL like this: /posts/:id`,
    choices: [
      { content: `src/pages/posts/id.jsx`, answerYn: `N` },
      {
        content: `src/pages/posts/{id}.jsx`,
        answerYn: `N`,
      },
      {
        content: `src/pages/posts/[id].jsx`,
        answerYn: `Y`,
      },
    ],
    desc: `We can use the dynamic params by using '[]'.`,
  },
  {
    question: `What file do we have to create to catch this URL: /posts/1/section/2/comments/3`,
    choices: [
      {
        content: `src/pages/posts/id/section/sectionId/comments/commentId.jsx`,
        answerYn: `N`,
      },
      {
        content: `src/pages/posts/{id}/section/{sectionId}/comments/{commentId}.jsx`,
        answerYn: `N`,
      },
      {
        content: `src/pages/posts/[...id].jsx`,
        answerYn: `Y`,
      },
    ],
    desc: `We can catch the multiple params by using '[...]'.`,
  },
];

export default quizList;
