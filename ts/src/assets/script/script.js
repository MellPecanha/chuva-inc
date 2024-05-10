function showMore() {
  let more = document.getElementById('more');
  let btn = document.getElementById('btn-show-more');

  if (more.style.display === 'inline') {
    more.style.display = 'none';
    btn.innerHTML = 'Ver mais';
  } else {
    more.style.display = 'inline';
    btn.innerHTML = 'Ver menos';
  }
}

function createTopic() {
  document.getElementById('ask-body').style.display = 'none';
  document.getElementById('suggestion').style.display = 'block';
}

function submitAnswer() {
  document.getElementById('suggestion').style.display = 'none';
  document.getElementById('success').style.display = 'block';
  document.getElementById('feedback').style.display = 'block';
}

function newTopic() {
  document.getElementById('success').style.display = 'none';
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('ask-body').style.display = 'block';
}

function comments() {
  var comment = document.getElementById('comments');
  var open = document.getElementById('open-comment');
  let dots = document.getElementById('dots');

  if (comment.style.display === 'none') {
    comment.style.display = 'inline';
    open.style.display = 'inline';
    dots.style.display = 'none';
  }
  else {
    comment.style.display = 'none';
    open.style.display = 'none';
    dots.style.display = 'inline';
  }
}
