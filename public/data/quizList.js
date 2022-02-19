const quizList = [
  {
    question: `What is the difference between a library and a framework?`,
    choices: [
      { content: `No difference, they are the same.`, answerYn: false },
      {
        content: `A library calls our code, we call the framework.`,
        answerYn: false,
      },
      {
        content: `A framework calls our code, we call the library.`,
        answerYn: true,
      },
    ],
    desc: `The technical difference between a framework and library lies in a term called inversion of control.
    When you use a library, you are in charge of the flow of the application.
    You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow.
    It provides some places for you to plug in your code, but it calls the code you plugged in as needed.    
    `,
  },
  {
    question: `NextJS is a framework.`,
    choices: [
      { content: `True`, answerYn: true },
      {
        content: `False`,
        answerYn: false,
      },
    ],
    desc: `NextJS is an awwwwsome framework!!!`,
  },
  {
    question: `If I want to create a /about URL what should I do?`,
    choices: [
      {
        content: `Create an 'about.jsx' file inside of the '/src' folder.`,
        answerYn: false,
      },
      {
        content: `Create an 'about.jsx' file inside of the '/pages' folder.`,
        answerYn: true,
      },
    ],
    desc: `We can make some URL by locating the file inside of the '/pages'.
    And then we can access the URL as '/{fileName}'.`,
  },
  {
    question: `What is _app.jsx`,
    choices: [
      { content: `It's a file for the /app URL.`, answerYn: false },
      {
        content: `It's a blueprint that NextJS will use to build all our pages.`,
        answerYn: true,
      },
    ],
    desc: `_app.jsx is like a Door-Keeper`,
  },
  {
    question: `Can we use CSS in NextJS without installing anything else?`,
    choices: [
      { content: `True`, answerYn: true },
      {
        content: `False`,
        answerYn: false,
      },
    ],
    desc: `We can use css by using module.xxx.css or styled-jsx!!`,
  },
  {
    question: `Why do we use getServerSideProps?`,
    choices: [
      {
        content: `To run code on the backend after the page is rendered.`,
        answerYn: false,
      },
      {
        content: `To run code on the backend before the page is rendered.`,
        answerYn: true,
      },
    ],
    desc: `For the powerful SSR`,
  },
  {
    question: `What file do we have to create to get a URL like this: /posts/:id`,
    choices: [
      { content: `src/pages/posts/id.jsx`, answerYn: false },
      {
        content: `src/pages/posts/{id}.jsx`,
        answerYn: false,
      },
      {
        content: `src/pages/posts/[id].jsx`,
        answerYn: true,
      },
    ],
    desc: `We can use the dynamic params by using '[]'.`,
  },
  {
    question: `What file do we have to create to catch this URL: /posts/1/section/2/comments/3`,
    choices: [
      {
        content: `src/pages/posts/id/section/sectionId/comments/commentId.jsx`,
        answerYn: false,
      },
      {
        content: `src/pages/posts/{id}/section/{sectionId}/comments/{commentId}.jsx`,
        answerYn: false,
      },
      {
        content: `src/pages/posts/[...id].jsx`,
        answerYn: true,
      },
    ],
    desc: `We can catch the multiple params by using '[...]'.`,
  },
];

export default quizList;
