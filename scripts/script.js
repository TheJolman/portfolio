function toggleProject(element) {
  const details = element.querySelector('.project-details');
  const preview = element.querySelector('.project-preview');

  if (details.classList.contains('hidden')) {
    details.classList.remove('hidden');
    preview.querySelector('.expand-hint').style.display = 'none';
  } else {
    details.classList.add('hidden');
    preview.querySelector('.expand-hint').style.display = 'block';
  }
}
