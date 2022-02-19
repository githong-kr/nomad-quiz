import { useState } from 'react';
import css from 'styled-jsx/css';
import palette from '../public/style/palette';
import Radio from './Radio';

const styled = css`
  .quizContainer {
    height: 95vh;
    scroll-snap-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    letter-spacing: 1px;
  }

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
    margin-left: 5px;
    border-bottom: 1px dotted ${palette.light.secondary};
    font-weight: bold;
  }

  .choiceWrapper {
    padding: 15px;
  }

  .choice:not(:last-child) {
    margin-bottom: 20px;
  }

  .answerBox {
    background-color: ${palette.light.secondary};
    color: ${palette.light.primary};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    visibility: hidden;
    max-height: 0;
    transition: max-height 4s;
  }

  .answerBox.active {
    visibility: visible;
    max-height: 100vh;
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
  }

  .answer {
    font-weight: bold;
  }

  .description {
    padding-left: 15px;
  }
`;

const Quiz = ({ quiz, quizIndex }) => {
  const [answerContent, setAnswerContent] = useState('');
  const onChange = (e) => {
    const answerYn = e.target.value;

    const quizBox = document.querySelector(`#answerBox${quizIndex}`);

    if (answerYn === 'true') {
      setAnswerContent('Correct!');
    } else {
      setAnswerContent('Wrong..');
    }

    quizBox.classList.add(`active`);
  };

  return (
    <>
      <div className="quizContainer">
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
          <div id={`answerBox${quizIndex}`} className="answerBox">
            <div className="answer">
              <p>{answerContent}</p>
            </div>
            <div className="description">
              <p>{quiz.desc}</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styled}</style>
    </>
  );
};

export default Quiz;
