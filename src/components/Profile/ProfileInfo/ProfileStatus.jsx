import React from 'react';
import s from '../Profile.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    }
                </div>
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.info}></input>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;