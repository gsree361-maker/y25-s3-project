function filterStories(type) {
  let cards = document.querySelectorAll('.story-card');
  let buttons = document.querySelectorAll('.filters button');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  cards.forEach(card => {
    if (type === 'all' || card.classList.contains(type)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function markHelped(btn) {
  btn.classList.toggle('helped');

  if (btn.classList.contains('helped')) {
    btn.innerHTML = '❤️ You helped this story';
  } else {
    btn.innerHTML = '🤍 You helped this story';
  }
}
