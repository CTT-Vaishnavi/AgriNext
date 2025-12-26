document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("questionForm");
  const forumList = document.getElementById("forumList");

  if (!forumList || !form) {
    console.error("Forum elements not found");
    return;
  }

  /* ===============================
     DEFAULT FARMER POSTS (SEED)
  ================================ */
  const DEFAULT_POSTS = [
    {
      title: "Best crop after soybean harvest?",
      desc: "Soybean ke baad kaunsa crop lagana sahi rahega jo soil fertility maintain kare aur achha profit de?",
      date: "2 days ago",
      replies: 3
    },
    {
      title: "Tomato crop me leaf curl problem",
      desc: "Tomato crop me leaf curl aur white fly ka problem aa raha hai. Iske liye effective solution bataye.",
      date: "4 days ago",
      replies: 5
    },
    {
      title: "Cotton fertilizer schedule",
      desc: "Rainfall ke according cotton crop ke liye fertilizer schedule kya hona chahiye?",
      date: "1 week ago",
      replies: 2
    }
  ];

  /* ===============================
     FORCE INITIALIZE STORAGE
  ================================ */
  let questions;

  try {
    questions = JSON.parse(localStorage.getItem("forumQuestions"));
  } catch (e) {
    questions = null;
  }

  if (!Array.isArray(questions)) {
    questions = [];
  }

  // 🔥 FORCE DEFAULT IF EMPTY
  if (questions.length === 0) {
    questions = [...DEFAULT_POSTS];
    localStorage.setItem("forumQuestions", JSON.stringify(questions));
  }

  render();

  /* ===============================
     POST QUESTION
  ================================ */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = qTitle.value.trim();
    const desc = qDesc.value.trim();

    if (!title || !desc) return;

    questions.unshift({
      title,
      desc,
      date: "Just now",
      replies: 0
    });

    localStorage.setItem("forumQuestions", JSON.stringify(questions));
    render();
    form.reset();
  });

  /* ===============================
     DELETE QUESTION
  ================================ */
  forumList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const i = Number(e.target.dataset.index);
      questions.splice(i, 1);

      if (questions.length === 0) {
        questions = [...DEFAULT_POSTS];
      }

      localStorage.setItem("forumQuestions", JSON.stringify(questions));
      render();
    }
  });

  /* ===============================
     RENDER UI
  ================================ */
  function render() {
    forumList.innerHTML = "";

    questions.forEach((q, i) => {
      const card = document.createElement("div");
      card.className = "forum-card";

      card.innerHTML = `
        <h3>${q.title}</h3>
        <p class="meta">Posted by <span>Farmer – India</span> • ${q.date}</p>
        <p class="desc">${q.desc}</p>
        <div class="actions">
          <span>💬 ${q.replies} Replies</span>
          <span>👍 Helpful</span>
          <button class="delete-btn" data-index="${i}">🗑 Delete</button>
        </div>
      `;

      forumList.appendChild(card);
    });
  }

});
