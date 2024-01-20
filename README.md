# Repo-Finder
This is a basic html, css and javascript based project whose main aim is to fetch the data related to Github Account of a user and display it on our own website.
# Getting Started :

Follow the steps listed below to run the project on your local machine :

<h2> 1. Clone the repository to your local machine </h2>
   - Use the command - git clone https://github.com/shresthsen000/Repo-Finder to clone the repository to your own device.
<h2>2. Navigate to the project folder </h2>
   - Use the command - cd Repo-Finder to get into the project folder.
<h2>3. Open the index.html file </h2>
 - Using either Live Server extension(if you are on VS-Code) or by just clicking the index.html file, open the file in your preferred browser.

  <br>
  <br>
<h1>Project Structure</h1>
- index.html: The main HTML file.
- style.css: Contains the project's styles.
- script.js: Includes the JavaScript code for dynamic functionality.
<br>
<br>
<h1>GitHub API: Display User Repositories</h1>
This guide explains how to display GitHub repositories for a specific user using the GitHub API.

Prerequisites
1. A GitHub account
2. Basic understanding of REST APIs
3. An HTTP client (like curl or Postman)
# Steps
1. Get the GitHub API Endpoint:

The endpoint to fetch repositories of a user is:
https://api.github.com/users/{username}/repos

2. Replace {username}:

Replace {username} with the GitHub username of the user.

3. Make the API Request:

Use your HTTP client to send a GET request to the modified endpoint.
Example using curl:
curl https://api.github.com/users/{username}/repos

4. Handle the Response:

The response is a JSON array of repositories.
Each repository object contains details like name, description, language, etc.

5. Display the Repositories:

Iterate over the response to display the repositories.
Note
For unauthenticated requests, the rate limit allows for up to 60 requests per hour.
For higher rate limits, authenticate using a personal access token.
# Example
curl https://api.github.com/users/octocat/repos
This fetches repositories of the user 'octocat'.
