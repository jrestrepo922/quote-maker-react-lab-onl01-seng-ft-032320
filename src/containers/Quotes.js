import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {  removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes' // addQuotes not needed since is use in the form component 
class Quotes extends Component {

  render() {
    let quotes = this.props.quotes.map(quote => {
      return <QuoteCard key={quote.id} quote={quote}  removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/>
    })
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */ quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => {
  return {
    quotes:  state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: (quoteId) => {dispatch(removeQuote(quoteId))},
    upvoteQuote: (quoteId) => {dispatch(upvoteQuote(quoteId))},
    downvoteQuote: (quoteId) => {dispatch(downvoteQuote(quoteId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
