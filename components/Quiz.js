import QuizBox from './QuizBox';

import css from 'styled-jsx/css';

const styled = css`
  .quizContainer {
    height: 90vh;
    scroll-snap-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    letter-spacing: 1px;
  }
`;

const Quiz = ({ quiz, quizIndex }) => {
  return (
    <>
      <div id={`quizContainer${quizIndex}`} className="quizContainer">
        <QuizBox quiz={quiz} quizIndex={quizIndex} />
      </div>
      <style jsx>{styled}</style>
    </>
  );
};

export default Quiz;
