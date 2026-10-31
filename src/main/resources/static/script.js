// function getStudent() {

//     const id = document.getElementById("studentId").value;

//     fetch("/students/" + id)
//         .then(response => response.json())
//         .then(student => {

//             document.getElementById("result").innerHTML = `

//                 <h3>Student Details</h3>

//                 <p><strong>ID:</strong> ${student.id}</p>

//                 <p><strong>Name:</strong> ${student.name}</p>

//                 <p><strong>Branch:</strong> ${student.branch}</p>

//                 <p><strong>Year:</strong> ${student.year}</p>

//                 <p><strong>Mobile:</strong> ${student.mobile}</p>

//             `;

//         })
//         .catch(error => {

//             document.getElementById("result").innerHTML =
//                 "<p>Student Not Found</p>";

//         });
// }

// document.getElementById("studentForm")
//     .addEventListener("submit", function(event) {

//         event.preventDefault();

//         const student = {

//             name: document.getElementById("name").value,

//             branch: document.getElementById("branch").value,

//             year: document.getElementById("year").value,

//             mobile: document.getElementById("mobile").value
//         };
//         fetch("/students", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(student)
//         })
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById("message").innerHTML =
//                 "<h3>Student Added Successfully!</h3>";
//             document.getElementById("studentForm").reset();
//         })
//         .catch(error => {
//             document.getElementById("message").innerHTML =
//                 "<h3>Error Adding Student</h3>";
//         });
//     });

// function getAllStudents() {

//     fetch("/students")

//         .then(response => response.json())

//         .then(students => {

//             let table = `
//                 <table border="1">

//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Branch</th>
//                         <th>Year</th>
//                         <th>Mobile</th>
//                     </tr>
//             `;

//             students.forEach(student => {

//                 table += `
//                     <tr>
//                         <td>${student.id}</td>
//                         <td>${student.name}</td>
//                         <td>${student.branch}</td>
//                         <td>${student.year}</td>
//                         <td>${student.mobile}</td>
//                     </tr>
//                 `;

//             });

//             table += `</table>`;

//             document.getElementById("studentsTable").innerHTML = table;

//         })

//         .catch(error => {

//             document.getElementById("studentsTable").innerHTML =
//                 "<p>Error loading students</p>";

//         });
// }

// function getAllStudents() {

//     fetch("/students")

//         .then(response => response.json())

//         .then(students => {

//             let table = `
//                 <table border="1" style="width:100%; border-collapse: collapse;">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Branch</th>
//                             <th>Year</th>
//                             <th>Mobile</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//             `;

//             students.forEach(student => {

//                 table += `
//                     <tr>
//                         <td>${student.id}</td>
//                         <td>${student.name}</td>
//                         <td>${student.branch}</td>
//                         <td>${student.year}</td>
//                         <td>${student.mobile}</td>
//                         <td>
//                             <button onclick="editStudent(${student.id})">Edit</button>
//                             <button onclick="deleteStudent(${student.id})" style="margin-left: 5px; color: red;">Delete</button>
//                         </td>
//                     </tr>
//                 `;

//             });

//             table += `
//                     </tbody>
//                 </table>
//             `;

//             document.getElementById("studentsTable").innerHTML = table;

//         })

//         .catch(error => {

//             console.error("Error loading students:", error);

//             document.getElementById("studentsTable").innerHTML =
//                 "<p style='color: red;'>Error loading students</p>";

//         });
// }
// function editStudent(id) {

//     fetch("/students/" + id)

//         .then(response => response.json())

//         .then(student => {

//             document.getElementById("editSection").style.display = "block";

//             document.getElementById("editName").value =
//                 student.name;

//             document.getElementById("editBranch").value =
//                 student.branch;

//             document.getElementById("editYear").value =
//                 student.year;

//             document.getElementById("editMobile").value =
//                 student.mobile;

//             document.getElementById("editSection")
//                 .scrollIntoView({
//                     behavior: "smooth"
//                 });

//             document.getElementById("editStudentForm")
//                 .setAttribute("data-id", student.id);

//         })

//         .catch(error => {

//             alert("Unable to load student details.");

//         });
// }
// document.getElementById("editStudentForm")
//     .addEventListener("submit", function(event) {

//         event.preventDefault();

//         const id = this.getAttribute("data-id");

//         const student = {

//             name: document.getElementById("editName").value,

//             branch: document.getElementById("editBranch").value,

