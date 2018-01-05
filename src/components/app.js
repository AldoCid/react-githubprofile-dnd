import React,{ Component } from "react";
import SearchBar from "./search_bar"
import SortableComponent from "./user_list"
import { arrayMove } from 'react-sortable-hoc' 


import axios from "axios"

const URL = 'https://api.github.com/users/'

export default class App extends Component{
    constructor(){
        super()
        this.state={
            user_list: [],
            user_found: true
        }
        
        this.searchUser = this.searchUser.bind(this)
        this.onSortEnd = this.onSortEnd.bind(this)
    }

    render(){
        return (
            <div className="app-layout">
                <h4>React github profile search</h4>
                <SearchBar onSearch={this.searchUser} user_found={this.state.user_found}/> 
                <SortableComponent items={this.state.user_list} onSortEnd={this.onSortEnd} />
            </div>
        )
    }

    searchUser(value){
        axios.get(`${URL}${value}`)
        .then((r) => {
            console.log(r.data)
            const aux_list = this.state.user_list
            aux_list.push(r.data)
            this.setState({
                user_list: aux_list,
                user_found: true
            })
        })
        .catch((r) => {
            this.setState({user_found: false})
        })
    }
    onSortEnd({oldIndex, newIndex}){
        this.setState({
            user_list: arrayMove(this.state.user_list, oldIndex, newIndex),
        });
    };
}