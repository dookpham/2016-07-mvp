import React from 'react';
import Meetup from './meetup.jsx';
import $ from 'jquery';

class MeetupList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.serverRequest = $.get('/api/meetups', function(result) {
      console.log('data:', result);
      this.setState({'data': result});
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    const items = this.state.data.map(function(item, i) {
      delete item.createdAt;
      delete item.updatedAt;
      return (<Meetup key={i} {...item} />);
    });
    return (
      <div>
        MeetupList with Router       
        {items}
      </div>
      );
  }
}

module.exports = MeetupList;


// var UserGist = React.createClass({
//   getInitialState: function() {
//     return {
//       username: '',
//       lastGistUrl: ''
//     };
//   },


//   [{"id":1,"size":4,"restaurant":"Chipotle","createdAt":"2016-07-11T19:14:21.000Z","updatedAt":"2016-07-11T19:14:21.000Z"},
//   {"id":2,"size":4,"restaurant":"Chipotle","createdAt":"2016-07-11T19:14:29.000Z","updatedAt":"2016-07-11T19:14:29.000Z"},
//   {"id":3,"size":4,"restaurant":"Chipotle","createdAt":"2016-07-11T19:14:52.000Z","updatedAt":"2016-07-11T19:14:52.000Z"},{"id":4,"size":4,"restaurant":"Chipotle","createdAt":"2016-07-11T19:18:34.000Z","updatedAt":"2016-07-11T19:18:34.000Z"},{"id":5,"size":4,"restaurant":"Chipotle","createdAt":"2016-07-11T19:18:35.000Z","updatedAt":"2016-07-11T19:18:35.000Z"},{"id":6,"size":4,"restaurant":"Chipotle","createdAt":"2016-07-11T19:29:20.000Z","updatedAt":"2016-07-11T19:29:20.000Z"}]

//   componentDidMount: function() {
//     this.serverRequest = $.get(this.props.source, function (result) {
//       var lastGist = result[0];
//       this.setState({
//         username: lastGist.owner.login,
//         lastGistUrl: lastGist.html_url
//       });
//     }.bind(this));
//   },

//   componentWillUnmount: function() {
//     this.serverRequest.abort();
//   },

//   render: function() {
//     return (
//       <div>
//         {this.state.username}'s last gist is
//         <a href={this.state.lastGistUrl}>here</a>.
//       </div>
//     );
//   }
// });

// ReactDOM.render(
//   <UserGist source="https://api.github.com/users/octocat/gists" />,
//   mountNode
// );