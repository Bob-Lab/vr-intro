import './assets/js/import_jquery.js'
import 'bootstrap'
import "@fancyapps/fancybox/dist/jquery.fancybox.js"

function show(selector) {
  $('.section').removeClass('d-flex')
  $('.section').addClass('d-none')
  $(selector).removeClass('d-none')
  $(selector).addClass('d-flex')
}

function showContentByHash() {
  if (window.location.hash === '#boracay') {
    show("#boracay")
  } else if (window.location.hash === '#boracay-2') {
    show("#boracay-2")
  } else if (window.location.hash === '#guam') {
    show("#guam")
  } else {
    show("#menu")
  }
}

$(document).ready(() => {
  showContentByHash()
  window.addEventListener('hashchange', () => showContentByHash())

  $('.video-btn').click(function() {
    const videoId = $(this).attr('data-video-id')
    const url = `https://www.youtube.com/embed/${videoId}`
    console.log(url);
    $.fancybox.open({
      src: url,
      type: 'iframe'
    })
  })
})
