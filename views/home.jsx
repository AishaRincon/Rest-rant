const React = require('react');
const Default = require('./default');

function home () {
    return (
      <Default>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/rest-rant-img.jpg" alt="Dining out" />
              </div>
                <div>
                  Photo by<a href="AUTHOR_LINK">Jay Wennington</a> on <a href="https://unsplash.com/s/photos/food">Unsplash</a>
                </div>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>
            </main>
      </Default>
    )
  }  

module.exports = home;
