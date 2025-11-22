// ================================
// Theme Toggle (Dark/Light Mode)
// ================================

function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const body = document.body;

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// ================================
// Mobile Menu Toggle
// ================================

function initMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!mobileToggle || !mobileMenu) return;

  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    // Animate hamburger icon
    const spans = mobileToggle.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(8px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      const spans = mobileToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
}

// ================================
// Smooth Scroll for Navigation
// ================================

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') return;

      e.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navHeight = document.querySelector('.nav').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ================================
// Scroll Fade-in Animation
// ================================

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in class
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

// ================================
// Typing Effect for Hero Subtitle
// ================================

function initTypingEffect() {
  const typedTextElement = document.getElementById('typed-text');
  if (!typedTextElement) return;

  const text = typedTextElement.textContent;
  typedTextElement.textContent = '';

  let charIndex = 0;
  const typingSpeed = 100; // milliseconds per character

  function typeCharacter() {
    if (charIndex < text.length) {
      typedTextElement.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeCharacter, typingSpeed);
    }
  }

  // Start typing after a short delay
  setTimeout(typeCharacter, 500);
}

// ================================
// GitHub API - Load Recent Repos (Optional)
// ================================

async function loadGitHubProjects() {
  // TODO: Uncomment and configure if you want to automatically load GitHub projects
  /*
  const username = 'Highsky7'; // Change to your GitHub username
  const projectsGrid = document.querySelector('.projects-grid');
  
  if (!projectsGrid) return;
  
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    const repos = await response.json();
    
    // Clear existing projects or append
    // projectsGrid.innerHTML = '';
    
    repos.forEach(repo => {
      if (repo.fork) return; // Skip forked repos
      
      const card = document.createElement('div');
      card.className = 'project-card fade-in';
      card.innerHTML = `
        <div class="project-header">
          <h3>${repo.name}</h3>
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
        <p class="project-description">${repo.description || 'No description available'}</p>
        <div class="project-tags">
          ${repo.language ? `<span class="tag">${repo.language}</span>` : ''}
          <span class="tag">⭐ ${repo.stargazers_count}</span>
        </div>
      `;
      
      projectsGrid.appendChild(card);
    });
    
    // Re-initialize scroll animations for new elements
    initScrollAnimations();
    
  } catch (error) {
    console.error('Error loading GitHub projects:', error);
  }
  */
}

// ================================
// Navigation Background on Scroll
// ================================

function initNavScroll() {
  const nav = document.querySelector('.nav');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Add shadow when scrolled
    if (currentScrollY > 100) {
      nav.style.boxShadow = 'var(--shadow-md)';
    } else {
      nav.style.boxShadow = 'none';
    }

    // Optional: Hide nav on scroll down, show on scroll up
    /*
    if (currentScrollY > lastScrollY && currentScrollY > 500) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    */

    lastScrollY = currentScrollY;
  });
}

// ================================
// Initialize All Features
// ================================

function init() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
    return;
  }

  initTheme();
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
  initTypingEffect();
  initNavScroll();

  // Optional: Load GitHub projects
  // loadGitHubProjects();

  console.log('🚀 Portfolio website initialized!');
}

// Start initialization
init();
