import { useState, useRef } from "react";

import Header from "./components/Header";
import Lesson from "./components/Lesson";

import "./App.css";
import Mathematics from "./components/Mathematics";
import Quiz from "./components/Quiz";

function App() {
  const [lessons, setLessons] = useState("default");
  const urlRef = useRef();

  const getPage = (_lesson) => {
    switch (_lesson) {
      case "mathematics":
        return (
          <>
            <Mathematics />
          </>
        );

      case "quiz":
        return (
          <>
            <Quiz />
          </>
        );

      // case "memory": return (
      //   <
      // )

      default:
        return (
          <div className="default">
            <div>
              <h3>Welcome to your dashborad</h3>
              <p>Click an item on the left</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app">
      <Header />

      <section>
        <div className="h">
          <h2>Your Learning Journey</h2>
          <p>Continue where you left off and become a smart kid</p>
        </div>

        <main className="app__main">
          <aside className="app__mainAside">
            <h3>Lessons</h3>

            <nav>
              <Lesson
                lessonName="Mathematics"
                modules={[
                  "Addition",
                  "Subtraction",
                  "Multiplication",
                  "Division",
                ]}
                onClick={() => setLessons("mathematics")}
              />

              <Lesson
                lessonName="Quizes"
                modules={["Simple Knowledge"]}
                onClick={() => setLessons("quiz")}
              />

              <Lesson
                lessonName="Simulator"
                modules={["Learning Simulator"]}
                onClick={() => urlRef.current.click()}
              />

              <a
                style={{ display: "none" }}
                ref={urlRef}
                href="http://localhost:3000/drag/init.html"
              >
                Leaning Simulator
              </a>
            </nav>
          </aside>

          <section className="app__mainBody">
            <>{getPage(lessons)}</>
          </section>
        </main>
      </section>
    </div>
  );
}

export default App;
