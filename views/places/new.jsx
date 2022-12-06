const React = require('react')
const Default = require('../default')

function new_form () {
    return (
        <Default>
            <main>
                <h1> Add a new place</h1>
                <form method='POST' action="/places">
                    <div>
                        <label htmlfor="name"> Place Name</label>
                        <input id="name" name="name" required/>
                    </div>
                    <div>
                        <label htmlFor="pic">Place Picture</label>
                        <input type="url" id="pic" name="pic" />
                    </div>
                    <div>
                        <label htmlfor="city"> Place City</label>
                        <input id="city" name="city" />
                    </div>
                    <div>
                        <label htmlfor="state"> Place State</label>
                        <input id="state" name="state" />
                    </div>
                    <div>
                        <label htmlfor="cuisiness"> Place Name</label>
                        <input id="cusiness" name="cusiness" required/>
                    </div>
                    <input type ="submit" value="Add Place" />
                </form>
            </main>
        </Default>
    )
}

module.exports = new_form
