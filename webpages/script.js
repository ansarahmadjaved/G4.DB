// Form submission handler
document.getElementById('queryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const sequence = document.querySelector('.sequence-input').value;
    const cellType = document.querySelector('select[name="cellType"]').value;
    const chromatin = document.querySelector('select[name="chromatin"]').value;
    const epigenetic = document.querySelector('select[name="epigenetic"]').value;
    
    // Simple validation
    if (!sequence.trim()) {
        alert('Please enter a G4 sequence');
        return;
    }
    
    // Simulate database query
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Querying...';
    submitBtn.style.opacity = '0.7';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';
        alert(`Query submitted!\nSequence: ${sequence}\nCell Type: ${cellType}\nChromatin Information: ${chromatin}\nEpigenetic Profile: ${epigenetic}`);
    }, 2000);
});

// Insert example sequence
function insertExample() {
    const sequenceInput = document.querySelector('.sequence-input');
    sequenceInput.value = 'GTGGGAGGGGCCGGTGTGAGGCAAGGGG';
    
    // Add visual feedback
    const exampleBtn = document.querySelector('.example-btn');
    exampleBtn.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        exampleBtn.style.transform = '';
    }, 100);
}

// Navigate to different pages (placeholder function)
function navigateToPage(page) {
    // This would normally navigate to different pages
    // For now, we'll just show an alert
    alert(`Navigating to ${page} page...`);
    
    // You can implement actual navigation here:
    // window.location.href = `${page}.html`;
}

// Add hover effects to inputs
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.background = 'rgba(255, 255, 255, 1)';
    });
    
    input.addEventListener('blur', function() {
        this.style.background = 'rgba(255, 255, 255, 0.8)';
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-nav');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for updating active nav links
const observerOptions = {
    threshold: 0.3,
    rootMargin: '-70px 0px -70px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            
            // Remove active class from all nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to corresponding nav link
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
});
