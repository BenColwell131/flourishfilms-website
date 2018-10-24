var portfolioContainer = document.querySelector('.port-items')

portfolioContainer.addEventListener('click', function(e) {
  e.preventDefault()
  var modalToggle = e.target.closest('.port-link')

  // End script if click isn't on a link
  if(!modalToggle) return

  // Select the relevant portfolio modal
  var modal = modalToggle.parentNode.nextElementSibling
  var closeButton = modal.querySelector('.port-modal-close')

  var modalOpen = function() {
    modal.classList.add('active')
    modal.style.animation = 'modalFadeIn 250ms forwards'

    //Remove main page scroll bar
    document.body.style.overflowY = 'hidden'
    document.body.scroll = 'no'
  }

  var modalClose = function() {
    modal.classList.remove('active')
    modal.removeEventListener('animationend', modalClose)

  }

  closeButton.addEventListener('click', function(){


    modal.style.animation = 'modalFadeOut 250ms forwards'
    //Restore main page scroll bar
    document.body.style.overflowY = 'scroll'
    document.body.scroll = 'yes'
    // Waits for the end of animation before actually closing the modal.
    modal.addEventListener('animationend', modalClose)
  })
  modalOpen()
})
