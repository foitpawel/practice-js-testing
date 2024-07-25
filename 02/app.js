document.addEventListener('DOMContentLoaded', init);

function init() {
  const clickEl = document.querySelector('.error--click');
  const enterEl = document.querySelector('.error--enter');

  setRandomPosition(clickEl);
  setRandomPosition(enterEl);

  initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
  initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

}

function setRandomPosition(element, error = null) {
  element.style.top = Math.random() * 600 + 'px';
  element.style.left = Math.random() * 800 + 'px';

  if(error) {
      throw error;
  }
}

function initEventWithError(element, eventName, error) {
  const alertTxt = document.querySelector('.alert__message');
  element.addEventListener(eventName, function() {
  try{setRandomPosition(this, error)
  } catch(error) {
    alertTxt.innerHTML = error.message;
    document.querySelector('.alert--hidden').style.display = 'flex';
  } 
  // finally {
  //   document.body.addEventListener('click', (function hideAlert(event){
  //     if (!event.target.closest('.alert--hidden')) {
  //     document.querySelector('.alert--hidden').style.display = 'none'
  //     }
  //     document.body.removeEventListener('click', hideAlert);
  //   }));
  // }
  })

}
