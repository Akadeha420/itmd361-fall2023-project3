window.onload = () => {
  const border = document.querySelector('.profile-image')
  let toggle = true;
  border.addEventListener('click', (e) => {
    console.log('asdf')
    if (e.target.tagName === 'IMG' && toggle) {
      e.target.src = 'images/profile2.jpeg'
      e.target.alt = 'ak in animated image'
      toggle = false;
    }
    else {
      e.target.src = 'images/IMG_6311.JPG'
      e.target.alt = 'AK with thumbs up in a car'
      toggle = true;
    }
  })
}