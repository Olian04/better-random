Math.random.between = (min, max) => 
  Math.floor(Math.random()*(max-min+1)+min);

Math.random.rgba = () => 
  `rgba(${Math.random.between(0, 255)}, ${Math.random.between(0, 255)}, ${Math.random.between(0, 255)}, ${Math.random.between(0, 100) / 100})`;

Math.random.rgb = () => 
  `rgba(${Math.random.between(0, 255)}, ${Math.random.between(0, 255)}, ${Math.random.between(0, 255)})`;

Math.random.select = array => 
  array[Math.random.between(0, array.length-1)];

Math.random.pixel = () => {
	const canvas = document.createElement('canvas');
  canvas.height = canvas.width = 1;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = Math.random.rgb();
  ctx.fillRect(0,0,1,1);
  return canvas.toDataURL();
}
