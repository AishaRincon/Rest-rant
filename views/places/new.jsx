const React = require('react')
const Default = require('../default')

function new_form () {
    return (
        <Default>
            <main>
                <h1> Add a new place</h1>
                <form method='POST' action="/places">
                    <div className="form-group">
                        <label htmlfor="name"> Place Name</label>
                        <input className="form-control" id="name" name="name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlfor="city"> Place City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlfor="state"> Place State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlfor="cuisiness"> Place Name</label>
                        <input className="form-control" id="cusiness" name="cusiness" required/>
                    </div>
                    <input className="btn btn-primary" type ="submit" value="Add Place" />
                </form>
            </main>
        </Default>
    )
}

module.exports = new_form
