// Manager template for HTML document
const manager = managerData => {
    return `
    <div class="col">
    <div class="card">
        <div class="card-header bg-primary bg-gradient text-light">
            <h5 class="card-title">${managerData.getName()}</h5>
            <h6 class="card-title">${managerData.getRole()}</h6>
        </div>
        <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${managerData.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
        </ul>
        </div>
    </div>
    </div>
`
}
       
// Engineer template for HTML document
const engineer = engineerData => {
    return `
    <div class="col">
    <div class="card">
        <div class="card-header bg-primary bg-gradient text-light ">
            <h5 class="card-title">${engineerData.getName()}</h5>
            <h6 class="card-title">${engineerData.getRole()}</h6>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineerData.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
                <li class="list-group-item">GitHub: 
                <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
`
}

// Intern template for HTML document
const intern = internData => {
    return `
    <div class="col">
    <div class="card">
        <div class="card-header bg-primary bg-gradient text-light">
            <h5 class="card-title">${internData.getName()}</h5>
            <h6 class="card-title">${internData.getRole()}</h6>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${internData.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
                <li class="list-group-item">School: ${internData.getSchool()}</li>
            </ul>
        </div>
    </div>
    </div>
`
}

// For loop to help organize different team members with correct data onto the same page
const employeeCards = employees => {
    console.log(employees)
    let completedHtml = '';

    for ( i = 0; i < employees.length; i++ ) {
        // adds manager html section to page
        if (employees[i].getRole() === 'Manager') {
            completedHtml = completedHtml + manager(employees[i]);
        }
        // adds engineer html section to page
        if (employees[i].getRole() === 'Engineer') {
            completedHtml = completedHtml + engineer(employees[i]);
        }
        // adds intern html section to page
        if(employees[i].getRole() === 'Intern') {
            completedHtml = completedHtml + intern(employees[i]);
        }
    }
    return completedHtml;
}

// Main template for HTML document
const htmlTemplate = data => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
</head>
<body>
    <header class="bg-dark bg-gradient text-light p-5 text-center mb-5">
        <h1>My Team</h1>
    </header>

    <section class="container d-flex justify-content-center align-items-center align-content-center flex-wrap">
    <div class="row row-cols-1 row-cols-md-3 g-4">
    ${employeeCards(data)}
    </div>
    </section>
       
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>
`
}

module.exports = htmlTemplate;