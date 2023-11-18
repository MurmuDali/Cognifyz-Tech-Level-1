// Task 2 - 1
var colorButton = document.getElementById('colorButton');

  // Add a click event listener to the button
  colorButton.addEventListener('click', function() {
    // Generate a random color
    var randomColor = getRandomColor();

    // Change the button's background color
    colorButton.style.backgroundColor = randomColor;
  });

  // Function to generate a random color
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Task 2-2

  // Get the current time
  var currentTime = new Date();
  var currentHour = currentTime.getHours();

  // Define the greeting based on the current time
  var greeting;
  if (currentHour < 12) {
    greeting = 'Good morning!';
  } else if (currentHour < 18) {
    greeting = 'Good afternoon!';
  } else {
    greeting = 'Good evening!';
  }

  // Display the greeting in an alert box
  alert(greeting);

  
  // Task 2-3

  function calculate() {
    // Get the values from the input fields
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Check if the input is valid
    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers.');
      return;
    }

    // Perform the addition
    var result = num1 + num2;

    // Display the result
    document.getElementById('result').innerText = 'Result: ' + result;
  }