document.getElementById('carbonForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const travel = parseFloat(document.getElementById('travel').value) || 0;
  const electricity = parseFloat(document.getElementById('electricity').value) || 0;
  const food = parseFloat(document.getElementById('food').value) || 1;

  // Simple carbon calculation formula (realistic for India)
  let footprint = (travel * 0.12) + (electricity * 0.82) + (food * 1.8);
  footprint = footprint * 12; // annual

  // Show result
  document.getElementById('result').classList.remove('d-none');
  document.getElementById('score').textContent = footprint.toFixed(1);

  const percentage = Math.min(Math.round((footprint / 5.5) * 100), 100);
  document.getElementById('progressBar').style.width = percentage + '%';
  document.getElementById('progressBar').textContent = percentage + '% of average Indian';

  // Tips
  const tipsList = [
    "Use public transport or cycle for short trips",
    "Switch to LED bulbs and turn off unused appliances",
    "Reduce meat consumption by 2 days a week",
    "Plant 1 tree every month",
    "Use solar water heater if possible"
  ];
  const tipsHTML = tipsList.map(tip => `<li class="list-group-item">${tip}</li>`).join('');
  document.getElementById('tips').innerHTML = tipsHTML;
});

function resetForm() {
  document.getElementById('result').classList.add('d-none');
  document.getElementById('carbonForm').reset();
}