//             year: document.getElementById("editYear").value,

//             mobile: document.getElementById("editMobile").value

//         };


//         fetch("/students/" + id, {

//             method: "PUT",

//             headers: {
//                 "Content-Type": "application/json"
//             },

//             body: JSON.stringify(student)

//         })

//         .then(response => response.json())

//         .then(data => {

//             document.getElementById("updateMessage")
//                 .innerHTML =
//                 "<p>Student Updated Successfully!</p>";

//             getAllStudents();

//         })

//         .catch(error => {

//             document.getElementById("updateMessage")
//                 .innerHTML =
//                 "<p>Error Updating Student</p>";

//         });

//     });
// function cancelEdit() {

//     document.getElementById("editSection")
//         .style.display = "none";

//     document.getElementById("editStudentForm")
//         .reset();

// }
// function getAllStudents() {

//     fetch("/students")

//         .then(response => response.json())

//         .then(students => {

//             let table = `
//                 <table>

//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Branch</th>
//                         <th>Year</th>
//                         <th>Mobile</th>
//                         <th>Action</th>
//                     </tr>
//             `;

//             students.forEach(student => {

//                 table += `
//                     <tr>

//                         <td>${student.id}</td>

//                         <td>${student.name}</td>

//                         <td>${student.branch}</td>

//                         <td>${student.year}</td>

//                         <td>${student.mobile}</td>

//                         <td>
//                             <button
//                                 onclick="editStudent(${student.id})">

//                                 Edit

//                             </button>
//                         </td>

//                     </tr>
//                 `;

//             });

//             table += `</table>`;

//             document.getElementById("studentsTable")
//                 .innerHTML = table;

//         })

//         .catch(error => {

//             document.getElementById("studentsTable")
//                 .innerHTML =
//                 "<p>Error loading students</p>";

//         });
// }

// function deleteStudent(id) {

//     const confirmDelete = confirm(
//         "Are you sure you want to delete this student?"
//     );


//     if (!confirmDelete) {

//         return;

//     }

//     fetch("/students/" + id, {

//         method: "DELETE"

//     })

//     .then(response => {

//         if (!response.ok) {

//             throw new Error(
//                 "Delete failed"
//             );

//         }

//         return response.text();

//     })

//     .then(message => {

//         alert(message);


//         // Refresh table

//         getAllStudents();

//     })

//     .catch(error => {

//         console.error(error);

//         alert(
//             "Error deleting student."
//         );

//     });

// }





"use strict";

// ======================================================
// APPLICATION STATE
// ======================================================

let allStudents = [];
let pendingDeleteId = null;
let messageTimer = null;

window.allStudents = allStudents;

const pageInfo = {
    dashboard: {
        title: "Dashboard Overview",
        subtitle: "Monitor student records and statistics."
    },
    students: {
        title: "Student Directory",
        subtitle: "Search, filter and manage your student records."
    },
    addStudent: {
        title: "Add New Student",
        subtitle: "Register a new student in your database."
    },
    editStudent: {
        title: "Edit Student",
        subtitle: "Update the selected student's information."
    }
};


// ======================================================
// HELPER FUNCTIONS
// ======================================================

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}


function showMessage(message, type = "success") {
    const box = document.getElementById("globalMessage");

    box.textContent = message;
    box.className = "global-message " + type;

    clearTimeout(messageTimer);

    messageTimer = setTimeout(() => {
        box.textContent = "";
        box.className = "global-message";
    }, 4000);
}


async function requestJSON(url, options = {}) {
    const response = await fetch(url, options);

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
            errorText || `Request failed (${response.status})`
        );
    }

    return response.json();
}


function validateMobile(mobile) {
    return /^[0-9]{10}$/.test(mobile);
}


function studentInitials(name) {
    const parts = String(name || "").trim().split(/\s+/);

    return parts
        .slice(0, 2)
        .map(part => part.charAt(0).toUpperCase())
        .join("") || "?";
}


function branchClass(branch) {
    const classes = {
        "CSE": "blue",
        "ECE": "purple",
        "EEE": "green",
        "MECH": "orange",
        "CIVIL": "teal",
        "AI & DS": "pink"
    };

    return classes[branch] || "blue";
}


// ======================================================
// PAGE NAVIGATION
// ======================================================

