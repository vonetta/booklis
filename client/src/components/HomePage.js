import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const daysCountDown = () => {
    const today = new Date();
    var newYear = new Date(today.getFullYear(), 11, 31);
    if (today.getMonth() === 11 && today.getDate() > 25) {
      newYear.setFullYear(newYear.getFullYear() + 1);
    }
    var one_day = 1000 * 60 * 60 * 24;

    return (
      Math.ceil((newYear.getTime() - today.getTime()) / one_day) +
      " days left in this challenge!"
    );
  };

  return (
    <div>
      <h2 className="text-center m-4">
        Welcome to {new Date().getFullYear()} Booklist Challenge
      </h2>
      <h4 className="text-center"> {daysCountDown()}</h4>
      <section className="challenge-options">
        <Link to="/teams" className="btn btn-challenge disabled">
          Teams
        </Link>
        <Link to="/sign-up" className="btn btn-challenge">
          Solo
        </Link>
      </section>
      <section className=" m-auto card p-5 w-75">
        <section className="homepage-section">
          <h4 className="homepage-heading">Challenge:</h4>
          <p>To see who can read the most books in one year. </p>
        </section>

        <section className="homepage-section">
          <h4 className="homepage-heading">Rules:</h4>
          <p>Rules are simple:</p>
          <ol>
            <li>
              You can either sign up with a team or ride this challenge out solo
            </li>
            <li>Books have to be 100 pages or more</li>
            <li>Do Not Lie about completion</li>
          </ol>
          <p>
            If you do not like the number of books you finished at the end of
            the year do not beat yourself up. Just try to increase it next year.
          </p>
        </section>
        <section className="homepage-section">
          <h4 className="homepage-heading">Origin:</h4>
          <p>
            The idea of this challenge came as I have been watching a lot of
            successful people interviews. I have been watching interviews of
            people like Warren Buffet, Elon Musk, Oprah, Bill Gates and I
            noticed a key thing that they all had in common. They all read{" "}
            <em>
              <strong>daily</strong>
            </em>{" "}
            and it was an actual habit. Something that they incorporated and
            developed the disiciple to do.
          </p>
        </section>
        <section className="homepage-section">
          <h4 className="homepage-heading">Inspiration:</h4>
          <p>
            To be somewhere you have never been you have to do something you
            have never done. I told myself if I want to be successful I have to
            do what successful people do.
          </p>
          <p>
            One successful way for me (personally) to build a habit is to make
            it a competition. So I started a challenge with some family and
            friends to build a habit of reading more often and not because of
            school or work but in our spare time.
          </p>
          <p>Growing up I have always heard the quote:</p>
          <blockquote className="homepage-quote text-center">
            "If you don’t want them to know something, put it in a book, they’ll
            never read it."
          </blockquote>{" "}
          <p>
            This quote has always kept me on my toes. So I am challenging myself
            and anyone else who wants to join in trying to start keeping a log
            of how many books you read in one calendar year.
          </p>
        </section>
      </section>
    </div>
  );
};

export default HomePage;
