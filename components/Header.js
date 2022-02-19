import css from 'styled-jsx/css';
import palette from '../public/style/palette';

const styled = css`
  .header {
    height: 5vh;
    background-color: ${palette.light.primary};
    color: ${palette.light.secondary};
    box-shadow: ${palette.light.primary}66 0px 5px,
      ${palette.light.primary}4D 0px 10px, ${palette.light.primary}33 0px 15px,
      ${palette.light.primary}1A 0px 20px, ${palette.light.primary}0D 0px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>{`Nico's Next Quiz 📚`}</h1>
      </div>
      <style jsx>{styled}</style>
    </>
  );
};

export default Header;
