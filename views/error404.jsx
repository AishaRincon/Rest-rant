const React = require('react');
const Default = require('./default');

function error404() {
    return (
      <Default>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
              <img src="/images/404Flamingo.jpg" alt="Flamingo Floatie Error Image" />
              </div>
              <div>
                  Photo by<a href="AUTHOR_LINK">Vicko Mozara</a> on <a href="https://unsplash.com/s/photos/beach">Unsplash</a>
                </div>
          </main>
      </Default>
    )
  }  

module.exports = error404
