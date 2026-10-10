const result = document.getElementById("result");
const records = document.getElementById("records");
const errorMessage = document.getElementById("errorMessage");
const clearAll = document.getElementById("clearAll");


// Load existing records from Local Storage

let students = JSON.parse(localStorage.getItem("students")) || [];


// Display saved records when page loads

displayRecords();


// Form submission

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    errorMessage.textContent = "";

    // Get student details

    const name = document.getElementById("studentName").value.trim();
    const rollNumber = document.getElementById("rollNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;


    // Get marks

    const marks = {
        HTML: Number(document.getElementById("html").value),
        CSS: Number(document.getElementById("css").value),
        JavaScript: Number(document.getElementById("javascript").value),
        DBMS: Number(document.getElementById("dbms").value),
        Python: Number(document.getElementById("python").value)
    };


    // Validate student details

    if (name.length < 3) {
        showError("Student name must contain at least 3 characters.");
        return;
    }

    if (rollNumber === "") {
        showError("Please enter roll number.");
        return;
    }

    if (email === "" || !email.includes("@")) {
        showError("Please enter a valid email address.");
        return;
    }

    if (course === "") {
        showError("Please select a course.");
        return;
    }


    // Validate marks

    for (let subject in marks) {

        if (
            marks[subject] < 0 ||
            marks[subject] > 100 ||
            isNaN(marks[subject])
        ) {

            showError(
                subject + " marks must be between 0 and 100."
            );

            return;
        }
    }


    // Calculate total

    const total =
        marks.HTML +
        marks.CSS +
        marks.JavaScript +
        marks.DBMS +
        marks.Python;


    // Calculate percentage

    const percentage = total / 5;


    // Determine Pass / Fail

    let status;

    if (
        marks.HTML >= 35 &&
        marks.CSS >= 35 &&
        marks.JavaScript >= 35 &&
        marks.DBMS >= 35 &&
        marks.Python >= 35
    ) {
        status = "Pass";
    } else {
        status = "Fail";
    }


    // Create student object

    const student = {

        id: Date.now(),

        name: name,

        rollNumber: rollNumber,

        email: email,

        course: course,

        marks: marks,

        total: total,

        percentage: percentage.toFixed(2),

        status: status

    };


    // Convert object into JSON

    const studentJSON = JSON.stringify(student);

    console.log("Student JSON:");
    console.log(studentJSON);


    // Convert JSON back into object

    const studentObject = JSON.parse(studentJSON);


    // Save student in array

    students.push(studentObject);


    // Store array in Local Storage

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );


    // Display result

    displayResult(studentObject);


    // Display updated records

    displayRecords();


    // Reset form

    studentForm.reset();

});


// Display Result

function displayResult(student) {

    resultSection.style.display = "block";

    let statusClass =
        student.status === "Pass" ? "pass" : "fail";

    result.innerHTML = `

        <div class="student-info">

            <p>
                <strong>Name:</strong>
                ${student.name}
            </p>

            <p>
                <strong>Roll Number:</strong>
                ${student.rollNumber}
            </p>

            <p>
                <strong>Email:</strong>
                ${student.email}
            </p>

            <p>
                <strong>Course:</strong>
                ${student.course}
            </p>

        </div>


        <table class="result-table">

            <thead>

                <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                </tr>

            </thead>

            <tbody>

                <tr>
                    <td>HTML</td>
                    <td>${student.marks.HTML}</td>
                </tr>

                <tr>
                    <td>CSS</td>
                    <td>${student.marks.CSS}</td>
                </tr>

                <tr>
                    <td>JavaScript</td>
                    <td>${student.marks.JavaScript}</td>
                </tr>

                <tr>
                    <td>DBMS</td>
                    <td>${student.marks.DBMS}</td>
                </tr>

                <tr>
                    <td>Python</td>
                    <td>${student.marks.Python}</td>
                </tr>

            </tbody>

        </table>


        <div class="result-summary">

            <p>
                <strong>Total Marks:</strong>
                ${student.total} / 500
            </p>

            <p>
                <strong>Percentage:</strong>
                ${student.percentage}%
            </p>

            <p>
                <strong>Result:</strong>

                <span class="${statusClass}">
                    ${student.status}
                </span>

            </p>

        </div>
    `;
}


// Display saved records

function displayRecords() {

    records.innerHTML = "";

    if (students.length === 0) {

        records.innerHTML =
            "<p>No student records found.</p>";

        return;
    }


    students.forEach(function(student) {

        const studentCard =
            document.createElement("div");

        studentCard.className = "student-card";

        studentCard.innerHTML = `

            <h3>${student.name}</h3>

            <p>
                <strong>Roll Number:</strong>
                ${student.rollNumber}
            </p>

            <p>
                <strong>Course:</strong>
                ${student.course}
            </p>

            <p>
                <strong>Total:</strong>
                ${student.total}/500
            </p>

            <p>
                <strong>Percentage:</strong>
                ${student.percentage}%
            </p>

            <p>
                <strong>Status:</strong>
                ${student.status}
            </p>

            <button
                class="delete-btn"
                onclick="deleteStudent(${student.id})"
            >
                Delete
            </button>

        `;

        records.appendChild(studentCard);

    });
}


// Delete individual student

function deleteStudent(id) {

    students = students.filter(function(student) {

        return student.id !== id;

    });


    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );


    displayRecords();
}


// Clear all records

clearAll.addEventListener("click", function() {

    if (students.length === 0) {

        alert("No records to delete.");

        return;
    }


    const confirmation =
        confirm("Are you sure you want to delete all records?");


    if (confirmation) {

        students = [];

        localStorage.removeItem("students");

        displayRecords();

        resultSection.style.display = "none";
    }

});


// Show error message

function showError(message) {

    errorMessage.textContent = message;

}
