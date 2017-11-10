import React, {Component} from 'react';
import styled from 'styled-components';

class Modal extends Component {
    render(){
        const { children, onClose, index }= this.props;
        let i = index;
        if(index > 11) {
            i= 1;
        }
        return (
            <div
                className="poptrox-overlay" 
                style={
                    {
                        position: 'fixed',
                        left: '0px', 
                        top: '0px',
                        zIndex: '20000',
                        width: '100%',
                        height: '100%', 
                        textAlign: 'center',
                        cursor: 'pointer',
                        display: 'block',
                        opacity: '1'
                    }
                }
            >
            <div style={{
                display:'inline-block',
                height:'100%',
                verticalAlign:'middle'
            }}/>
            <div style={{
                display:'inline-block',
                height:'100%',
                verticalAlign: 'middle'
            }}/>
            <div 
                style={
                    {
                        position:'absolute',
                        left:'0',
                        top:'0',
                        width:'100%',
                        height:'100%',
                        background:'#000000',
                        opacity:'0',
                        filter: 'alpha(opacity=0)'
                    }
                }
            />
            <div
                className="poptrox-popup" 
                style={
                    {
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        position: 'relative',
                        zIndex: '1',
                        cursor: 'pointer',
                        minWidth: '150px',
                        minHeight: '150px',
                        width: 'auto', 
                        height: 'auto'
                    }
                }
            >
                <div className="loader" style={{display: 'none'}}/>
                <div className="pic" style={{display: 'block', textIndent: '0px'}}>
                    <img src={`images/fulls/${i}.jpg`} alt="" style={{
                        verticalAlign: 'bottom', 
                        maxWidth: '808px',
                        maxHeight: '883px'
                    }}/>
                </div>
                <div className="caption" style={{
                    display: 'block'
                }}>
                    {children}
                </div>
                <span 
                    className="closer" 
                    onClick={() => onClose()}
                    style={{
                        cursor: 'pointer',
                        display: 'block'
                    }}
                />
            </div>
        </div>
        );
    }
}

export default Modal;
