import { composeWithTracker } from 'react-komposer';
import Miscellanous from '../../../miscellanous/client/miscellanous.jsx';

function composer(props,onData){
let currentUser=Meteor.user();
const subscription=Meteor.subscribe('getLoginData',);
 if(subscription.ready()){
 let data=Meteor.users.find().fetch();
 console.log(data);
 onData(null,{data});
 }

};

export default composeWithTracker(composer)(Miscellanous);
