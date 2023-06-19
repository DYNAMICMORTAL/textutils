import React from 'react'
export default function Textform() {
    const upperCaseFunction = () => {
        // console.log("Uppercase successfull!!")
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowerCaseFunction = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const onchangeFunction = (event) => {
        // console.log("Onchange successfull!!")
        setText(event.target.value);
    }

    const frequentFunction = () => {
        let newText = text.split(" ");
        let word = {};
        newText.forEach(function (element) {
            if (word[element] === undefined) {
                word[element] = 1;
            }
            else {
                word[element] += 1;
            }
        });
        let max = 0;
        let maxWord = "";
        for (let key in word) {
            if (word[key] > max) {
                max = word[key];
                maxWord = key;
            }
        }
        return maxWord;
        console.log(maxWord);
    }
    const [text, setText] = React.useState('')
  return (
    <>
    <div>
        <form action="" className="mainForm">
            <label htmlFor=""></label>
            <textarea placeholder="Start typing anything..." onChange={onchangeFunction} name="" id="" className="mainInput" value={text} cols="30" rows="5"></textarea>
            <div className="buttons">
            <button type="button" className="upCase" onClick={upperCaseFunction}>Uppercase it!</button>
            <button type="button" className="lowCase" onClick={lowerCaseFunction}>Lowercase it!</button>
            {/* <button type="button" className="lowCase" onClick={frequentFunction}>FAQ it!</button> */}
            </div>
        </form>
    </div>
    <div className="container">
        <h1>My Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Reading Average Time: {text.split(" ").length * 0.008} minutes</p>
        <p>Frequently used words: {frequentFunction}</p>
    </div>
    </>
  )
}
