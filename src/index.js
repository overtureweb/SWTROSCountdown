import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import moment from "moment";

(function swCountdown() {
  const theCountdown = document.querySelector(".time-diff__container");
  const swReleaseDate = "2019-12-20";
  const sw = document.querySelector(".sw-logo");

  const timeDiffMap = new Map([
    ["days", () => moment(swReleaseDate).diff(moment(), "days")],
    ["hours", () => 23 - moment().hour()],
    ["minutes", () => 59 - moment().minutes()],
    ["seconds", () => 59 - moment().seconds()]
  ]);

  const newUpdateTime = () => {
    let foo = "";
    isTimeUp() && clearInterval(timer);
    timeDiffMap.forEach((value, key) => {
      foo += `<h4 class="py-2 d-block d-lg-inline-block"><span class="time-diff__value">${
        !isTimeUp() ? value() : 0
      }</span> <span class="time-diff__descriptor">${key}</span></h4> `;
    });
    sw.classList.remove("sw-logo--hide");
    theCountdown.innerHTML = foo;
  };

  const isTimeUp = () => moment() >= moment(swReleaseDate);
  const timer = setInterval(newUpdateTime, 1000);
})();
