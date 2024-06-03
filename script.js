// Hide elements after 3 seconds
setTimeout(function launching() {
  document.querySelectorAll(".launching").forEach(function(element) {
    element.style.display = "none";
  });
  document.querySelectorAll(".interface").forEach(function(element) {
    element.style.display = "block";
  });
}, 3000);

function calBmi() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height)) {
    alert("Please enter valid data");
    return;
  }
  
  document.querySelector(".interface").style.display = "none";
  document.querySelector(".report").style.display = "block";
  
  // Calculate BMI
  let bmi = weight / ((height / 100) * (height / 100));
  let actualBmi = Math.round(bmi * 10) / 10;
  document.getElementById("resultbmi").innerHTML = `Your BMI is ${actualBmi}`;
  
  let healthStatus = "";
  let healthSol = "";
  let descriptive = "";
  let advices = [
    "", "", "", "", "", "", "", ""
  ];

  if (actualBmi < 18.5) {
    healthStatus = "You are underweight";
    healthSol = "Underweight";
    descriptive = "Being underweight can indicate potential health risks such as nutrient deficiencies and a weakened immune system. It's important to focus on gaining weight in a healthy way by eating nutrient-dense foods and incorporating strength training exercises to build muscle mass.";
    advices = [
      "Include more high-calorie, nutrient-dense foods in your diet.",
      "Eat more frequent, smaller meals throughout the day.",
      "Increase your intake of lean proteins to build muscle mass.",
      "Incorporate healthy fats like avocados, nuts, and olive oil.",
      "Consider supplements to ensure you're getting essential vitamins and minerals.",
      "", "", ""
    ];
  } else if (actualBmi >= 18.5 && actualBmi <= 24.9) {
    healthStatus = "You are normal";
    healthSol = "Normal Weight";
    descriptive = "Congratulations! Maintaining a healthy weight range reduces the risk of many chronic diseases. Continue to prioritize balanced nutrition, regular physical activity, and overall wellness habits to sustain your current weight and health.";
    advices = [
      "Continue eating a variety of foods from all food groups.",
      "Engage in at least 150 minutes of moderate exercise per week.",
      "Drink plenty of water, aiming for 8 glasses a day.",
      "Visit your healthcare provider for regular health screenings.",
      "Ensure you get 7-9 hours of sleep every night.",
      "", "", ""
    ];
  } else if (actualBmi >= 25.0 && actualBmi <= 29.9) {
    healthStatus = "You are overweight";
    healthSol = "Overweight";
    descriptive = "Being overweight increases the risk of developing conditions like heart disease, type 2 diabetes, and certain cancers. Consider making lifestyle changes such as adopting a balanced diet, increasing physical activity, and seeking support from healthcare professionals or nutritionists to achieve a healthier weight.";
    advices = [
      "Be mindful of portion sizes to avoid overeating.",
      "Choose whole grains, fruits, vegetables, and lean proteins.",
      "Aim for at least 30 minutes of moderate exercise most days of the week.",
      "Replace sodas and sugary drinks with water or herbal teas.",
      "Keep track of your weight regularly to stay motivated and make necessary adjustments.",
      "", "", ""
    ];
  } else if (actualBmi >= 30) {
    healthStatus = "You are obese";
    healthSol = "Obesity";
    descriptive = "Obesity significantly raises the risk of serious health issues including cardiovascular disease, stroke, and joint problems. It's crucial to prioritize weight loss through sustainable lifestyle changes such as portion control, regular exercise, and seeking support from healthcare professionals or weight loss programs to improve overall health and reduce the risk of obesity-related complications.";
    advices = [
      "Work with a healthcare provider or dietitian for a personalized plan.",
      "Follow a structured meal plan to control calorie intake.",
      "Engage in at least 150 minutes of moderate or 75 minutes of vigorous exercise weekly.",
      "Develop healthy habits, like mindful eating and avoiding late-night snacking.",
      "Join a support group or find a weight-loss buddy for encouragement and accountability.",
      "", "", ""
    ];
  }

  document.getElementById("healthStatus").innerHTML = healthStatus;
  document.getElementById("healthSol").innerHTML = healthSol;
  document.getElementById("descriptive").innerHTML = descriptive;

  document.getElementById("adviceone").innerHTML = advices[0];
  document.getElementById("advicetwo").innerHTML = advices[1];
  document.getElementById("advicethree").innerHTML = advices[2];
  document.getElementById("advicefour").innerHTML = advices[3];
  document.getElementById("advicefive").innerHTML = advices[4];
  document.getElementById("advicesix").innerHTML = advices[5];
  document.getElementById("adviceseven").innerHTML = advices[6];
  document.getElementById("adviceeight").innerHTML = advices[7];
}

function exit() {
  document.querySelector(".interface").style.display = "block";
  document.querySelector(".report").style.display = "none";
}
