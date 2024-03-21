# CSV-Upload 

##  Description

This project is a CSV file upload and display application that allows users to upload CSV files, view a list of uploaded files, and display the data from selected files in a table on the frontend. Users can search within the displayed data, sort columns, and potentially paginate the results. This project built using Nodejs, Ejs , CSS , JavaScript.It is responsive across all devices.

## Features :

- User can upload any csv file into the system - using Multer JS
- Display a list of all uploaded csv files
- When the user selects a file, it displays all the data (with column headers) in a table on the page (front end)
- There is a search box which searches on the front end itself and displays the matching rows of the table only (empty search box displays all the data).
- There is a sorting button (ascending and descending) for each column on the front end
- There is a validation on the front end and server side on being able to upload only csv type of files
- There is a pagination of the data displayed in the table to a max of 100 records per page
  <br/>
  <br/>

## Project Setup :

1. Clone the Repository:

```bash
   git clone https://github.com/bharatlal124/CSV-Upload_Project
   cd CSV-Upload_Project
```

2. Install Dependencies:
   **npm install**

3. Set environment variables:

- Create a `.env` file in the root directory with the following variables (e.g., `uat.env` for UAT environment):
- `DB_URL` : mongoDbURL
- `SECRET` : yoursecretkey

4. Start the Server:
   **node index.js**

5. Server running at:
   **http://localhost:3000**

## Deployment Link :

- https://csv-upload-project-ft3i.onrender.com

## Technlogies Used :

- Node Js <br/>
- Express Js <br/>
- express-ejs-layouts <br/>
- dotenv<br/>
- ejs<br/>
- express<br/>
- mongoose<br/>
- nodemon<br/>
- express-session<br/>
- multer <br/>
- papaparse <br/>
- connect-flash <br />
  <br/>

## 💻 Project Images :

- Home
  ![Home Page](https://github.com/bharatlal124/CSV-Upload_Project/assets/127212425/a193e34b-73d7-4949-bd0a-8fc06ed08d6a)

- Home file uploaded
  ![Home 2](https://github.com/bharatlal124/CSV-Upload_Project/assets/127212425/541d996b-5984-4626-bcc6-311682f6e5a2)

- File data
  ![file](https://github.com/bharatlal124/CSV-Upload_Project/assets/127212425/83b716d2-2c7a-44a4-bb56-ef722a4a6667)

