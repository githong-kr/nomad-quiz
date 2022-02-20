import { useState } from 'react';

import Radio from './Radio';
import AnswerBox from './AnswerBox';

import palette from '../public/style/palette';
import css from 'styled-jsx/css';

const styled = css`
  .quizBox {
    width: 90%;
    margin: 15px;
    background-color: ${palette.light.primary};
    color: ${palette.light.secondary};
    padding: 5px;
    border: 1px solid ${palette.light.secondary};
    border-radius: 10px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .title {
    margin-left: 15px;
    border-bottom: 1px dotted ${palette.light.secondary};
    font-weight: bold;
  }

  .choiceWrapper {
    padding: 15px;
  }

  .choice:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const QuizBox = ({ quiz, quizIndex }) => {
  const [isAnswer, setIsAnswer] = useState(false);
  const onChange = (e) => {
    const answerYn = e.target.value;

    const answerBox = document.querySelector(`#answerBox${quizIndex}`);

    if (answerYn === 'Y') {
      answerBox.classList.remove('wrong');
      answerBox.classList.add('correct');
    } else {
      answerBox.classList.remove('correct');
      answerBox.classList.add('wrong');
    }

    answerBox.classList.add(`active`);

    answerYn === 'Y' ? setIsAnswer(true) : setIsAnswer(false);

    setTimeout(() => {
      const topPos = document.querySelector(
        `#quizContainer${quizIndex + 1}`
      )?.offsetTop;

      if (topPos !== undefined) {
        document.querySelector(`.quizListWrapper`).scrollTop = topPos;
      }
    }, 2000);
  };

  return (
    <>
      <div className="quizBox">
        <div className="title">
          <p>{quiz.question}</p>
        </div>
        <div className="choiceWrapper">
          {quiz.choices.map((choice, index) => {
            return (
              <Radio
                key={index}
                name={`choice${quizIndex}`}
                choice={choice}
                onChange={onChange}
              />
            );
          })}
        </div>
        <AnswerBox quizIndex={quizIndex} isAnswer={isAnswer} desc={quiz.desc} />
      </div>
      <style jsx>{styled}</style>
    </>
  );
};

export default QuizBox;
