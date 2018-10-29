import './assets/js/import_jquery.js'
import 'bootstrap'
import "@fancyapps/fancybox/dist/jquery.fancybox.js"

$(document).ready(() => {
  $.fancybox.open({
    src: 'https://www.youtube.com/embed/AmKiNaFvSb8',
    type: 'iframe'
  })
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
