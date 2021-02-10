import React from 'react';


const ApprovalCard = (props) => {
//when you pass one component as props to another component it shows in props.children of that component the whole component
//use props.children just once  
return (
   <div className="ui card">
     <div className="content">{props.children}</div>
     <div className="extra content">
      <div className="ui two buttons">
       <div className="ui basic green button">Approve</div>
       <div className="ui basic red button">Reject</div>
      </div>
     </div>
   </div>
);
};

export default ApprovalCard;