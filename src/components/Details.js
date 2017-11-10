import React, {Component} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Score = styled.div`
    font-size: 80px;
    text-align: center;
    bottom: 0;
    width: 100%;
    z-index: 2;

    span {
        cursor: pointer;
    }
`; 

const Results = styled.div`
    height: 300px;
`;

const ScoreItem = styled.span`
    font-size: 80px;
`;

const SmallFont = styled.span`
    font-size: 30px;
`;

class Details extends Component {

    render(){
        const {event, index, onClose, onShowVotes} = this.props;
        return (
           <Modal 
                index={index}
                onClose={onClose}
           >
               <Score>
                    <ScoreItem
                        onClick={() => false}
                    >
                        { event.type === 'VERSUS' && <SmallFont>{` ${event.score[0].key} `}</SmallFont>}
                        { event.type === 'VERSUS' ? event.score[0].votes : event.score[0].key }
                    </ScoreItem>
                        <SmallFont>{' vs '}</SmallFont>
                    <ScoreItem
                        onClick={() => false}
                    >
                        {event.type === 'VERSUS' ? event.score[1].votes : event.score[1].key}
                        {event.type === 'VERSUS' && <SmallFont>{` ${event.type === 'VERSUS' && event.score[1].key} `}</SmallFont>} 
                    </ScoreItem>
                </Score>
                <Results>
                    <div>Votes:</div>
                    {event.votes.map(vote => 
                        <div><span>{vote.user}</span>:
                        { event.type === 'VERSUS' ? 
                        ` ${vote.vote[0].key}`:
                            ` ${vote.vote[0].key} ${vote.vote[0].value}  - ${vote.vote[1].key} ${vote.vote[1].value}`}
                        </div>
                    )}
                </Results>
                <h2>{event.name}</h2>
                <p>{event.description}</p>
            </Modal>
        );
    }
}

export default Details;
