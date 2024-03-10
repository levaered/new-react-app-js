import './UserCard.css';


function UserCard({photo, name, email, age}) {
    return (
        <div className="card" style={{width: 18 + "rem"}}>
            <img src={photo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{email}</p>
                    <a href="#" className="btn btn-primary">Age: {age}</a>
                </div>
        </div>
    );
}

export default UserCard;