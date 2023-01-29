const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

const buttons = rows.map(row => row.split(''));

export const Keyboard = ({onBackspace, onPressed, letterClasses}) => (
  <>
    <div className="keyboard">
      {buttons.map((row, index) => (
        <div key={index}>
          {row.map((letter) => (
            <button 
              className={letterClasses[letter]} 
              onClick={() => onPressed(letter)} 
              key={letter}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
    <div className="backspace">
      <button onClick={() => onBackspace()}>
        Backspace
      </button>
    </div>
  </>
);