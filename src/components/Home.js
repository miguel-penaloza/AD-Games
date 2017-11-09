import React, {Component} from 'react';
import { bubble as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const Header = styled.div`
    h1 {
        margin-top: 0;

    }
`;

const Poptrox = styled.div`
    position: fixed;
    left: 0px; 
    top: 0px;
    z-index: 20000;
    width: 100%;
    height: 100%; 
    text-align: center; 
    cursor: pointer; 
    display: block;
    opacity: 1;
`;

class MenuWrap extends Component {
    constructor (props) {
      super(props);
      this.state = {
        hidden: false
      };
    }
  
    componentWillReceiveProps(nextProps) {
      const sideChanged = this.props.children.props.right !== nextProps.children.props.right;
  
      if (sideChanged) {
        this.setState({hidden : true});
  
        setTimeout(() => {
          this.show();
        }, this.props.wait);
      }
    }
  
    show() {
      this.setState({hidden : false});
    }
  
    render() {
      let style;
  
      if (this.state.hidden) {
        style = {display: 'none'};
      }
  
      return (
        <div style={style} className={this.props.side}>
          {this.props.children}
        </div>
      );
    }
}  

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            details: false,
            index: 1,
            event: {},
            uid: localStorage.getItem("uid"),
            owner: localStorage.getItem("owner")
        }
    }
    
    showSettings (event) {
        event.preventDefault();
    }

    logout() {
		localStorage.clear();
		window.location.replace("/login");
    }

    showEdition(){
        const { event, index } = this.state;
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
                                        <h2>{event.name}</h2>
                                        <p></p>
                                    </div>
                                    <span 
                                    className="closer" 
                                    onClick={() => this.setState({ deatils: false})}
                                    style={{
                                        cursor: 'pointer',
                                        display: 'block'
                                    }}/>
                                    <div className="nav-previous" style={
                                        {
                                            display: 'block'
                                        }
                                    }/>
                                    <div className="nav-next"style={
                                        {
                                            display: 'block'
                                        }}
                                    /> 
                                </div>
                </div>
                );
    }

    showEventDetails({e, event, i}){
        e.stopPropagation();
        e.preventDefault();
        this.setState({ details: true, event})
    }

    getEvents({event, index}) {
        const i = index + 1;
        return (
                <article 
                    className="thumb"
                    key={event.id}
                >
                    <a
                        href={`images/fulls/${i}.jpg`} 
                        className="image"
                        onClick={(e) => this.showEventDetails({e, event, i})}
                    >
                        <img 
                            src={`images/thumbs/${i}.jpg`}
                            alt=""
                        />
                     </a>
                        <h2>{event.name}</h2>
                    <p>{event.description}</p>
                </article>);
    }

    fetchEvents() {
       return [{
           id:12,
            name: 'Leo vs Damian',
            type: 'BOXEO',
            canChangeVote: false,
            votes: [{ user: 'matias.sagasti@appdirect.com', vote: 'LEO' }],
            score: [{key:'LEO', votes: 2, key: 'Damian', votes: 0}]
        }, {
            id:23,
            name: 'Damian vs Andres',
            type: 'BOXEO',
            canChangeVote: false,
            votes: [{ user: 'matias.sagasti@appdirect.com', vote: 'DAMIAN' }],
            score: [{key:'DAMIAN', votes: 2, key: 'Damian', votes: 0}]
        },
        {
            id:34,
            name: 'Damian vs Jorge',
            type: 'BOXEO',
            canChangeVote: false,
            votes: [{ user: 'matias.sagasti@appdirect.com', vote: 'DAMIAN' }],
            score: [{key:'DAMIAN', votes: 2, key: 'JORGE', votes: 0}]
        },
        {
            id:45,
            name: 'Peru vs Nueva Zelanda (IDA)',
            type: 'BOXEO',
            canChangeVote: false,
            votes: [{ user: 'matias.sagasti@appdirect.com', vote: 'PERU' }],
            score: [{key:'PERU', votes: 2, key: 'NZA', votes: 0}]
        },
        {
            id:568,
            name: 'Peru vs Nueva Zelanda (VUELTA)',
            type: 'BOXEO',
            canChangeVote: false,
            votes: [{ user: 'matias.sagasti@appdirect.com', vote: 'PERU' }],
            score: [{key:'PERU', votes: 2, key: 'NZA', votes: 0}]
        }
    ];
    }

    render() {
        if (!this.state.uid) {
            window.location = '/login';
            return null;
        }
        const events = this.fetchEvents();
        return (
            <div>
            <Drawer open={this.state.isOpen}
                onMouseLeave={() => this.setState({ isOpen: true})}
            >
                <MenuItem>Home</MenuItem>
                <MenuItem onClick={ () => this.logout() }>Logout</MenuItem>
            </Drawer>
            <main id="wrapper">
            <div id="main">
                        {
                            events.map((event, index) => this.getEvents({event, index}))
                        }
					</div>
               {/*  <Header>
                    <h1>Welcome to the AD-Games!</h1>
                </Header>
                <div>
                    <RaisedButton
                        label="Toggle Drawer"
                        onClick={() => this.setState({ isOpen: true})}
                    />
                </div> */}
            </main>
            {this.state.details && this.showEdition()}
        </div>
        );
    }
}

export default Home;
