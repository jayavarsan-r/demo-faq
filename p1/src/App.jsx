import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FAQ from './Components/FAQ'
import Disclaimer from './Components/Disclaimer'

function App() {
  const [faqs, setfaqs] = useState([
    {
      question: 'How will I get the link to join the webinar ?',
      answer: 'Answer here',
      open: true
    },
    {
      question: 'I have zero knowledge about trading. Can I join ?',
      answer: 'Answer',
      open: false
    },
    {
      question: 'Can I ask my questions during the live sessions ?',
      answer: 'answer.',
      open: false
    },
    {
      question: 'In which language will the webinar be conducted ?',
      answer: 'answer.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <>
    <div className="faqsection_main2div">
      <h1>FAQ</h1>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
    <Disclaimer/>
    </>
  );
}

export default App
