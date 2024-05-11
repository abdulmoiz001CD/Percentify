# Percentify
  This Website  is designed to calculate the percentage of marks obtained by a student in a set of subjects. 
  Here's a breakdown of how it works:

(i)Event Listener: The code begins by selecting the HTML form element with the id "formInputEl" and the paragraph element with the id "resultEl". It then adds an event listener to the form element, listening for the "submit" event. When the form is submitted, the function calculateMarks is triggered.

(ii)Calculate Marks Function: This function is called when the form is submitted. It prevents the default form submission behavior using event.preventDefault() to prevent the page from reloading.

(ii)Data Retrieval: Inside the calculateMarks function, the code creates a new FormData object from the form element. This allows it to easily retrieve the values entered by the user in the form inputs.

(iv)Data Processing: The code then iterates over the form data using formData.forEach() and calculates the total marks obtained by summing the marks obtained in each subject.

(v)Percentage Calculation: The total marks obtained are divided by the maximum possible marks (in this case, 800) to get the percentage. The percentage is calculated using the formula (obtainMarks / maxMarks) * 100. It's rounded down to the nearest integer using Math.floor().

(vi)Result Display: Finally, the calculated percentage is displayed as a message inside the paragraph element with id "resultEl". The message includes the total marks obtained, the maximum marks possible, and the calculated percentage.

Overall, this code provides a simple and straightforward way to calculate and display the percentage of marks obtained by a student in a set of subjects based on the input provided in a form.
