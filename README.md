![Screen Shot 2022-12-22 at 16 08 22](https://user-images.githubusercontent.com/94097592/209117239-7ff3e05e-f027-4a47-97bd-5b2c51655e0a.png)
![Screen Shot 2022-12-22 at 16 09 17](https://user-images.githubusercontent.com/94097592/209117252-9bb3ccb9-27db-4dff-b377-e6982942f897.png)
![Screen Shot 2022-12-22 at 16 09 38](https://user-images.githubusercontent.com/94097592/209117254-fcc13fc3-7138-4f49-a935-430f58769088.png)
![Screen Shot 2022-12-22 at 16 10 27](https://user-images.githubusercontent.com/94097592/209117263-561db3cc-2351-438b-8c0c-c4e89c4df8f3.png)
# Getting Started with Create React App

  
  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{ margin: "0.5rem" }}
      >
        Back
      </Button>
      <Typography>🔹🔹🔹</Typography>
      {/* <Typography></Typography> */}
      <div style={DetailsBacground}>
        <h1>THE 🎞️MOVIE-FI APP</h1>
        <h2>Idea behind the project 💻</h2>
        <p>
          I decided to create this project because I thought it would represent
          everything I have learnt in these ReactJs Concepts in past 5 weeks in
          this JavaScript Frontend library. This project showcases what I have
          learnt about React from simple reusable components to using APIs.
        </p>
        <br />
        <h2>🔗 API Reference</h2>
        <p>
          The API used for this project is called OMDB -{" "}
          <a
            href="https://www.omdbapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ( The Open Movie Database API )
          </a>{" "}
          which I have found by having an extensive search on Google. The
          documentation for the OMDB API can be found{" "}
          <a
            href="https://www.omdbapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
        </p>
        <br />
        <h2>How does it work ❔</h2>
        <p>
          The functionality of the app is simple. The app provides users with
          information about the movies and All by searching. It does this by
          gathering the required information from the OMDB API and returning a
          Movie-card list upcoming and popular movies as well as their artwork
          with short descriptions.
        </p>
        <p>
          This app can also take user input in a form of Search and return a
          specific movie series, Games data the user has searched for. For ease
          of use we have even included a "Back to Top" button which can take the
          user back to the top of the page no matter how far they have scrolled.
        </p>
        <p>
          There is also the functionality to "Show All" if the user wants to
          return to the initial list of movies in the Homepage which will clear
          the search and will showcase the original listing.
        </p>
        <p>
          Potentially the most eye-catching element on the page is the Add
          Favorite One which was implemented using a Add Favorite and Bookmark
          By Browser Local Storage. . The bookmark button to show the Favorite
          movies on the Home Page possibility to use the arrows to either go
          right or left to scroll through the movie detail page.
        </p>
        <p>
          The users can also click on the movies which will take them to an
          overview page of the movie which will list a short overview of the
          plot, the release date, budget, revenue, rating as well as the list of
          actors.
        </p>
        <br />
        <h2>🧑🏻‍💻Technologies</h2>
        <p>
          The languages as well as libraries that we have used for this project
          are as follows:
          <ul>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Material UI</li>
            <li>Axios </li>
            <li>React Router - DOM</li>
            <li>CSS3</li>
            <li>HTML5</li>
          </ul>
          <ol>
            <span>Resources: </span>
            <h4>R&D</h4>
            <li>Google Chromium & Mozilla FireFox</li>
            <li>Google.com</li>
            <li>MUI.com</li>
            <li>Pexels.com</li>
          </ol>
        </p>
        <br />
        <h2>💻What is the Setup?⚙️</h2>
        <p>
          To start working on a project, you will need to create a new React app
          through the terminal by using <code>npm</code> (or you can also use{" "}
          <code>yarn</code>):
        </p>
        <code>
          npx create-react-app my-app <br />
          cd my-app <br />
          npm start <br />
        </code>
        <br />
        <p>
          There are a few dependencies that need to be set up in order for this
          to work. The first one is Material UI:
        </p>
        <code> 📐npm install @mui/material @emotion/react @emotion/styled</code>
        <br />
        <br />
        <p>
          How and which components and styles from MUI you include is completely
          up to you. You can find more information on how to get set up and
          start using all the components from MUI.com{" "}
          <a
            href="https://mui.com/material-ui/getting-started/overview/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          Another thing that needs to be installed is React Router, which is a
          smart and simple routing utility:{" "}
        </p>
        <code>📐npm install -- npm i react-router-dom</code>
        <br />
        <br />
        <p>
          More information on how to utilise React Router and find the tutorials
          can be found{" "}
          <a
            href="https://www.npmjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          Another component that needs to be installed is the "Back to Top"
          button:{" "}
        </p>
        <code>📐npm install react-back-to-top-button</code>
        <br />
        <br />
        Ⓜ️ More information can be found -
        <a
          href="https://www.npmjs.com/package/react-back-to-top-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          -- here
        </a>
        .
        <p>
          As it was mentioned before, another component that would need to be
          installed is the Carousel:
        </p>
        <code>📐 npm i @brainhubeu/react-carousel</code>
        <br />
        <br />
        <h2>If you would like to contribute:🤝🏻</h2>
        <p>
          <ul>
            <li>
              Step 1: You can clone the movie-fi app repo from My GitHub to your
              local machine using this 👇🏻
              <a href="" target="_blank" rel="noopener noreferrer">
                link
              </a>
            </li>
            <li>
              Step 2: Use all your amazing skills to make the changes to your
              liking 👍🏻
            </li>
            <li>
              Step 3: Create a new pull request using this 🤝🏻{" "}
              <a
                href="https://github.com/shaikhmd007"
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
            </li>
          </ul>
        </p>
        <br />
        <p>
          <h2>Credits 🤝🏻</h2>
          We would like to say thank you to our amazing Geekster coach and
          Educator Aayush Sinha Sir who has provided his help and immense
          support as well a huge "Thank You" to our teammates in the Geekster.
        </p>
        {/* <Routes>
        <Route path="/about" element={<About />} />
      </Routes> */}
        {/* <Routes>
          <Route path="/home" element={<Home />} />
        </Routes> */}
        <Footer />
      </div>
    </>
  );
};

export default About;
