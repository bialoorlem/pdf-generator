const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const PDFDocument = require('pdfkit');
const doc = new PDFDocument;
const pdf = require('html-pdf');





  

const options = { format: 'Letter' };

let feedback = {
    avatar: '',
    name: '',
    location: '',
    profile: '',
    blog: '',
    bio: '',
    repos: '',
    followers: '',
    following: '',
    stars: '',
    // bgColor: '',


};

///Activites 23 and 24 from section 9 for learning how to dynamically generate the HTML onto the website


inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

axios.get(queryUrl).then(function(response){
  const repoNames = response.data.avatar_url;


  feedback.avatar=response.data.avatar_url;
  feedback.name=response.data.login;
  feedback.location=response.data.location;
  feedback.profile=response.data.html_url;
  feedback.blog=response.data.blog;
  feedback.bio=response.data.bio;
  feedback.repos=response.data.public_repos;
  feedback.followers=response.data.followers;
  feedback.following=response.data.following;
  feedback.stars=response.data.starred_url;
//   feedback.bgColor='blue';
  console.log(feedback);

//https://www.npmjs.com/package/html-pdf

//Need to update the data points in let html



let html = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>About Me</title>
  <!--Used Bootstrap Styling-->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous">

  <link rel="stylesheet" href="assets/css/style.css">


</head>

<body>

<!--Header-->

  <header class="row">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h2>Elliot Trejo</h2>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <div class="col-sm-6 ml-5">
            </div>
            <div class="col-sm-1.5 ml-5">
              <li class="navli">
                <a class="nav-link" href="index.html">Home</a>
              </li>
            </div>
            <div class="col-sm-1.5 ml-5">
              <li class="navli">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </div>
            <div class="col-sm-1.5 ml-5">
              <li class="navli">
                <a class="nav-link" href="portfolio.html">Portfolio</a>
              </li>
            </div>
          </ul>
      </nav>
      </div>
  </header>
<!--Body-->
  <div class="container">
    <h1>About Me</h1>
    <p>${feedback.name}</p>
    <img src="${feedback.avatar}">
    <p>${feedback.location}</p>
    <p>${feedback.profile}</p>
    <p>${feedback.blog}</p>
    <p>${feedback.bio}</p>
    <p>${feedback.repos}</p>
    <p>${feedback.followers}</p>
    <p>${feedback.following}</p>
    <p>${feedback.stars}</p>

    <div>
      <hr class="hr">
    </div>
    <div class="row">
      <div class="col-sm-4 ml-5">
        <img src="assets/elliot.jpg" class="img-fluid" alt="Responsive image"></div>
      <div class="col-sm-7"><p>I am a young professional, lover of verbal languages, dogs, tech, and the great outdoors. Growing up in a bilingual
        household, I've always found excitement in learning more verbal languages to communicate with people and help them
        with anything they may need. When I was introduced to programming and their languages, I was just as amazed and desired
        to learn as much as possible. A critical thinker, I enjoy being presented with issues that require a solution. In
        my young developer career, I am ready to provide people with solutions to their problems in business by developing
        useful websites, apps, and more!</p>
      </div>
    </div>
  </div>
  <!--Footer-->
<footer class=“footer”>
   © 2019 Copyrights
 </footer>

</body>


<!--Used Bootstrap Javascript-->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
  crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
  crossorigin="anonymous"></script>

</html>`

pdf.create(html, options).toFile('./file.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});
});


  });


//axios module




 

