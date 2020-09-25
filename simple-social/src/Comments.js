import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import StatusCard from './StatusCard';
import Header from './Header';
import Footer from './Footer';
import CommentFeed from './CommentFeed'

function Comments(props){
    const userData = props.location.state.name;
    return (
        <div className="app-container">
            <Header />
            <div className="container col-sm-12">
                <StatusCard name={userData} />
                <CommentFeed comments={userData.comments} />
                <ul>
                <div className="card">
                    <div className="card-body"><textarea className="col-sm-10 float-right" /></div>
                    <div className="card-footer">
                        <div className="btn-group float-right">
                            <button className="btn btn-dark">Submit</button>
                            <button className="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                </div>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default Comments;