import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';


const App= ()=>{
  return (
  <div className="ui container comments">
   <ApprovalCard>
     <div>
      <h4>Warning!</h4>
     Are you sure you want to do this?
     </div>
  </ApprovalCard>
    <ApprovalCard>
    <CommentDetail author="Sam" timeAgo="Today at 4:45PM" description="Nice blog post!" avatar={faker.image.avatar()}/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail author="Ram" timeAgo="Today at 5:00PM" description="Nice work bro!" avatar={faker.image.avatar()}/>
    </ApprovalCard>    
    <ApprovalCard>
    <CommentDetail author="shiv" timeAgo="Yesterday at 12:00PM" description="Wooooo" avatar={faker.image.avatar()}/>
    </ApprovalCard>
    
  </div>
);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

