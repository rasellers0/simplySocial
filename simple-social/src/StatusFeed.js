import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import StatusCard from './StatusCard.js';

function StatusFeed(props) {
    let userListHasValues = (
        <ul>
            {props.userList.users.map((value, index) => {
                return (<div key={index}>
                            <StatusCard name={value} />
                        </div>
                    );
            })}
        </ul>
    );
    return userListHasValues;
}

export default StatusFeed;
