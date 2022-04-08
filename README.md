# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_

### Screenshot

![gif](.screenshots/rock-paper-scissors.gif)
![](.screenshots/Screenshot-mobile.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/rock-paper-scissors-using-reactjs-S1Z3uRpQ9](https://www.frontendmentor.io/solutions/rock-paper-scissors-using-reactjs-S1Z3uRpQ9)
- Live Site URL: [https://rock-paper-scissors-kv.netlify.app/](https://rock-paper-scissors-kv.netlify.app/)

## My process

### Built with

- Flexbox
- CSS Grid
- Desktop-first workflow
- CSS modules
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - CSS extension language

### What I learned

I've learned lot of things in this challenge:

- How to use context in React

```js
import { createContext, useState } from 'react';

const RulesContext = createContext({
	showRules: false,
	closeRules: () => {},
	openRules: () => {},
});

const RulesProvider = ({ children }) => {
	const [showRules, setShowRules] = useState(false);

	const openRules = () => setShowRules(true);
	const closeRules = () => setShowRules(false);

	return (
		<RulesContext.Provider value={{ showRules, closeRules, openRules }}>
			{children}
		</RulesContext.Provider>
	);

	export { RulesContext as default, RulesProvider };

	// USE
	import { useContext } from 'react';
	const { showRules, openRules, closeRules } = useContext(rulesContext);
};
```

- How to animate something (using class)

```js
const [bump, setBump] = useState(false);

useEffect(() => {
	if (!value) return;
	setBump(true);
	const timer = setTimeout(() => setBump(false), 300);
	return () => clearTimeout(timer);
}, [value]);
```

- When to use React.memo()

```js
import { memo } from 'react';

/* 
Were using memo so this component doesn't get rerender when app gets rerender because ShowRules state changes

But now this component always get compared with its prev state if there is some change it will get rerendered
*/

export default memo(Playing);
```

- When to use useCallback hook

```js
import { createContext, useCallback } from 'react';

const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
	const [score, setScore] = useState(0);

	const reduceScore = useCallback(
		() => setScore(prevScore => (--prevScore < 0 ? 0 : prevScore)),
		[]
	);

	return (
		<ScoreContext.Provider
			value={{
				score,
				reduceScore,
			}}
		>
			{children}
		</ScoreContext.Provider>
	);
};

export { ScoreContext as default, ScoreProvider };
```

- How to create modal in React

```html
<body>
	<noscript>You need to enable JavaScript to run this app.</noscript>

	<div id="overlay"></div>
	<div id="modal"></div>
	<div id="root"></div>
</body>
```

```js
import ReactDOM from 'react-dom';

const Overlay = ({ onClick }) => (
	<div className="overlay" onClick={onClick}></div>
);

const ModalBody = ({ close, className, children }) => {
	return (
		<div className={`modal ${className}`}>
			<button className="modal__close" onClick={close}>
				&times;
			</button>
			{children}
		</div>
	);
};

const Modal = ({ close, className, children }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Overlay onClick={close} />,
				document.getElementById('overlay')
			)}
			{ReactDOM.createPortal(
				<ModalBody close={close} className={className}>
					{children}
				</ModalBody>,
				document.getElementById('modal')
			)}
		</>
	);
};
```

### Continued development

Technologies I'd be learning soon:

- NextJs
- Typescript
- Blockchain Development
- Flutter & Dart

### Useful resources

- [MDN Docs](https://developer.mozilla.org/en-US/) - This is an amazing reference which helped me finally understand detailed concepts like data- attr, aria attr, input range etc.
- [W3Schools](https://www.w3schools.com/) - This is an amazing website for learning, I've learned about semantic tags from here only and learned many important HTML elements. I'd recommend it to anyone still learning this concept.
- [React Docs](https://reactjs.org/docs/getting-started.html) - This is good reference to learn ReactJs

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Github - [@vatsalsinghkv](https://github.com/vatsalsinghkv)
- Twitter - [@vatsalsinghkv](https://www.twitter.com/vatsalsinghkv)
- Instagram - [@vatsal.sing.hkv](https://www.instagram.com/vatsal.singh.kv)
- Facebook - [@vatsalsinghkv](https://www.facebook.com/vatsal.singh.kv)
- Frontend Mentor - [@vatsalsinghkv](https://www.frontendmentor.io/profile/vatsalsinghkv)
