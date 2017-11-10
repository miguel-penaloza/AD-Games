import React, {Component} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Button = styled.button`
    margin-top: 5px;
    margin-bottom: 15px;
`;

const Toolbar = styled.div`
    margin-bottom: 15px;
    text-align: center;
`;

class CulturaChupistica extends Component {
    constructor (props){
        super(props);
        this.state ={
            culture: ''
        };
    }

    getItems(){
        return [
            'Car Brands',
            'Argentinan Fulbol teams',
            'Canadian Futbol teams',
            'Bear Brands',
            'Capitals of Countries',
            'Countries of Latin America',
            'Condoms brands',
            'Sex Positions',
            'Oscar Movies winners',
            'Body parts',
            'Body parts that grow up',
            'Name of the fingers of the hand',
            'Simpson characters',
            'Dogs breeds',
            'Female names that do not start with a',
            'Sports that need a ball',
            'name of Drinks',
            'Fried foods',
            'Color of the traffic lights',
            'Animals without hair',
            'Biblic Names',
            'Fruit names',
            'Planets',
            'Cellphones brands',
            'Operating systems',
            'Zodiac',
            'Presidents names',
            'Things that you can make with your mouth',
            'Consoles',
            'Flavours',
            'Musicians instruments',
            'Sports that do not need a ball',
            'Leonardo Di Caprio movies',
            'Soccer players',
            'Baseball teams',
            'No primary colors',
            'vacations places',
            'Progamming Languages',
            'Appdirect Offices',
            'Appdirect Company Types',
            'Laptops Brands',
            'Google apps',
            'Android OS',
            'Harry Potter characters',
            'Supernatural charcaters',
            'Agile words',
            'No Programed oriented languages',
            'Appdirect members',
            'Appdirect QAs',
            'Primary colors',
            'Rock bands',
            'Cumbia bands',
            'Design Patterns',
            'Disney characters',
            'TV brands',
            'Cigarrete brands',
            'Futbol players',
            'NBA teams',
            'Guillermo del toro movies',
            'Brad Pitt movies',
            'Javascript Frameworks',
            'IDEs',
            'Europe Contries',
            'Europe Cities',
            'Asia Countries',
            'Months',
            'Days'
        ];
    }

    setCultura(){
        const culturas = this.getItems();
        const culture = culturas[Math.floor(Math.random()*culturas.length)]
        this.setState({
            culture
        });
    }
    render(){
        const { onClose } = this.props;
        return (
            <Modal
                onClose={() => onClose()}
                index={3}
            >
                <h2>Cultura Chupistica</h2>
                <p>
                    Find a group of friends, sit in a circle, click the button to get a topic, 
                    you should say "cultura chupistica" and a word based on the topic selected,
                    then in clockwise the player next to you should continue with the topic.
                    The game finish when someone repeat a word, fortget to tell 'cultura chupistica',
                    say something incorrect or take more than 5 seconds to respond,
                    the most common is drink a shot or some alcohol 
                    (don't use beers or wine, isn't funny isn't is strong), if the one who lost 
                    don't wanna drink more, the team can select a challenge.
                </p>
                <p>
                    The one who lost, should click the button and continue with the game.
                </p> 
                <Toolbar>
                    <Button
                        onClick={() => this.setCultura()}
                    >
                       {this.state.culture !== '' ? this.state.culture : 'Get Fun! Get Drunk!!'   }
                    </Button>
                </Toolbar>
            </Modal>
        );
    }
}

export default CulturaChupistica;
