document.getElementById('button').addEventListener('click', function() {
  // Fetching input value and output element
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');
    let sequence = [];
    try {
      //Validating the input
        if (input < 0) {
          throw new Error('Input cannot be negative');
        } else if (input === '') {
          throw new Error('Input cannot be empty');
        } else if (isNaN(input)) {
          throw new Error('Input must be a number');
        } else {
          // Generating Fibonacci sequence
            for (let i = 0; i < input; i++) {
                if (i === 0) {
                  sequence.push(0);
                } else if (i === 1) {
                  sequence.push(1);
                } else {
                  sequence.push(sequence[i - 1] + sequence[i - 2]);
                }
              }
        }
        // Displaying Fibonacci sequence
        output.innerHTML = sequence.join(', ');
    
      } catch (error) {
        // Display error message
        output.innerHTML = error;
      } finally {
        // Alerting the nth Fibonacci number
        alert(`The ${input}th number in the fibonacci sequence is ${sequence[input - 1]}`);
    }
})
