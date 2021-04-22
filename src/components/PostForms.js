import React from 'react'

export default class PostForms extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            title: ''
        };

        }

        submitHandler = event => {
            event.preventDefault();
        }

        changeInputHandler = event => {
            event.persist()
            this.setState(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }}))
        }


        render() {
            return (
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="title">Title of Post</label>
                        <input type="text" class="form-control" id="title" value={this.state.title} name="title" onChange={this.changeInputHandler}></input>
                    </div>
                   <button className="btn btn-success" type="submit">Add</button>
                </form>
            )
    }
}
