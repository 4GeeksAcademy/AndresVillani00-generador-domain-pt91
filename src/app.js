/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  // Arrays
  let pronoun = ["the", "our"];
  let adjective = ["great", "big"];
  let noun = ["jogger", "racoon"];

  pronoun.map(itemPronoum => {
    adjective.map(itemAdjective => {
      noun.map(itemNoun => {
        console.log(`${itemPronoum}${itemAdjective}${itemNoun}.com`);
      });
    });
  });
};