function showPage(page) {
    const pages = [
        "dashboard",
        "students",
        "addStudent",
        "editStudent"
    ];

    if (!pages.includes(page)) {
        return;
    }

    pages.forEach(pageName => {
        document.getElementById(pageName + "Page").hidden =
            pageName !== page;
    });

    document.querySelectorAll(".nav-link").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.page === page
        );
    });

    document.getElementById("pageTitle").textContent =
        pageInfo[page].title;

    document.getElementById("pageSubtitle").textContent =
        pageInfo[page].subtitle;

    document.getElementById("sidebar").classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (page === "students") {
        renderStudentTable();
    }

    if (page === "dashboard") {
        renderDashboard();
    }
}


// ======================================================
// LOAD STUDENTS FROM SPRING BOOT
// ======================================================

async function loadStudents(showSuccess = false) {
    const refreshButton = document.getElementById("refreshButton");

    if (refreshButton) {
        refreshButton.disabled = true;
        refreshButton.textContent = "Loading...";
    }

    try {
        const students = await requestJSON("/students");

        if (!Array.isArray(students)) {
            throw new Error("Unexpected student data received.");
        }

        allStudents = students;
        window.allStudents = allStudents;

        renderDashboard();
        renderStudentTable();

        if (showSuccess) {
            showMessage("Student records refreshed successfully.");
        }

    } catch (error) {
        console.error("Loading students failed:", error);

        showMessage(
            "Unable to load students. Check that Spring Boot is running.",
            "error"
        );

    } finally {
        if (refreshButton) {
            refreshButton.disabled = false;
            refreshButton.textContent = "↻ Refresh Data";
        }
    }
}


// ======================================================
// DASHBOARD STATISTICS
// ======================================================

function renderDashboard() {
    document.getElementById("totalStudents").textContent =
        allStudents.length;

    const cseCount = allStudents.filter(
        student => student.branch === "CSE"
    ).length;

    const eceCount = allStudents.filter(
        student => student.branch === "ECE"
    ).length;

    document.getElementById("cseStudents").textContent = cseCount;
    document.getElementById("eceStudents").textContent = eceCount;

    document.getElementById("otherStudents").textContent =
        allStudents.length - cseCount - eceCount;

    renderBranchStatistics();
    renderRecentStudents();
}


