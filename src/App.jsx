import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {text: "2004",correct: true,},
        { text: "2005", correct: false,},
        {text: "2006",correct: false,},
        {text: "2007", correct: false,},
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "How many letters are there in the English alphabet? ",
      answers: [
        {
          text: "26",
          correct: true,
        },
        {
          text: "25",
          correct: false,
        },
        {
          text: "23",
          correct: false,
        },
        {
          text: "20",
          correct: false,
        }
      ],
    },
    {
      id: 5,
      question: "what is the smallest double digit number ",
      answers: [
        {
          text: "26",
          correct: false,
        },
        {
          text: "10",
          correct: true,
        },
        {
          text: "09",
          correct: false,
        },
        {
          text: "50",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What year did buffett became a billionaire",
      answers: [
        {text: "2004",correct: false,},
        { text: "1991", correct: false,},
        {text: "1990",correct: true,},
        {text: "2000", correct: false,},
      ],
    },{
      id: 7,
      question: "you can break me, but you cannot touch me.what am I?",
      answers: [
        {text: "wall",correct: false,},
        { text: "comb", correct: false,},
        {text: "Promise",correct: true,},
        {text: "Bottle", correct: false,},
      ],
    },
    {
      id: 8,
      question: "How many teeth does an Adult have?",
      answers: [
        {text: "32",correct: true,},
        { text: "30", correct: false,},
        {text: "36",correct: false,},
        {text: "34", correct: false,},
      ],
    },
    {
      id: 9,
      question: "In which year bahubali was Released?",
      answers: [
        {text: "2014",correct: false,},
        { text: "2016", correct: false,},
        {text: "2015",correct: true,},
        {text: "2019", correct: false,},
      ],
    },
    {
      id: 12,
      question: "Who is the Author of Intelligent Investor",
      answers: [
        {text: "Benjamin Graham",correct: true,},
        { text: "Warren Buffet", correct: false,},
        {text: "Rakesh Jhunjhunwala",correct: false,},
        {text: "Charlie Munger", correct: false,},
      ],
    },
    {
      id: 10,
      question: "How many continents are there",
      answers: [
        {text: "5",correct: false,},
        { text: "9", correct: false,},
        {text: "6",correct: false,},
        {text: "7", correct: true,},
      ],
    },
    {
      id: 11,
      question: "Who wrote the Indian National Anthem",
      answers: [
        {text: "Bakim Chandra Chatterji",correct: false,},
        { text: "Rabindranath Tagore", correct: true,},
        {text: "Swami Vivekanand",correct: false,},
        {text: "None of the Above", correct: false,},
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$100" },
        { id: 2, amount: "$1.000" },
        { id: 3, amount: "$2.000" },
        { id: 4, amount: "$4.000" },
        { id: 5, amount: "$8.000" },
        { id: 6, amount: "$16.000" },
        { id: 7, amount: "$32.000" },
        { id: 8, amount: "$64.000" },
        { id: 9, amount: "$125.000" },
        { id: 10, amount: "$250.000" },
        { id: 11, amount: "$500.000" },
        { id: 12, amount: "$1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
