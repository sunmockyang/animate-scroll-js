AnimateScroll.js
=====================
Lightweight javascript library to animate vertical scrolling to a specified element without jQuery.

## Usage
```javascript
animateScroll(target, duration, easing, padding, align, onFinish)
```
- ```target``` Specifies the DOM element, or a page offset value (px) to scroll to
- ```duration``` How long the scroll animation lasts in milliseconds. Default: 0.
- ```easing``` Easing type for scroll animation. See below for options Default: linear. (string)
- ```padding``` How much space in pixels from the top of the specified element to scroll to. Default: 0
- ```align``` Can be set to `"top"`, `"center"`, `"bottom"` and scroll will animate to the target aligned as specified within the window. Default `"top"` (string)
- ```onFinish``` Callback function to run when the animation is finished or cancelled.

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
- Only the element argument is mandatory. Rest are optional with default values.
- This was created after I couldn't find anywhere online a library that can scroll smoothly without jQuery
