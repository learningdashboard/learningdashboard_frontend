import React from 'react'


export default class ViewContainer extends React.Component{


    render(){
        return(
            <div className='flex-grow-1'>
                {this.props.children}
            </div>
        )
    }
}
