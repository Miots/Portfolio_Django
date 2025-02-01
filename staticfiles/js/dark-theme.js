document.addEventListener('DOMContentLoaded', (event) => {
    const root = document.documentElement;
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Appliquer le thème sombre par défaut
    root.classList.add('dark');
    
    // Fonction pour mettre à jour les couleurs du thème
    function updateThemeColors() {
      const isDark = root.classList.contains('dark');
      root.style.setProperty('--background', isDark ? '#0f172a' : '#ffffff');
      root.style.setProperty('--text', isDark ? '#e2e8f0' : '#333333');
      root.style.setProperty('--primary', isDark ? '#3b82f6' : '#2563eb');
      root.style.setProperty('--secondary', isDark ? '#60a5fa' : '#3b82f6');
      root.style.setProperty('--accent', isDark ? '#93c5fd' : '#60a5fa');
      root.style.setProperty('--card-bg', isDark ? '#1e293b' : '#f1f5f9');
    }
    
    // Appliquer les couleurs initiales
    updateThemeColors();
  
    // Gérer le menu mobile
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  });