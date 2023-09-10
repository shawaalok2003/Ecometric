function calculateCarbonFootprint() {
    var electricity = Number(document.getElementById('electricity').value);
    var diesel = Number(document.getElementById('diesel').value);
    var petrol = Number(document.getElementById('petrol').value);
    var lpg = Number(document.getElementById('lpg').value);
    var transportation = Number(document.getElementById('transportation').value);
    var waste = Number(document.getElementById('waste').value);
    var food = Number(document.getElementById('food').value);
    var phone = Number(document.getElementById('phone').value);
    var appliance = Number(document.getElementById('appliance').value);
  
    var total = (electricity * 0.5) + (diesel * 2.68) + (petrol * 2.31) + (lpg * 1.51) + (transportation * 0.17) + (waste * 0.02) + (food * 2.75) + (phone * 0.001) + (appliance * 0.007);
  
    var resultDiv = document.getElementById('result');
  
    var resultText = 'Your estimated carbon footprint is ' + total.toFixed(2) + ' kg CO2e/month.';
    
    var guidelines = [
      'Using public transportation or carpooling can reduce your carbon emissions by up to 30%.',
      'Using energy-efficient appliances can reduce your household energy consumption by up to 50%.',
      'Reducing meat consumption can reduce your carbon emissions by up to 15%.',
      'Using renewable energy can reduce your household carbon emissions to zero, depending on the size of your installation and your energy needs.',
      'Reducing water consumption can save energy used for pumping and treating water, and reduce greenhouse gas emissions related to the energy used for those activities.',
      'Planting trees can remove carbon dioxide from the atmosphere and offset some of your carbon emissions. Depending on the type of trees and their growth rate, the impact can vary widely.'
    ];
  
    var guidelinesList = '<ul>';
    for (var i = 0; i < guidelines.length; i++) {
      guidelinesList += '<li>' + guidelines[i] + '</li>';
    }
    guidelinesList += '</ul>';
  
    var newWindow = window.open('', 'Carbon Footprint Result');
    newWindow.document.write('<html><head><title>Carbon Footprint Result</title><style>body {background-color: black; color: white; font-weight: bold; text-align: center;}</style></head><body><h1>Carbon Footprint Result</h1><p>' + resultText + '</p><br><p>Here are some guidelines for reducing your carbon footprint:</p>' + guidelinesList + '</body></html>');
  }
  