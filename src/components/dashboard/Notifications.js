import React from 'react'
import moment from 'moment';

const Notifications = (props) => {
    const { notifications } = props;
    return (
        notifications && notifications.map(e => {
            return e.notifications && e.notifications.map(item => {
                return <div className="section">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Notifications</span>
                            <ul className="online-users"><li key={item.id}>
                                <span className="pink-text">{item.addedBy} </span>
                                <span>{item.content}</span>
                                <div className="note-date grey-text">{moment(item.createdAt.toDate()).fromNow()}</div>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>

            })
        }
        )

    )
}

export default Notifications


/*

usual db
            {notifications && notifications.map(e => {
                            return e.notifications.map((item) => {
                                return <li key={item.id}>
                                    <span className="pink-text">{item.addedBy} </span>
                                    <span>{item.content}</span>
                                    <div className="note-date grey-text">{moment(item.createdAt.toDate()).fromNow()}</div>
                                </li>
                            })
                        })}




works before messing with card layout
                         <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="online-users">
                        {notifications && notifications.map(e => {
                            return e.notifications && e.notifications.map(item => {
                                return <li key={item.id}>
                                    <span className="pink-text">{item.addedBy} </span>
                                    <span>{item.content}</span>
                                    <div className="note-date grey-text">{moment(item.createdAt.toDate()).fromNow()}</div>
                                </li>
                            })
                        }
                        )}
                    </ul>
                </div>
            </div>
        </div>


*/