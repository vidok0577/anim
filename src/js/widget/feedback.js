export class Feedback {
  constructor(obj) {
    this.obj = obj;
    this.feedbackBtn = obj.querySelector(".feedback-btn");
    this.btnSend = obj.querySelector(".send-message");
    this.message = obj.querySelector(".message");
    this.closeBtn = obj.querySelector(".close-btn");
    this.formChat = obj.querySelector(".feedback-chat");
    this.init();
  }

  init() {
    this.btnSend.addEventListener("click", () => {
      this.message.value = "";
    });
    this.closeBtn.addEventListener("click", () => {
      this.formChat.removeAttribute("style");
      void this.formChat.offsetWidth;
      this.formChat.style.animation = ".2s linear reverse both slideChat";
      this.feedbackBtn.style.opacity = "1";
    });
    this.feedbackBtn.addEventListener("click", () => {
      console.log(this.formSizes);
      this.formChat.removeAttribute("style");
      void this.formChat.offsetWidth;
      this.formChat.style.animation = ".2s linear normal both slideChat";
      this.feedbackBtn.style.opacity = "0";
    });
  }
}
