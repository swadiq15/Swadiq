// --- STEP 1: YOUR MADRASA RESULT DATA ---
const studentsData = [
    {
        "reg_no": "1020",
        "name": "AFSAL",
        "result": "PASSED",
        "marks": {
            "Class": "GEN",
            "Total Marks": 140
        }
    },
    {
        "reg_no": "1021",
        "name": "UVAIS",
        "result": "PASSED",
        "marks": {
            "Class": "GEN",
            "Total Marks": 135
        }
    },
    {
        "reg_no": "1022",
        "name": "ANAS",
        "result": "PASSED",
        "marks": {
            "Class": "FIQH",
            "Total Marks": 155
        }
    },
    {
        "reg_no": "1023",
        "name": "HABEEB",
        "result": "PASSED",
        "marks": {
            "Class": "AQEEDA",
            "Total Marks": 178
        }
    },
    {
        "reg_no": "1024",
        "name": "JAMSHID",
        "result": "PASSED",
        "marks": {
            "Class": "HADEES",
            "Total Marks": 180
        }
    },
    {
        "reg_no": "1025",
        "name": "BASITH",
        "result": "PASSED",
        "marks": {
            "Class": "AQEEDA",
            "Total Marks": 170
        }
    },
    {
        "reg_no": "1026",
        "name": "SINAN",
        "result": "PASSED",
        "marks": {
            "Class": "AQEEDA",
            "Total Marks": 163
        }
    },
    {
        "reg_no": "1027",
        "name": "NASEEF",
        "result": "FAILED",
        "marks": {
            "Class": "GEN",
            "Total Marks": 130
        }
    },
    {
        "reg_no": "1028",
        "name": "NASEEM",
        "result": "PASSED",
        "marks": {
            "Class": "GEN",
            "Total Marks": 136
        }
    },
    {
        "reg_no": "1029",
        "name": "BASIL",
        "result": "PASSED",
        "marks": {
            "Class": "THAFSEER",
            "Total Marks": 190
        }
    },
    {
        "reg_no": "1030",
        "name": "SUFIYAN",
        "result": "PASSED",
        "marks": {
            "Class": "THAFSEER",
            "Total Marks": 198
        }
    },
    {
        "reg_no": "1031",
        "name": "IRFAN",
        "result": "PASSED",
        "marks": {
            "Class": "AQEEDA",
            "Total Marks": 154
        }
    },
    {
        "reg_no": "1032",
        "name": "MUBASHIR",
        "result": "PASSED",
        "marks": {
            "Class": "THAFSEER",
            "Total Marks": 184
        }
    },
    {
        "reg_no": "1033",
        "name": "SADIQUE",
        "result": "PASSED",
        "marks": {
            "Class": "THAFSEER",
            "Total Marks": 175
        }
    },
    {
        "reg_no": "1034",
        "name": "NISHAD",
        "result": "PASSED",
        "marks": {
            "Class": "THAFSEER",
            "Total Marks": 189
        }
    },
    {
        "reg_no": "1035",
        "name": "MAHBOOB",
        "result": "PASSED",
        "marks": {
            "Class": "THAFSEER",
            "Total Marks": 182
        }
    },
    {
        "reg_no": "1036",
        "name": "NAFIH",
        "result": "PASSED",
        "marks": {
            "Class": "LUGA",
            "Total Marks": 199
        }
    },
    {
        "reg_no": "1037",
        "name": "ASLAM",
        "result": "PASSED",
        "marks": {
            "Class": "LUGA",
            "Total Marks": 197
        }
    }
];

// --- STEP 2: THE LOGIC ---
function findResult() {
    // Get the value typed in the input box
    const searchId = document.getElementById('studentId').value.trim();
    
    // Get the HTML elements where we will show the result
    const resultDiv = document.getElementById('resultDisplay');
    const nameDisplay = document.getElementById('studentName');
    const statusDisplay = document.getElementById('status');
    const marksTable = document.getElementById('marksTable');
    const errorMsg = document.getElementById('errorMsg');

    // Reset everything (clear previous search)
    resultDiv.classList.add('hidden'); // Hide the result box
    errorMsg.innerText = '';
    marksTable.innerHTML = '';
    
    if (!searchId) {
        errorMsg.innerText = "Please enter a Register Number.";
        return;
    }

    // Search for the student in our data list
    const student = studentsData.find(s => s.reg_no === searchId);

    if (student) {
        // If found, show the data
        nameDisplay.innerText = student.name;
        statusDisplay.innerText = student.result;
        
        // Color code the status (Green for pass, Red for fail)
        if (student.result === "PASSED") {
            statusDisplay.style.backgroundColor = "#dcfce7";
            statusDisplay.style.color = "#166534";
        } else {
            statusDisplay.style.backgroundColor = "#fee2e2";
            statusDisplay.style.color = "#991b1b";
        }

        // Create the marks list
        let marksHtml = '<ul style="list-style: none; padding: 0;">';
        for (const [key, value] of Object.entries(student.marks)) {
            marksHtml += `<li style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #ccc;">
                            <span style="color: #666;">${key}</span>
                            <strong style="color: #333;">${value}</strong>
                          </li>`;
        }
        marksHtml += '</ul>';
        
        marksTable.innerHTML = marksHtml;
        
        // Finally, unhide the result box
        resultDiv.classList.remove('hidden');
        resultDiv.style.display = "block"; // Force show
        
    } else {
        // If not found
        errorMsg.innerText = "Result not found for this Register Number.";
    }
}