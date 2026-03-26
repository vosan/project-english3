const allButtons = document.querySelectorAll('.lesson-card-btn');
const applicationSection = document.getElementById('application');

if (applicationSection) {
  allButtons.forEach(button => {
    button.addEventListener('click', () => {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    });
    
  });
}