async function findResult() {
    const searchId = document.getElementById('studentId').value;
    const resultDiv = document.getElementById('resultDisplay');
    const errorMsg = document.getElementById('errorMsg');
    
    // Clear previous results
    resultDiv.classList.add('hidden');
    errorMsg.innerText = '';

    try {
        // Fetch the data from your JSON file
        const response = await fetch('results.json');
        const data = await response.json();

        // Find the student
        const student = data.find(s => s.reg_no === searchId);

        if (student) {
            document.getElementById('studentName').innerText = student.name;
            document.getElementById('status').innerText = student.result;
            
            // Optional: Display marks loop
            let marksHtml = '<ul>';
            for (const [subject, score] of Object.entries(student.marks)) {
                marksHtml += `<li>${subject}: ${score}</li>`;
            }
            marksHtml += '</ul>';
            
            document.getElementById('marksTable').innerHTML = marksHtml;
            resultDiv.classList.remove('hidden');
        } else {
            errorMsg.innerText = "Student ID not found. Please check and try again.";
        }
    } catch (error) {
        console.error("Error loading data:", error);
        errorMsg.innerText = "System Error. Please try again later.";
    }
}