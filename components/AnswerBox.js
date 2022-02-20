import palette from '../public/style/palette';
import css from 'styled-jsx/css';

const styled = css`
  .answerBox {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    visibility: hidden;
    max-height: 0;
    transition: max-height 4s;
  }

  .answerBox.correct {
    background-color: ${palette.light.secondary};
    color: ${palette.light.primary};
  }

  .answerBox.wrong {
    background-color: ${palette.light.danger};
    color: ${palette.light.info};
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

const AnswerBox = ({ quizIndex, isAnswer, desc }) => {
  const answerContent = isAnswer ? `Correct!` : `Wrong..`;

  return (
    <>
      <div id={`answerBox${quizIndex}`} className={`answerBox `}>
        <div className="answer">
          <p>{answerContent}</p>
        </div>
        <div className="description">
          <p>{desc}</p>
        </div>
      </div>
      <style jsx>{styled}</style>
    </>
  );
};

export default AnswerBox;
