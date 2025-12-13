function StartScreen({ numQuestions, dispatch }) {
  console.log(dispatch);
  return (
    <div className="start">
      <h2>Welcome to react Quiz</h2>
      <h3> {numQuestions} questions to test your react knowledge</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
