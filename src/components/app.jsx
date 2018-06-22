import React,{Component} from 'react'
import {Button,Toast} from 'antd-mobile';
export default class App extends Component{
    clickHnder=()=>{
        Toast.info("123")
    }
    render(){
        return (

        <Button type="danger">Danger</Button>


        )
    }
}
