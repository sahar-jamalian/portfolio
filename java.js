document.addEventListener("DOMContentLoaded", function() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
   
    function animateSkills() {
        skillLevels.forEach(skill => {
            const level = skill.getAttribute('data-level');
            skill.style.width = level; 
        });
    }

    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animateSkills();
            observer.unobserve(skillsSection);
        }
    });

    observer.observe(skillsSection);
});
document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const now = new Date();

        // فرمت تاریخ
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = now.toLocaleDateString('fa-IR', options);

        // فرمت ساعت
        const time = now.toLocaleTimeString('fa-IR');

        // نمایش تاریخ و ساعت
        document.getElementById('date').textContent = date;
        document.getElementById('time').textContent = time;
    }

    // به‌روزرسانی تاریخ و ساعت هر ثانیه
    setInterval(updateDateTime, 1000);

    // به‌روزرسانی اولیه
    updateDateTime();
});
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');

    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    } else {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    }
}
