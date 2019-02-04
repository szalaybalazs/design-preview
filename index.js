const designs = {
  'desktop': [
    'landingpage',
    'about',
    'resources',
    'resources-browse',
    'apply-1',
    'apply-2',
    'apply-3',
    'apply-4',
    'login',
  ],
  'mobile': [
    'landingpage',
    'about',
    'contact',
    'resource-browse',
    'resource',
  ],
  'tablet': []
}

const dimensions = {
  'desktop': { width: '100vw', height: '100vh'},
  'mobile': { width: '375', height: '667'},
  'tablet': { width: '375', height: '667'},
}

const types = ['desktop', 'mobile', 'tablet']

const select = document.getElementById('designSelect');
const typeSelect = document.getElementById('typeSelect');
const imgContainer = document.getElementById('imgContainer');
const bottomOverlap = document.getElementById('bottomOverlap');

let typeContent = '';
types.map(type => {
  typeContent += `<option value="${type}">${type}</option>`
})

typeSelect.innerHTML = typeContent;


const img = document.getElementById('IMG');

handleDesignChange = () => img.src = './designs/' + select.value;

const handleTypeChange = type => {
  let content = '';
  designs[type].map(design => {
    content += `<option value="${design}-${type}.png">${design}</option>`
  })

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  imgContainer.style.width = dimensions[type].width;
  imgContainer.style.height = dimensions[type].height;

  console.log(dimensions[type].height, windowHeight)

  if(dimensions[type].height < windowHeight){
    // bottomOverlap.style.height = windowHeight - dimensions[type].height + 'px';
    // bottomOverlap.style.top = dimensions[type].height + 'px';

  } 

  console.log(bottomOverlap)
  console.log(imgContainer)
  select.innerHTML = content;
  handleDesignChange(select.value);
}



handleTypeChange('desktop')
select.addEventListener('change', handleDesignChange)
typeSelect.addEventListener('change', () => handleTypeChange(typeSelect.value))