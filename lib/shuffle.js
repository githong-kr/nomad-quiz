const shuffle = (quizList) => {
  quizList.map((quiz) => {
    quiz.choices.sort(() => Math.random() - 0.5);
  });

  quizList.sort(() => Math.random() - 0.5);

  return [...quizList];
};

export default shuffle;
