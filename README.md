Animate Scroll
=====================
Lightweight javascript library to animate vertical scrolling to a specified element without jQuery.

## Usage
```javascript
animateScroll(element, duration, easing, padding, onFinish)
```
- ```element``` Specifies the DOM element to scroll to
- ```duration``` How long the scroll animation lasts in milliseconds
- ```easing``` Easing type for scroll animation. See below for options (string)
- ```padding``` How much space in pixels from the top of the specified element to scroll to
- ```onFinish``` Callback function to run when the animation is finished or cancelled

## Easing
The types of easing available. Easing functions taken from: https://gist.github.com/gre/1650294
- ```"linear"```
- ```"easeInQuad"```
- ```"easeOutQuad"```
- ```"easeInOutQuad"```
- ```"easeInCubic"```
- ```"easeOutCubic"```
- ```"easeInOutCubic"```
- ```"easeInQuart"```
- ```"easeOutQuart"```
- ```"easeInOutQuart"```
- ```"easeInQuint"```
- ```"easeOutQuint"```
- ```"easeInOutQuint"```

## Notes
- If the user manually scrolls during the scroll animation, the animation will cancel and the onFinish function will run
- Only the element and duration arguments are necessary. Rest are optional
- This was created after I couldn't find anywhere online a library that can scroll smoothly without jQuery
