import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import quizData from '../data/quizData';
import jsPDF from 'jspdf';

const TestContent = () => {
  const location = useLocation();
  const { student, category } = location.state || {};
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30);
  const passingScore = 18; // Set passing score to 18 correct answers

  // Fetch questions and shuffle them based on selected category
  useEffect(() => {
    if (category) {
      const categoryQuestions = quizData.filter(q => q.category === category);
      const shuffledQuestions = shuffleArray(categoryQuestions);
      setQuestions(shuffledQuestions);
    }
  }, [category]);

  // Timer effect to count down
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else {
      handleTimeout();
    }
  }, [timeLeft]);

  // Reset timer when question changes
  useEffect(() => {
    setTimeLeft(30);
  }, [currentQuestion]);

  // Function to shuffle array of questions
  const shuffleArray = (array) => {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Handle answer selection
  const handleAnswer = (selectedAnswer) => {
    const currentQuestionObj = questions[currentQuestion];
    
    const isCorrect = selectedAnswer !== null && currentQuestionObj?.correctAnswer === selectedAnswer;

    // Update answers state with the question's id as the key
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [currentQuestionObj.id]: { selectedAnswer, isCorrect },
    }));

    // Update score based on whether the answer was correct
    setScore(prevScore => prevScore + (isCorrect ? 1 : 0));

    // Reset the timer for the next question
    setTimeLeft(30);

    // Move to the next question or finish the test
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  // Handle timeout by marking the answer as null (no answer selected)
  const handleTimeout = () => {
    handleAnswer(null);
  };

  // Determine if the student passed or failed
  const didPass = score >= passingScore; // Check if score is greater than or equal to 18

  // Save passed user data to LocalStorage
  useEffect(() => {
    if (isFinished && didPass) {
      savePassedUser({ name: student.name, surname: student.surname, score });
    }
  }, [isFinished, didPass]);

  // Save the passed user's information to LocalStorage
  const savePassedUser = (userData) => {
    const passedUsers = JSON.parse(localStorage.getItem('passedUsers')) || [];
    passedUsers.push(userData);
    localStorage.setItem('passedUsers', JSON.stringify(passedUsers));
  };

  // Generate PDF with test results in a single list, spanning multiple pages if needed
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Test natijalari", 10, 10);
    doc.setFontSize(12);
    doc.text(`Ism: ${student.name}`, 10, 20);
    doc.text(`Familya: ${student.surname}`, 10, 30);
    doc.text(`Yo'nalish: ${category}`, 10, 40);
    doc.text(`Hisob: ${score}/${questions.length}`, 10, 50);
    doc.text(`Natija: ${didPass ? 'Passed' : 'Failed'}`, 10, 60); // Add pass/fail result

    let yPosition = 70;
    const pageHeight = doc.internal.pageSize.height;

    questions.forEach((question, index) => {
      if (yPosition + 30 > pageHeight - 20) {
        doc.addPage();
        yPosition = 20; // Reset y position for the new page
      }
      const answer = answers[question.id];
      doc.text(`Savol ${index + 1}: ${question.question}`, 10, yPosition);
      doc.text(`Sizni javobingiz: ${answer?.selectedAnswer || 'Javob yo'q'}`, 10, yPosition + 10);
      doc.text(`To'g'ri javob: ${question.correctAnswer}`, 10, yPosition + 20);
      yPosition += 30;
    });

    doc.save(`${student.name}_${student.surname}_Results.pdf`);
  };

  // Return to the home page if no student or category information is available
  if (!student || !category) {
    return (
      <div>
        <p>Talaba yoki toifa maʼlumotlari yetishmayapti!</p>
        <button onClick={() => navigate('/')}>Ortga qaytish</button>
      </div>
    );
  }

  return (
    <div>
      {!isFinished ? (
        <div className='w-full h-screen flex items-center justify-center text-left'>
          <div className='relative w-[520px] bg-white p-[30px] flex items-start flex-col overflow-hidden'>
            <span>{`Savol: ${currentQuestion + 1}`}</span>
            <h2 className='text-xl border-b-[1px] pb-[10px] mb-[10px] w-full'>{questions[currentQuestion]?.question}</h2>
            <p className={`absolute top-0 right-0 w-10 h-10 flex items-center justify-center 
              ${timeLeft <= 5 ? 'animate-shake bg-red-500 text-[#000]' : 'bg-black text-[#fff]'}`}>
              {timeLeft}
            </p>
            <div className='flex flex-col items-start'>
              {questions[currentQuestion]?.choices.map((choice, idx) => (
                <button 
                  key={idx} 
                  onClick={() => handleAnswer(choice)} 
                  className={`text-left text-lg ${answers[questions[currentQuestion]?.id]?.selectedAnswer === choice ? 'bg-green-500' : ''}`} 
                  disabled={!!answers[questions[currentQuestion]?.id]} // Correctly disable buttons based on question id
                >
                  {`${idx + 1}. ${choice}`}
                </button>
              ))}
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(currentQuestion / questions.length) * 100}%` }}></div>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full h-screen flex items-center justify-center relative'>
          <div className='flex flex-col items-center gap-1'>
            <h2 className='text-4xl font-extrabold'>Test yakunlandi!</h2>
            <p className='my-4 text-lg text-gray-500'>
              Siz {questions.length} ta savoldan {score} tasini to'g'ri topdingiz!
            </p>
            <p className={`my-4 text-lg font-bold ${didPass ? 'text-green-500' : 'text-red-500'}`}>
              Siz testdan {didPass ? 'o‘tdingiz!' : 'o‘ta olmadingiz!'}
            </p>
            <div className='flex flex-col items-center'>
              <button onClick={generatePDF} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                Natijalarni yuklab olish
              </button>
              <Link to='/' className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Bosh saxifaga qaytish</Link>
            </div>
          </div>
          <Link to='/passedusers' className="absolute top-[40px] right-[40px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Tarix</Link>
        </div>
      )}
    </div>
  );
};

export default TestContent;
