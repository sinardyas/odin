/* ============================================================
   Shared quiz widget for the AWS Networking course.
   Markup contract (see any lesson):
     <div class="quiz" data-answer="B">
       <div class="q"><span class="num">Q1.</span> question text</div>
       <button class="opt" data-key="A">option</button>
       <button class="opt" data-key="B">option</button>
       ...
       <div class="feedback right"  data-for="right">shown when correct</div>
       <div class="feedback wrong"  data-for="wrong">shown when wrong</div>
     </div>
   Gives immediate, automatic feedback — a tight feedback loop for
   retrieval practice (builds storage strength, not just fluency).
   ============================================================ */
(function () {
  function wire(quiz) {
    var answer = quiz.getAttribute("data-answer");
    var opts = quiz.querySelectorAll(".opt");
    var right = quiz.querySelector('.feedback[data-for="right"]');
    var wrong = quiz.querySelector('.feedback[data-for="wrong"]');

    opts.forEach(function (opt) {
      opt.addEventListener("click", function () {
        var chosen = opt.getAttribute("data-key");
        var isRight = chosen === answer;

        opts.forEach(function (o) {
          o.disabled = true;
          var k = o.getAttribute("data-key");
          if (k === answer) o.classList.add("correct");
          else if (o === opt) o.classList.add("incorrect");
        });

        if (isRight) {
          if (right) right.classList.add("show");
        } else {
          if (wrong) wrong.classList.add("show");
          if (right) right.classList.add("show"); // also reveal the why
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".quiz").forEach(wire);
  });
})();
