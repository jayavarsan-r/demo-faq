import React from "react";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div className="faqsection_maindiv1">
      <div
        className={"faq " + (faq.open ? "open" : "")}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        <div className="faq-question">{faq.question}</div>
        <div className="faq-answer">{faq.answer}</div>
      </div>
    </div>
  );
}

export default FAQ;
