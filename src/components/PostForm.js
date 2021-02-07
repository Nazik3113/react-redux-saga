import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions';
import { showAlert } from '../redux/actions';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      return this.props.showAlert("The string can't be empty!");
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
    this.setState((prev) => ({
      ...prev,
      title: '',
    }));
  };

  changeInputHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className="form">
        {this.props.alert && <div className="alert">{this.props.alert}</div>}
        <div className="form-group">
          <label htmlFor="title" className="form-title">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn-submit" type="submit">
          Add post
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
};
const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
