function showPage(page) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((p) => (p.style.display = "none"));
  document.getElementById(page).style.display = "block";
}

// Show home by default
window.onload = function () {
  showPage("home");
};

// Prevent form submission (demo only)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting us!");
      form.reset();
    });
  }
});

// Environmental Impact Calculator
function calculateImpact() {
  const energyUsage = parseFloat(document.getElementById('energyUsage').value);
  const solutionType = document.getElementById('solutionType').value;
  const resultDiv = document.getElementById('result');
  
  if (isNaN(energyUsage) || energyUsage <= 0) {
    resultDiv.innerHTML = '<p style="color: #e53935;">Please enter a valid energy usage value.</p>';
    resultDiv.style.display = 'block';
    return;
  }
  
  let co2Savings, costSavings;
  
  switch(solutionType) {
    case 'solar':
      // Solar panels: Assume 1 kWh solar energy prevents ~0.8 kg CO2
      co2Savings = energyUsage * 0.8;
      // Assume 30% cost savings
      costSavings = energyUsage * 0.3;
      break;
    case 'transformer':
      // Transformers: Assume 15% energy loss reduction
      co2Savings = energyUsage * 0.15 * 0.8; // 0.8 kg CO2 per kWh
      costSavings = energyUsage * 0.15;
      break;
    case 'both':
      // Both solutions: Combined benefits
      co2Savings = energyUsage * (0.8 + 0.15 * 0.8);
      costSavings = energyUsage * (0.3 + 0.15);
      break;
  }
  
  resultDiv.innerHTML = `
    <div style="background: rgba(46, 125, 50, 0.1); padding: 1rem; border-radius: 8px;">
      <h4 style="color: var(--dark-green); margin-top: 0;">Estimated Annual Environmental Impact</h4>
      <p style="font-size: 1.2rem; margin: 0.5rem 0;"><strong>CO₂ Savings:</strong> ${Math.round(co2Savings * 12)} kg/year</p>
      <p style="font-size: 1.2rem; margin: 0.5rem 0;"><strong>Cost Savings:</strong> ₹${Math.round(costSavings * 12)} per year</p>
      <p style="margin: 0.5rem 0 0 0;">By switching to our eco-friendly solutions, you'll significantly reduce your carbon footprint while saving on energy costs.</p>
    </div>
  `;
  resultDiv.style.display = 'block';
}

// Image loading optimization
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  
  // Simple image loading optimization
  images.forEach(img => {
    // Add loaded class after image loads
    img.addEventListener('load', function() {
      img.classList.add('loaded');
    });
    
    // If image is already loaded, add class immediately
    if (img.complete) {
      img.classList.add('loaded');
    }
  });
  
  // Intersection Observer for lazy loading (if supported)
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          // In a real implementation, we would set the src here
          // For now, we just add the loaded class
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
});
