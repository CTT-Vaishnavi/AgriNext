/* script.js */
let chatbotData = [];

fetch('chatbot_qa.json')
  .then(res => res.json())
  .then(data => {
    chatbotData = data.chatbot_training_qa.flatMap(part => part.qa);
    console.log('Chatbot data loaded');
  });

function similarity(a, b) {
  const setA = new Set(a.toLowerCase().split(/\s+/));
  const setB = new Set(b.toLowerCase().split(/\s+/));
  const intersection = [...setA].filter(x => setB.has(x)).length;
  const union = new Set([...setA, ...setB]).size;
  return intersection / union;
}

function findClosestMatch(input) {
  let best = { score: 0, answer: "Sorry, I don't have an answer for that." };
  chatbotData.forEach(qa => {
    const score = similarity(input, qa.q);
    if(score > best.score) best = { score, answer: qa.a };
  });
  return best.score >= 0.5 ? best.answer : "Sorry, I don't have an answer for that.";
}

window.Tawk_API = window.Tawk_API || {};
window.Tawk_API.onLoad = function() {
  Tawk_API.onChatMessage = function(msg) {
    if(msg.from === 'visitor' && msg.text) {
      const reply = findClosestMatch(msg.text);
      Tawk_API.addEvent('chatbotReply', { message: reply });
    }
  };
};
