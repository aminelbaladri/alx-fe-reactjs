function UserProfile(props){
    return (
      <div style={{border:"1px",padding:"10px",margin:"20px"}}>
        <h2 style={{color:"green"}}>{props.name}</h2>
        <p style={{fontSize:"20px"}}>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };
  export default UserProfile;