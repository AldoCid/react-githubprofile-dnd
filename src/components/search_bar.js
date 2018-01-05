import React,{ Component } from "react";



export default class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    
    render(){
        const not_found = this.props.user_found ? "" : "User not Found"  

        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className="input-group mb-3">
                        <input
                            placeholder="Search by user's login"
                            className="form-control"
                            value={this.state.value}
                            onChange={(event) => {this.onSearchChange(event.target.value)}}
                        />
                        <div className="input-group-append" >
                            <button type="submit"  className="btn btn-outline-secondary">Search</button>
                        </div>
                    </div>
                </form>
                <label className="not-found-msg">{not_found}</label>
            </div>
        )
    }
    
    handleSubmit(event){
        this.props.onSearch(this.state.value)
        event.preventDefault();
        this.setState({value: ''})
    }

    onSearchChange(value){
        this.setState({value: value})
    }

   
}