import quizList from '../public/data/quizList';
import shuffle from '../lib/shuffle';
import Header from '../components/Header';
import Quiz from '../components/Quiz';
import palette from '../public/style/palette';

import css from 'styled-jsx/css';

const styled = css`
  .homeContainer {
    height: 100vh;
  }

  .quizListWrapper {
    height: 95vh;
    background-color: ${palette.light.primary}66;
    overflow: auto;
    scroll-snap-type: y mandatory;
  }
`;

export default function Home({ shuffledQuizList }) {
  return (
    <>
      <div className="homeContainer">
        <Header />
        <div className="quizListWrapper">
          {shuffledQuizList.map((quiz, index) => {
            return <Quiz key={index} quiz={quiz} quizIndex={index} />;
          })}
        </div>
      </div>
      <style jsx>{styled}</style>
    </>
  );
}

export const getServerSideProps = () => {
  const shuffledQuizList = shuffle(quizList);
  return { props: { shuffledQuizList } };
};
