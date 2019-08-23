import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-center m-4">
        Welcome to {new Date().getFullYear()} Booklist Challenge
      </h2>
      <section className="challenge-options">
        <Link to="/teams" className="btn btn-challenge">
          Teams
        </Link>
        <Link to="/solo" className="btn btn-challenge">
          Solo
        </Link>
      </section>
      <section className=" m-auto card p-5 w-75">
        <section className="homepage-section">
          <h4 className="homepage-heading">Challenge:</h4>
          <p>
            The Booklist Challenge is a challenge to see who can read 10 or more
            books in one year.{" "}
          </p>
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
            If you do not complete 10 books dont beat yourself up. Just try to
            increase it next year.
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
            So I told myself if I want to be successful I have to do what
            successful people do: So I started a challenge with my some family
            and friends to kind of motivate us to start reading and making it a
            habit. Growing up I have always heard the quote:
          </p>
          <blockquote className="homepage-quote text-center">
            "If you don’t want them to know something, put it in a book, they’ll
            never read it."
          </blockquote>{" "}
          <p>
            This quote has always made me. So I am challenge myself and anyone
            else who wants to join in trying to read a minimum of 10 books in
            one calendar year.
          </p>
        </section>
      </section>
    </div>
  );
};

export default HomePage;
