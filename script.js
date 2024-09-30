document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById('submitBtn');
    const resultContainer = document.getElementById('resultContainer');

    // Correct answers
    const correctAnswers = {
        q1: 'A',
        q2: 'C',
        q3: 'A'
    };

    // Function to check answers
    function checkAnswers() {
        let score = 0;
        let totalQuestions = 3;

        // Get user answers
        const userAnswers = {
            q1: document.querySelector('input[name="q1"]:checked'),
            q2: document.querySelector('input[name="q2"]:checked'),
            q3: document.querySelector('input[name="q3"]:checked'),
        };

        // Check if each answer is correct
        for (let key in userAnswers) {
            if (userAnswers[key] && userAnswers[key].value === correctAnswers[key]) {
                score++;
            }
        }

        // Display result
        resultContainer.classList.remove('hidden');
        resultContainer.textContent = `You got ${score} out of ${totalQuestions} correct.`;
    }

    // Event listener for the submit button
    submitButton.addEventListener('click', checkAnswers);
});