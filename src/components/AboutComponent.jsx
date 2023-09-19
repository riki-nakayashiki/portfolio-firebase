import profilepic from "../assets/profilepic.png";

export default function AboutComponent() {
  return (
    <section className="contents" id="about">
      <section className="my-name-bg">
        <section className="my-name">
          <h1>Hi there, I'm</h1>
          <p>
            <span id="txt-rotate"></span>
          </p>
        </section>
      </section>
      <figure>
        <img src={profilepic} alt="profilepic" />
        <figcaption>
          <p>
            Over 5 years in the tech industry at Accenture, excelled as a
            software engineer with expertise in web development, automation, and
            client operations optimization. Enhanced web development skills in
            Canada, embracing diverse perspectives.
          </p>
        </figcaption>
      </figure>
    </section>
  );
}

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementById("txt-rotate");
  // var toRotate = elements.getAttribute("data-rotate");
  var toRotate = '[" Riki.", "a software engineer."]';
  var period = 1000;
  if (toRotate) {
    new TxtRotate(elements, JSON.parse(toRotate), period);
  }
};
