import React, { useState } from "react"; 
import { questions } from "./data/questions"; // A kérdések importálása
import "./App.css"; // A CSS fájl importálása

const App: React.FC = () => {
  // Állapotok definiálása
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Az aktuális kérdés indexének nyomon követése
  const [score, setScore] = useState(0); // A felhasználó pontszámának nyomon követése
  const [showScore, setShowScore] = useState(false); // Annak nyomon követése, hogy a pontszám kijelző megjelenik-e
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null); // A kiválasztott válasz
  const [language, setLanguage] = useState<"en" | "hu">("en"); // Nyelvválasztás (angol vagy magyar)
  const [isGameStarted, setIsGameStarted] = useState(false); // A játék kezdeti állapota

  // Játék indításának kezelése
  const handleStartGame = () => {
    setIsGameStarted(true); // Amikor a felhasználó elindítja a játékot
  };

  // Válasz lehetőség kezelése, helyes válasz ellenőrzése
  const handleAnswerOptionClick = (answer: string) => {
    setSelectedAnswer(answer); // A kiválasztott válasz beállítása
    const correctAnswer =
      language === "en" // A nyelv alapján kiválasztja a helyes választ
        ? questions[currentQuestionIndex].correctAnswerEn
        : questions[currentQuestionIndex].correctAnswerHu;

    if (answer === correctAnswer) {
      setScore(score + 1); // Ha a válasz helyes, növeli a pontszámot
    }

    // Következő kérdésre ugrik egy kis késleltetéssel
    const nextQuestion = currentQuestionIndex + 1;
    setTimeout(() => {
      if (nextQuestion < questions.length) {
        setCurrentQuestionIndex(nextQuestion); // Következő kérdésre ugrik
        setSelectedAnswer(null); // Nullázza a kiválasztott választ
      } else {
        setShowScore(true); // Ha az utolsó kérdés volt, megjeleníti a pontszámot
      }
    }, 1000);
  };

  // Nyelvváltás kezelése (angol/magyar)
  const handleLanguageChange = (lang: "en" | "hu") => {
    setLanguage(lang); // A nyelv beállítása
  };

  // Újrakezdés kezelése
  const handleRestart = () => {
    setCurrentQuestionIndex(0); // Visszaállítja a kérdések indexét az elejére
    setScore(0); // Pontszám nullázása
    setShowScore(false); // Pontszám kijelző elrejtése
    setSelectedAnswer(null); // Kiválasztott válasz nullázása
    setIsGameStarted(false); // Visszatérés a start képernyőhöz
  };

  return (
    <div className="app">
      {!isGameStarted ? (
        // Start képernyő megjelenítése, ha a játék még nem kezdődött el
        <div className="start-screen">
          <h1>{language === "en" ? "Welcome to the Harry Potter Quiz!" : "Üdvözöljük a Harry Potter Kvízben!"}</h1>
          <button className="start-button" onClick={handleStartGame}>
            {language === "en" ? "Start the Quiz" : "Kvíz indítása"}
          </button>
        </div>
      ) : (
        <>
          <div className="language-switcher">
            {/* Nyelvváltó gombok */}
            <button
              onClick={() => handleLanguageChange("en")}
              className={language === "en" ? "active" : ""}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange("hu")}
              className={language === "hu" ? "active" : ""}
            >
              Magyar
            </button>
          </div>

          {showScore ? (
            <div className="score-section">
              {/* Pontszám kijelzése, ha a játék véget ért */}
              {language === "en"
                ? `You scored ${score} out of ${questions.length}`
                : `Pontszámod: ${score} a ${questions.length}-ból`}

              <button className="restart-button" onClick={handleRestart}>
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/restart--v1.png"
                  alt="Restart"
                />
                {language === "en" ? "Restart Quiz" : "Újrakezdés"}
              </button>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  {/* Kérdés számláló megjelenítése */}
                  <span>
                    {language === "en" ? "Question" : "Kérdés"} {currentQuestionIndex + 1}
                  </span>
                  /{questions.length}
                </div>
                <div className="question-text">
                  {/* Kérdés megjelenítése a kiválasztott nyelven */}
                  {language === "en"
                    ? questions[currentQuestionIndex].questionEn
                    : questions[currentQuestionIndex].questionHu}
                </div>
              </div>
              <div className="answer-section">
                {/* Válaszlehetőségek megjelenítése a kiválasztott nyelven */}
                {(language === "en"
                  ? questions[currentQuestionIndex].optionsEn
                  : questions[currentQuestionIndex].optionsHu
                ).map((option) => (
                  <button
                    key={option} // Egyedi kulcs a gombokhoz
                    onClick={() => handleAnswerOptionClick(option)} // Válaszlehetőség kezelése
                    disabled={!!selectedAnswer} // Ha már választottak, a gombok le vannak tiltva
                    className={
                      selectedAnswer // Stílusok a helyes és helytelen válaszhoz
                        ? option ===
                          (language === "en"
                            ? questions[currentQuestionIndex].correctAnswerEn
                            : questions[currentQuestionIndex].correctAnswerHu)
                          ? "correct"
                          : "incorrect"
                        : ""
                    }
                  >
                    {option} {/* Válaszlehetőség megjelenítése */}
                  </button>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
