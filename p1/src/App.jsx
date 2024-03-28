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
      answer: 'You can the webinar using the link sent via email or WhatsApp after registration',
      open: true
    },
    {
      question: 'I have zero knowledge about trading. Can I join ?',
      answer: 'Yes, all levels of experience are welcome to join the webinar.',
      open: false
    },
    {
      question: 'Can I ask my questions during the live sessions ?',
      answer: 'Absolutely, feel free to engage actively by asking your questions during our live sessions! ',
      open: false
    },
    {
      question: 'In which language will the webinar be conducted ?',
      answer: 'The webinar will be conducted in both English and Tamil languages.',
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
