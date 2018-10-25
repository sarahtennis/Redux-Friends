import React from 'react';

class NewFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    changeHandler = event => {
        if (event.target.name === 'age') {
            this.setState({
                [event.target.name]: Number(event.target.value)
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    };

    submitHandler = event => {
        event.preventDefault();
        if (this.state.name && this.state.age && this.state.email) {
            console.log(this.state.name, this.state.age, this.state.email);
            this.setState({
                name: '',
                age: '',
                email: ''
            })
        }
    };

    render() {
        return (
            <form className="new-friend-form" onSubmit={this.submitHandler}>
                <input type="text" name="name" id="name" placeholder="Name" onChange={this.changeHandler} value={this.state.name} />
                <input type="number" name="age" id="age" placeholder="Age" onChange={this.changeHandler} value={this.state.age} />
                <input type="email" name="email" id="email" placeholder="Email" onChange={this.changeHandler} value={this.state.email} />
                <button type="submit">Add new friend</button>
            </form>
        )
    };
}

export default NewFriendForm;