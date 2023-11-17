function initMap() {
  const paradise = {lat: 18.3802694, lng: 94.3340317};

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: paradise
  });

  var marker = new google.maps.Marker({
    position: paradise,
    map: map,
    title: 'My Favorite Vacation Place'
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const ngapali = document.querySelector('.ngapali-visuals');
  const previous = document.getElementById('previous');
  const next = document.getElementById('next');

  let current = 0;

  function pictureSlider(index) {
      if (index < 0) {
          current = ngapali.children.length - 1;
      } 
      else if (index < ngapali.children.length) {
          current = index;
      } 
      else {
          current = 0;
      }

      for (let i = 0; i < ngapali.children.length; i++) {
          ngapali.children[i].style.visibility = 'hidden';
      }
      ngapali.children[current].style.visibility = 'visible';

  }

  previous.addEventListener('click', function () {
      pictureSlider(current - 1);
  });

  next.addEventListener('click', function () {
      pictureSlider(current + 1);
  });

  pictureSlider(current)
})

// To Do List
const form = document.getElementById('form')
const text = document.getElementById('tasks')
const list = document.getElementById('todo')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  let todoList = document.createElement('li')
  todoList.innerHTML = text.value
  list.append(todoList)
  text.value = ''
  reload()
})

list.addEventListener('click', function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    reload()
  }
},false)

function reload() {
  localStorage.setItem('data', list.innerHTML)
}

function save() {
  list.innerHTML = localStorage.getItem('data')
}

save();
