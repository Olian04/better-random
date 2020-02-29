const between = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
const percentages = () => between(0, 100) / 100;

Math.random.between = between;
Math.random.percentages = percentages;
Math.random.select = (array) => array[between(0, array.length-1)];
Math.random.rgba = () => `rgba(${between(0, 255)}, ${between(0, 255)}, ${between(0, 255)}, ${percentages()})`;
Math.random.rgb = () => `rgba(${between(0, 255)}, ${between(0, 255)}, ${between(0, 255)})`;
Math.random.pixel = () => {
  const canvas = document.createElement('canvas');
  canvas.height = canvas.width = 1;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = Math.random.rgb();
  ctx.fillRect(0,0,1,1);
  return canvas.toDataURL();
}
