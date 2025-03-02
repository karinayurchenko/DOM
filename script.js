// Main task

const getRandomColor = () => {
  let maxColor = 255;
  return `rgb(${Math.floor(Math.random() * maxColor+1)}, ${Math.floor(Math.random() * maxColor+1)}, ${Math.floor(Math.random() * maxColor+1)})`;
}


const generateBlocks = () => {
  const mainBlock = document.getElementById('mainPart');
  const blocksAmount = 25;
  mainBlock.innerHTML = '';
  for (let i = 0; i < blocksAmount; i++) {
    let coloredBlock = document.createElement('div');
    coloredBlock.style.width = '50px';
    coloredBlock.style.height = '50px';
    coloredBlock.style.backgroundColor = getRandomColor();
    mainBlock.append(coloredBlock);
  }
  
  return mainBlock;
}
// Advanced task

const generateBlocksInterval = () => {
  setInterval(() => generateBlocks(), 1000);
}

generateBlocksInterval()