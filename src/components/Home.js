import React, {Component} from 'react';
import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Axios from 'axios';
import Details from './Details';
import Create from './Create';
import CulturaChupistica from './CulturaChupistica';

const Wrapper = styled.main`
    -moz-filter: ${props => props.blurFocus ? 'blur(8px)': 'none'};
    -webkit-filter: ${props => props.blurFocus ? 'blur(8px)': 'none'};
    -ms-filter: ${props => props.blurFocus ? 'blur(8px)': 'none'};
    filter: ${props => props.blurFocus ? 'blur(8px)': 'none'};
`;

const FloatBox = styled.div`
    position: fixed;
    top: 10px;
    right: 0;
    background: red;
    width: 60px;
    height: 60px;
    cursor: pointer;
    background: url("images/AddIcon.png");
    background-size: 60px;
`;

const LogoutBox = styled.div`
    position: fixed;
    top: 70px;
    right: 0;
    background: red;
    width: 60px;
    height: 60px;
    cursor: pointer;
    background: url("images/LOGOUT.ico");
    background-size: 60px;
`;

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            details: false,
            index: 1,
            event: {},
            create: false,
            uid: localStorage.getItem("uid"),
            owner: localStorage.getItem("owner"),
            tokenId: localStorage.getItem("tokenId"),
            game: '',
            events: []
        };
        this.fetchEventsFromServer = this.fetchEventsFromServer.bind(this);
    }

    fetchEventsFromServer() {
        const selfThis = this;
        const { tokenId } = this.state;
        Axios.get(
            'http://localhost:4000/events',
            {
                headers: {
                    "authorization" : tokenId
                }
            }
        )
        .then(function (response) {
            selfThis.setState({
                events: response.data
            });
        })
        .catch(error => console.log(error));
    }
    
    showSettings (event) {
        event.preventDefault();
    }

    logout() {
		localStorage.clear();
		window.location.replace("/login");
    }

    showEventDetails({ event, i}){
        this.setState({ details: true, event})
    }

    getEvents({event, index}) {
        let i = index + 1;
        if(i > 10) {
            i=1;
        }
        return (
                <article 
                    className="thumb"
                    key={event.id}
                >
                    <a
                        href={`images/fulls/${i}.jpg`} 
                        className="image"
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            if(event.type === 'GAME'){
                                this.setState({
                                    game: event.gameCode
                                });
                            } else {
                                this.showEventDetails({e, event, i});
                            }
                        }}
                        style={{
                            backgroundImage: `url(images/thumbs/${i}.jpg`
                        }}
                    >
                        <img 
                            src={''}
                            alt=""
                        />
                     </a>
                    <h2>{event.name}</h2>
                    <p>{event.description}</p>
                </article>);
    }

    fetchEvents() {
       return [{
           id:1254545,
            name: 'Leo vs Damian',
            type: 'VERSUS',
            canChangeVote: false,
            displayVotes: true,
            date: 1510324270,
            votes: [{ user: 'matias.sagasti@appdirect.com', vote: [{key: 'LEO'}] }],
            score: [{key:'LEO', votes: 1}, { key: 'DAMIAN', votes: 0}]
        }, {
            id:24443,
            name: 'Damian vs Andres',
            type: 'VERSUS',
            canChangeVote: false,
            displayVotes: true,
            date: 1510324270,
            votes: [
                        { user: 'matias.sagasti@appdirect.com', vote: [{ key: 'DAMIAN' }]},
                        { user: 'agustion.salesi@appdirect.com', vote:[{ key: 'DAMIAN' }]},
                        { user: 'sebastian.bogado@appdirect.com', vote: [{ key: 'DAMIAN' }]},
                        { user: 'mauro.alvarez@appdirect.com', vote: [{ key: 'ANDRES' }]}
                ],
            score: [{key:'DAMIAN', votes: 3}, {key: 'ANDRES', votes: 1}]
        },
        {
            id:34444,
            name: 'Damian vs Jorge',
            type: 'VERSUS',
            canChangeVote: false,
            displayVotes: true,
            date: 1510324270,
            votes: [{ user: 'matias.sagasti@appdirect.com', vote: [{key: 'JORGE'}] }],
            score: [{key:'DAMIAN', votes: 0}, { key: 'JORGE', votes: 1}]
        },
        {
            id:4544,
            name: 'Peru vs Nueva Zelanda (IDA)',
            type: 'SCORE',
            canChangeVote: false,
            displayVotes: true,
            date: 1510324270,
            votes: [{ user: 'matias.sagasti@appdirect.com', vote: [{ key: 'PERU', value: '1'},{ key: 'NZA', value: '0'}]}],
            score: [{key:'PERU'}, { key: 'NZA'}]
        },
        {
            id:568444,
            name: 'Peru vs Nueva Zelanda (VUELTA)',
            type: 'SCORE',
            canChangeVote: false,
            displayVotes: true,
            date: 1510324270,
            votes: [{ user: 'matias.sagasti@appdirect.com', vote: [{ key: 'PERU', value: '3'},{ key: 'NZA', value: '0'}]}],
            score: [{key:'PERU'}, { key: 'NZA'}]
        }
    ];
    }

    getGames(){
        return [
            {
                id:366363,
                name: 'Cultura Chupistica',
                gameCode: 'CULTURA_CHUPISTICA',
                type: 'GAME'
            }
        ];
    }

    componentWillMount() { 
        this.fetchEventsFromServer();
    }

    render() {
        if (!this.state.uid) {
            window.location = '/login';
            return null;
        }
        const events = [...this.state.events.filter(event => event.name !== undefined), ...this.getGames()];
        return (
            <div>
            <Drawer open={this.state.isOpen}
                onMouseLeave={() => this.setState({ isOpen: true})}
            >
                <MenuItem>Home</MenuItem>
                <MenuItem onClick={ () => this.logout() }>Logout</MenuItem>
            </Drawer>
            <Wrapper id="wrapper" blurFocus={this.state.details || this.state.create}>
                <div id="main">
                    {
                        events.map((event, index) => this.getEvents({event, index}))
                    }
				</div>
            </Wrapper>
            {this.state.details 
            && <Details 
                    event={this.state.event} 
                    index={this.state.index}
                    onClose={() => this.setState({ details: false, event: {} })}
                />
            }
            {
                this.state.create
                &&  
                <Create
                    index={4}
                    onClose={() => this.setState({ create: false })}
                />

            }
            {
                this.state.game === 'CULTURA_CHUPISTICA' && 
                <CulturaChupistica 
                    onClose={() => this.setState({ game: '' })}   
                />
            }
            <FloatBox  
                onClick={()=> this.setState({create:true})}
            />
            <LogoutBox  
                onClick={()=> this.logout()}
            />
        </div>
        );
    }
}

export default Home;
