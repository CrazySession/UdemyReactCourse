import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam"
                               img={faker.image.avatar()}
                               timeAgo="Today at 4:45PM"
                               comment={faker.lorem.sentence()}  />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex"
                               img={faker.image.avatar()}
                               timeAgo="Today at 2:00AM"
                               comment={faker.lorem.sentence()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane"
                               img={faker.image.avatar()}
                               timeAgo="Yesterday at 5:00PM"
                               comment={faker.lorem.sentence()} />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(
                <App/>,
                document.getElementById('root')
);