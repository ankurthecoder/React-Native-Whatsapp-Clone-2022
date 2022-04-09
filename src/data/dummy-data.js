import ChatCalls from '../models/ChatCalls';
import UsersInfo from '../models/UsersInfo';
import UsersMessageInfo from '../models/UsersMessageInfo';


// export const USERSINFO = [
//   new UsersInfo('uid1', 'Ankur', 'https://randomuser.me/api/portraits/women/76.jpg',USERMSGINFO),
//   new UsersInfo('uid2', 'Ankur', 'https://randomuser.me/api/portraits/women/76.jpg',USERMSGINFO),
//   new UsersInfo('uid3', 'Hamburgers', 'https://randomuser.me/api/portraits/women/76.jpg',USERMSGINFO),
//   new UsersInfo('uid4', 'German', 'https://randomuser.me/api/portraits/women/76.jpg',USERMSGINFO),
//   new UsersInfo('uid5', 'Light & Lovely', 'https://randomuser.me/api/portraits/women/76.jpg',USERMSGINFO),
//   new UsersInfo('uid6', 'Exotic', 'https://randomuser.me/api/portraits/women/76.jpg',USERMSGINFO),
//   new UsersInfo('uid7', 'Breakfast', 'https://randomuser.me/api/portraits/women/76.jpg',USERMSGINFO),
//   new UsersInfo('uid8', 'Asian', 'https://randomuser.me/api/portraits/women/76.jpg,',USERMSGINFO),
//   new UsersInfo('uid9', 'French', 'https://randomuser.me/api/portraits/women/76.jpg',USERMSGINFO),
//   new UsersInfo('uid10', 'Summer', 'https://randomuser.me/api/portraits/women/76.jpg',USERMSGINFO)
// ];

export default USERSINFO = [
  new UsersInfo('uid1', 'Ankur Gupta', 'https://randomuser.me/api/portraits/men/10.jpg',  new UsersMessageInfo(true,false,false,'photo','null','12:17',5)),
  new UsersInfo('uid2', 'Celina', 'https://randomuser.me/api/portraits/women/78.jpg', new UsersMessageInfo(false,true,false,'text','Hi Good Morning','09:17',0)),
  new UsersInfo('uid3', 'Emma Watson', 'https://randomuser.me/api/portraits/women/79.jpg', new UsersMessageInfo(false,false,true,'text','Can we have a call today ?','09:17',0)),
  new UsersInfo('uid4', 'Amelia', 'https://randomuser.me/api/portraits/women/80.jpg', new UsersMessageInfo(false,false,true,'photo','null','09:17',0)),
  new UsersInfo('uid5', 'Isabella', 'https://randomuser.me/api/portraits/women/81.jpg',  new UsersMessageInfo(false,false,true,'photo','null','09:17',0)),
  new UsersInfo('uid6', 'Robert Patrick', 'https://randomuser.me/api/portraits/men/82.jpg',  new UsersMessageInfo(false,false,true,'photo','null','09:17',0)),
  new UsersInfo('uid7', 'James Fin', 'https://randomuser.me/api/portraits/men/83.jpg', new UsersMessageInfo(false,false,true,'photo','null','09:17',0)),
  new UsersInfo('uid8', 'Julia', 'https://randomuser.me/api/portraits/women/96.jpg',  new UsersMessageInfo(false,false,true,'photo','null','09:17',0)),
  new UsersInfo('uid9', 'Oliver', 'https://randomuser.me/api/portraits/women/85.jpg',  new UsersMessageInfo(false,false,true,'photo','null','09:17',0)),
  new UsersInfo('uid10', 'Noah', 'https://randomuser.me/api/portraits/women/86.jpg', new UsersMessageInfo(false,false,true,'photo','null','09:17',0)),
];

export const  CALLSINFO = [
  new ChatCalls('uid1', 'Ankur', 'https://randomuser.me/api/portraits/women/10.jpg','missed','Today, 13:26','audio'),
  new ChatCalls('uid2', 'Rahul', 'https://randomuser.me/api/portraits/women/11.jpg','received','March 03, 05:06','audio'),
  new ChatCalls('uid3', 'Pritam', 'https://randomuser.me/api/portraits/women/12.jpg','made','April, 13:26','video'),
  new ChatCalls('uid4', 'Pritam', 'https://randomuser.me/api/portraits/women/12.jpg','missed','April, 13:26','video'),
  new ChatCalls('uid5', 'Pritam', 'https://randomuser.me/api/portraits/women/14.jpg','made','April, 13:26','video'),
  new ChatCalls('uid6', 'Pritam', 'https://randomuser.me/api/portraits/women/15.jpg','made','April, 13:26','audio'),
  new ChatCalls('uid8', 'Pritam', 'https://randomuser.me/api/portraits/women/16.jpg','missed','April, 13:26','audio'),
  new ChatCalls('uid9', 'Pritam', 'https://randomuser.me/api/portraits/women/17.jpg','made','April, 13:26','audio'),
  new ChatCalls('uid10', 'Pritam', 'https://randomuser.me/api/portraits/women/18.jpg','received','April, 13:26','audio'),
  new ChatCalls('uid11', 'Pritam', 'https://randomuser.me/api/portraits/women/19.jpg','received','April, 13:26','video'),
  new ChatCalls('uid12', 'Pritam', 'https://randomuser.me/api/portraits/women/19.jpg','made','April, 13:26','video'),
  new ChatCalls('uid13', 'Pritam', 'https://randomuser.me/api/portraits/women/20.jpg','received','April, 13:26','video'),
  new ChatCalls('uid14', 'Pritam', 'https://randomuser.me/api/portraits/women/21.jpg','made','April, 13:26','video'),
 
];