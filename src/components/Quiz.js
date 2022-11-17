import { useLayoutEffect } from "react";
import "./Quiz.css";

function Quiz() {
  useLayoutEffect(() => {
    const quizData = [
      {
        question: "How Many colors a there in a rianbow?",
        a: "2",
        b: "7",
        c: "3",
        d: "10",
        correct: "b",
      },
      {
        question: "What fruit rasins come from?",
        a: "Apple",
        b: "Grapes",
        c: "Orange",
        d: "None of Above",
        correct: "a",
      },
      {
        question: "How many wheels does a tricycle have?",
        a: "2",
        b: "1",
        c: "3",
        d: "4",
        correct: "c",
      },
      {
        question: "Which dinorsaur had 15 horns?",
        a: "Kosmoceratops",
        b: "Tyrannosaurus",
        c: "Velocirators",
        d: "Stegosaurus",
        correct: "a",
      },
      {
        question: "Where is the Great Pyramid of Giza?",
        a: "USA",
        b: "Egypt",
        c: "England",
        d: "China",
        correct: "a",
      },
    ];

    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");

    let currentQuiz = 0;
    let score = 0;

    function loadQuiz() {
      deselectAnswers();

      const currentQuizData = quizData[currentQuiz];

      questionEl.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
      d_text.innerText = currentQuizData.d;
    }

    function deselectAnswers() {
      answerEls.forEach((answerEl) => (answerEl.checked = false));
    }

    function getSelected() {
      let answer;
      answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
          answer = answerEl.id;
        }
      });
      return answer;
    }

    submitBtn.addEventListener("click", () => {
      const answer = getSelected();
      if (answer) {
        if (answer === quizData[currentQuiz].correct) {
          score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
          loadQuiz();
        } else {
          // quiz.innerHTML = `
          //        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          //        <button onclick="location.reload()">Reload</button>
          //        `;
        }
      }
    });

    loadQuiz();
  }, []);

  return (
    <div class="quiz-container" id="quiz">
      <div class="quiz-header">
        <h2 id="question">Question Text</h2>
        <ul>
          <li>
            <input type="radio" name="answer" id="a" class="answer" />
            <label for="a" id="a_text">
              Answer
            </label>
          </li>

          <li>
            <input type="radio" name="answer" id="b" class="answer" />
            <label for="b" id="b_text">
              Answer
            </label>
          </li>

          <li>
            <input type="radio" name="answer" id="c" class="answer" />
            <label for="c" id="c_text">
              Answer
            </label>
          </li>

          <li>
            <input type="radio" name="answer" id="d" class="answer" />
            <label for="d" id="d_text">
              Answer
            </label>
          </li>
        </ul>
      </div>

      <button id="submit">Submit</button>
    </div>
  );
}

export default Quiz;
