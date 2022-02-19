import css from 'styled-jsx/css';
import palette from '../public/style/palette';

const styled = css`
  .rad-label {
    display: flex;
    align-items: center;

    border-radius: 100px;
    padding: 14px 16px;
    margin: 10px 0;

    cursor: pointer;
    transition: 0.3s;
  }

  .rad-label:hover,
  .rad-label:focus-within {
    background: ${palette.light.secondary}24;
  }

  .rad-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 1px;
    opacity: 0;
    z-index: -1;
  }

  .rad-design {
    width: 14px;
    height: 14px;
    border-radius: 100px;

    background: linear-gradient(
      to right bottom,
      hsl(154, 97%, 62%),
      hsl(225, 97%, 62%)
    );
    position: relative;
  }

  .rad-design::before {
    content: '';

    display: inline-block;
    width: inherit;
    height: inherit;
    border-radius: inherit;

    background: hsl(0, 0%, 90%);
    transform: scale(1.1);
    transition: 0.3s;
  }

  .rad-input:checked + .rad-design::before {
    transform: scale(0);
  }

  .rad-text {
    color: hsl(0, 0%, 60%);
    margin-left: 14px;
    font-size: 18px;

    transition: 0.3s;
  }

  .rad-input:checked ~ .rad-text {
    color: hsl(0, 0%, 30%);
  }
`;

const Radio = ({ name, choice, onChange }) => {
  return (
    <>
      <label className="rad-label" onChange={onChange}>
        <input
          type="radio"
          className="rad-input"
          name={name}
          value={choice.answerYn}
        />
        <div className="rad-design"></div>
        <div className="rad-text">{choice.content}</div>
      </label>
      <style jsx>{styled}</style>
    </>
  );
};

export default Radio;