function renderBranchStatistics() {
    const container = document.getElementById("branchStatistics");

    const knownBranches = [
        "CSE",
        "ECE",
        "EEE",
        "MECH",
        "CIVIL",
        "AI & DS"
    ];

    const branches = new Set([
        ...knownBranches,
        ...allStudents.map(student => student.branch).filter(Boolean)
    ]);

    if (allStudents.length === 0) {
        container.innerHTML =
            '<p class="empty-state">Add students to see branch statistics.</p>';
        return;
    }

    container.innerHTML = [...branches].map(branch => {
        const count = allStudents.filter(
            student => student.branch === branch
        ).length;

        const percentage = Math.round(
            (count / allStudents.length) * 100
        );

        return `
            <div class="branch-stat">
                <div class="branch-stat-top">
                    <span>${escapeHTML(branch)}</span>
                    <span>${count} students · ${percentage}%</span>
                </div>

                <div class="progress-track">
                    <div class="progress-fill"
                         style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    }).join("");
}


function renderRecentStudents() {
    const tbody = document.getElementById("recentStudentsBody");
    const empty = document.getElementById("recentEmpty");

    // Show the highest IDs first as an approximation of recently added.
    const recent = [...allStudents]
        .sort((a, b) => Number(b.id) - Number(a.id))
        .slice(0, 5);

    tbody.innerHTML = recent.map(student => `
        <tr>
            <td>${escapeHTML(student.id)}</td>

            <td>
                <div class="student-cell">
                    <div class="student-avatar">
                        ${escapeHTML(studentInitials(student.name))}
                    </div>
                    <div>
                        <div class="student-name">
                            ${escapeHTML(student.name)}
                        </div>
                        <div class="student-id-label">
                            Student #${escapeHTML(student.id)}
                        </div>
                    </div>
                </div>
            </td>

            <td>
                <span class="branch-badge">
                    ${escapeHTML(student.branch)}
                </span>
            </td>

            <td>${escapeHTML(student.year)} Year</td>

            <td>${escapeHTML(student.mobile)}</td>
        </tr>
    `).join("");

    empty.hidden = recent.length !== 0;
}


// ======================================================
// SEARCH AND FILTER
// ======================================================

function getFilteredStudents() {
    const searchText = document
        .getElementById("searchInput")
        .value.toLowerCase().trim();

    const branch = document.getElementById("branchFilter").value;
    const year = document.getElementById("yearFilter").value;

    return allStudents.filter(student => {
        const name = String(student.name || "").toLowerCase();
        const mobile = String(student.mobile || "");

        const matchesSearch =
            name.includes(searchText) ||
            mobile.includes(searchText);

        const matchesBranch =
            !branch || student.branch === branch;

        const matchesYear =
            !year || student.year === year;

        return matchesSearch && matchesBranch && matchesYear;
    });
}


function renderStudentTable() {
    const tbody = document.getElementById("studentsTableBody");
    const empty = document.getElementById("tableEmpty");
    const count = document.getElementById("recordCount");
    const summary = document.getElementById("tableSummary");

    const students = getFilteredStudents();

    count.textContent =
        `${students.length} ${students.length === 1 ? "record" : "records"}`;

    summary.textContent =
        `Showing ${students.length} of ${allStudents.length} students`;

    tbody.innerHTML = students.map(student => `
        <tr>
            <td>${escapeHTML(student.id)}</td>

            <td>
                <div class="student-cell">
                    <div class="student-avatar">
                        ${escapeHTML(studentInitials(student.name))}
                    </div>

                    <div>
                        <div class="student-name">
                            ${escapeHTML(student.name)}
                        </div>

                        <div class="student-id-label">
                            ID: ${escapeHTML(student.id)}
                        </div>
                    </div>
                </div>
            </td>

            <td>
                <span class="branch-badge">
                    ${escapeHTML(student.branch)}
                </span>
            </td>

            <td>
                <span class="year-badge">
                    ${escapeHTML(student.year)} Year
                </span>
            </td>

            <td>${escapeHTML(student.mobile)}</td>

            <td>
                <div class="action-group">
                    <button class="action-btn"
                            data-action="edit"
                            data-id="${Number(student.id)}">
                        ✎ Edit
                    </button>

                    <button class="action-btn delete"
                            data-action="delete"
                            data-id="${Number(student.id)}">
                        🗑 Delete
                    </button>
                </div>
            </td>
        </tr>
    `).join("");

    empty.hidden = students.length !== 0;
}


// ======================================================
// ADD STUDENT
// ======================================================

document.getElementById("studentForm")
    .addEventListener("submit", async function(event) {
        event.preventDefault();

        const student = {
            name: document.getElementById("name").value.trim(),
            branch: document.getElementById("branch").value,
            year: document.getElementById("year").value,
            mobile: document.getElementById("mobile").value.trim()
        };

        if (student.name.length < 2) {
            showMessage("Student name must contain at least 2 characters.", "error");
            return;
        }

        if (!validateMobile(student.mobile)) {
            showMessage("Enter a valid 10-digit mobile number.", "error");
            return;
        }

        const button = document.getElementById("addSubmitButton");
        button.disabled = true;
        button.textContent = "Saving...";

        try {
            await requestJSON("/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            });

            this.reset();

            await loadStudents();

            showPage("students");
            showMessage("Student added successfully.");

        } catch (error) {
            console.error("Adding student failed:", error);
            showMessage(error.message || "Unable to add student.", "error");

        } finally {
            button.disabled = false;
            button.textContent = "Save Student";
        }
    });


// ======================================================
// OPEN EDIT FORM
// ======================================================

async function editStudent(id) {
    try {
        const student = await requestJSON(`/students/${id}`);

        document.getElementById("editId").value = student.id;
        document.getElementById("editName").value = student.name || "";
        document.getElementById("editBranch").value = student.branch || "";
        document.getElementById("editYear").value = student.year || "";
        document.getElementById("editMobile").value = student.mobile || "";

        showPage("editStudent");

    } catch (error) {
        console.error("Loading student failed:", error);
        showMessage("Unable to load student details.", "error");
    }
}


// ======================================================
// UPDATE STUDENT
// ======================================================

document.getElementById("editStudentForm")
    .addEventListener("submit", async function(event) {
        event.preventDefault();

        const id = document.getElementById("editId").value;

        const student = {
            name: document.getElementById("editName").value.trim(),
            branch: document.getElementById("editBranch").value,
            year: document.getElementById("editYear").value,
            mobile: document.getElementById("editMobile").value.trim()
        };

        if (student.name.length < 2) {
            showMessage("Student name must contain at least 2 characters.", "error");
            return;
        }

        if (!validateMobile(student.mobile)) {
            showMessage("Enter a valid 10-digit mobile number.", "error");
            return;
        }

        const button = document.getElementById("updateSubmitButton");
        button.disabled = true;
        button.textContent = "Updating...";

        try {
            await requestJSON(`/students/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            });

            await loadStudents();

            showPage("students");
            showMessage("Student updated successfully.");

        } catch (error) {
            console.error("Updating student failed:", error);
            showMessage(error.message || "Unable to update student.", "error");

        } finally {
            button.disabled = false;
            button.textContent = "Save Changes";
        }
    });


