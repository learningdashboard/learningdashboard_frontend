import React from 'react'
import CustomNavbar from './CustomNavbar'
import ViewContainer from './ViewContainer'
import HomeView from '../viewcomponents/HomeView'
import './Layout.css'

export default class Layout extends React.Component{
    
    viewSelector(view){
        if(view == "home"){
            return <HomeView></HomeView>
        } else {
            return <div></div>
        }
        
    }

    render(){
        console.log(this.props.view)
        return(
            <div className = "d-flex flex-column vh-100">
                <CustomNavbar></CustomNavbar>
                <ViewContainer>
                    {this.viewSelector(this.props.view)}
                </ViewContainer>
            </div>
        
        )
    }s
}
