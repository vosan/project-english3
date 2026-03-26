const lessonsButtons = document.querySelectorAll('.lesson-card-btn');
const applicationSection = document.getElementById('application');

if (applicationSection) {
    lessonsButtons.forEach(button => {
    button.addEventListener('click', () => {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    });
    
  });
}