// ======================================================
// DELETE CONFIRMATION
// ======================================================

function openDeleteDialog(id) {
    const student = allStudents.find(
        item => Number(item.id) === Number(id)
    );

    if (!student) {
        showMessage("Student record not found. Reload the list.", "error");
        return;
    }

    pendingDeleteId = Number(id);

    document.getElementById("deleteDialogText").textContent =
        `Are you sure you want to permanently delete ${student.name} (ID: ${student.id})?`;

    document.getElementById("deleteDialog").showModal();
}


async function confirmDeleteStudent() {
    if (pendingDeleteId === null) {
        return;
    }

    const id = pendingDeleteId;
    const button = document.getElementById("confirmDeleteButton");

    button.disabled = true;
    button.textContent = "Deleting...";

    try {
        const response = await fetch(`/students/${id}`, {
            method: "DELETE"
        });

        const message = await response.text();

        if (!response.ok || message.includes("Not Found")) {
            throw new Error(message || "Unable to delete student.");
        }

        document.getElementById("deleteDialog").close();
        pendingDeleteId = null;

        await loadStudents();

        showMessage("Student deleted successfully.");

    } catch (error) {
        console.error("Deleting student failed:", error);
        showMessage(error.message || "Unable to delete student.", "error");

    } finally {
        button.disabled = false;
        button.textContent = "Delete Student";
    }
}


// ======================================================
// EVENT LISTENERS
// ======================================================

// Sidebar navigation
document.querySelectorAll(".nav-link").forEach(button => {
    button.addEventListener("click", () => {
        showPage(button.dataset.page);
    });
});

// Add Student buttons
document.getElementById("topAddButton")
    .addEventListener("click", () => showPage("addStudent"));

// View All Students
document.getElementById("viewAllButton")
    .addEventListener("click", () => showPage("students"));

// Dashboard refresh
document.getElementById("refreshButton")
    .addEventListener("click", () => loadStudents(true));

// Table refresh
document.getElementById("tableRefreshButton")
    .addEventListener("click", () => loadStudents(true));

// Search
document.getElementById("searchInput")
    .addEventListener("input", renderStudentTable);

// Filters
document.getElementById("branchFilter")
    .addEventListener("change", renderStudentTable);

document.getElementById("yearFilter")
    .addEventListener("change", renderStudentTable);

// Clear search and filters
document.getElementById("clearFiltersButton")
    .addEventListener("click", () => {
        document.getElementById("searchInput").value = "";
        document.getElementById("branchFilter").value = "";
        document.getElementById("yearFilter").value = "";
        renderStudentTable();
    });

// Table action buttons
document.getElementById("studentsTableBody")
    .addEventListener("click", event => {
        const button = event.target.closest("button[data-action]");

        if (!button) {
            return;
        }

        const id = Number(button.dataset.id);

        if (!Number.isInteger(id) || id <= 0) {
            return;
        }

        if (button.dataset.action === "edit") {
            editStudent(id);
        }

        if (button.dataset.action === "delete") {
            openDeleteDialog(id);
        }
    });

// Cancel edit
document.getElementById("cancelEditButton")
    .addEventListener("click", () => {
        document.getElementById("editStudentForm").reset();
        showPage("students");
    });

// Delete dialog
document.getElementById("cancelDeleteButton")
    .addEventListener("click", () => {
        document.getElementById("deleteDialog").close();
        pendingDeleteId = null;
    });

document.getElementById("confirmDeleteButton")
    .addEventListener("click", confirmDeleteStudent);

// Mobile sidebar
document.getElementById("mobileMenu")
    .addEventListener("click", () => {
        document.getElementById("sidebar").classList.toggle("open");
    });


// ======================================================
// INITIALIZE APPLICATION
// ======================================================

showPage("dashboard");
loadStudents();

