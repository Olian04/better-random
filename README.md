# better-random
A collection of useful random-related-functions to make the `Math.random` module a bit more useful.

__CDN:__

```html
<script src="https://cdn.jsdelivr.net/gh/olian04/better-random/src/index.js"></script>
```

__Demo:__ <br>

https://jsfiddle.net/olian04/czjyot4d/53/

## Math.random.between(min, max)

Returns a random integer between `min` and `max`.

```js
Math.random.between = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
```

## Math.random.procentage()

Returns a random float between `0` and `1`.

```js
Math.random.procentage = () => Math.random.between(0, 100) / 100;
```

## Math.random.select(array)

Returns a random element from the given array.


```js
Math.random.select = (array) => array[Math.random.between(0, array.length-1)];

```

## Math.random.rgba()

Returns a random rgba color in the format `rgba(red, green, blue, alpha)`.

```js
Math.random.rgba = () => `rgba(${Math.random.between(0, 255)}, ${Math.random.between(0, 255)}, ${Math.random.between(0, 255)}, ${Math.random.procentage()})`;
```

## Math.random.rgb()

Returns a random rgb color in the format `rgb(red, green, blue)`.

```js
Math.random.rgb = () => `rgba(${Math.random.between(0, 255)}, ${Math.random.between(0, 255)}, ${Math.random.between(0, 255)})`;
```

## Math.random.pixel()

Returns a the data-url representation of an image thats 1x1-pixels in size with a random rgb backgroundcolor.

```js
Math.random.pixel = () => {
  const canvas = document.createElement('canvas');
  canvas.height = canvas.width = 1;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = Math.random.rgb();
  ctx.fillRect(0,0,1,1);
  return canvas.toDataURL();
}
```
