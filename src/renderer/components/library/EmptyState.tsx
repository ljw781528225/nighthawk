import * as React from 'react';
import * as emptyState from '../../../../static/vectors/emptyState.svg';

export default class EmptyState extends React.Component<any, any> {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="empty-state">
                <div className="empty-state-icon">
                    <img src={emptyState} />
                </div>
                <h3 className="empty-state-title">
                    Your Music Library is Empty.
                </h3>
                <h5 className="empty-state-subtitle">
                    Please Goto Settings > Library on Top-Right Corner and
                    Select the Folder which contains your music files.
                </h5>
            </div>
        );
    }
}
