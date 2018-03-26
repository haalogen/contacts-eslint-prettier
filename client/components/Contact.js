import React from 'react';
import { toTitleCase } from '../helpers';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleContactHeaderClick = this.handleContactHeaderClick.bind(this);
    this.handleEditBtnClick = this.handleEditBtnClick.bind(this);
    this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
    this.handleRemoveBtnClick = this.handleRemoveBtnClick.bind(this);

    this.state = {
      isCardVisible: false,
      isEditFormVisible: false,
      editedName: this.props.name,
      editedImage: this.props.image,
      editedInfo: this.props.info,
      editedTel: this.props.tel,
      editedTelegram: this.props.telegram,
    };
  }

  handleContactHeaderClick() {
    this.setState({
      isCardVisible: !this.state.isCardVisible,
    });
  }

  handleEditBtnClick() {
    this.setState({
      isEditFormVisible: !this.state.isEditFormVisible,
    });
  }

  handleInputChange(event, inputName) {
    this.setState({
      [`edited${toTitleCase(inputName)}`]: event.target.value,
    });
  }

  handleEditFormSubmit(event) {
    event.preventDefault();
    const oldName = this.props.name;

    const {
      editedName,
      editedImage,
      editedInfo,
      editedTel,
      editedTelegram,
    } = this.state;

    const editedItem = {
      name: editedName,
      image: editedImage,
      info: editedInfo,
      tel: editedTel,
      telegram: editedTelegram,
    };

    // Dispatch editContact
    this.props.editContact(oldName, editedName, editedItem);
    // Hide Edit form
    this.setState({
      isEditFormVisible: !this.state.isEditFormVisible,
    });
  }

  handleRemoveBtnClick() {
    const name = this.props.name;
    this.props.removeContact(name);
  }

  render() {
    const { name, image, info, tel, telegram } = this.props;

    return (
      <div className="contact" data-name={name}>
        <div className="header">
          <p data-name={name} onClick={this.handleContactHeaderClick}>
            {name}
          </p>

          <button
            className="edit"
            data-name={name}
            onClick={this.handleEditBtnClick}
          >
            <i className="fa fa-pencil" />
          </button>
          <button
            className="remove"
            data-name={name}
            onClick={this.handleRemoveBtnClick}
          >
            <i className="fa fa-trash-o" />
          </button>
        </div>

        <div className="card" hidden={!this.state.isCardVisible}>
          <img src={`client/img/${image}`} alt="<img/>" />
          <p>{info}</p>
          <p>
            <label htmlFor="tel">
              <i className="fa fa-phone" />
            </label>
            {tel}
          </p>
          <p>
            <label htmlFor="tel">
              <i className="fa fa-paper-plane-o" />
            </label>
            {telegram}
          </p>
        </div>

        {/* Edit Contact Form */}
        <form
          className="edit-contact"
          hidden={!this.state.isEditFormVisible}
          onSubmit={this.handleEditFormSubmit}
        >
          <p>
            <label htmlFor="name">
              <i className="fa fa-user" />
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              defaultValue={this.props.name}
              onChange={e => this.handleInputChange(e, 'name')}
            />
          </p>
          <p>
            <label htmlFor="image">
              <i className="fa fa-file-image-o" />
            </label>
            <textarea
              name="image"
              defaultValue={this.props.image}
              cols="30"
              onChange={e => this.handleInputChange(e, 'image')}
            />
          </p>
          <p>
            <label htmlFor="info">
              <i className="fa fa-info" />
            </label>
            <textarea
              name="info"
              defaultValue={this.props.info}
              cols="30"
              onChange={e => this.handleInputChange(e, 'info')}
            />
          </p>
          <p>
            <label htmlFor="tel">
              <i className="fa fa-phone" />
            </label>
            <input
              className="form-control"
              type="tel"
              name="tel"
              defaultValue={this.props.tel}
              onChange={e => this.handleInputChange(e, 'tel')}
            />
          </p>
          <p>
            <label htmlFor="telegram">
              <i className="fa fa-paper-plane-o" />
            </label>
            <input
              className="form-control"
              type="text"
              name="telegram"
              defaultValue={this.props.telegram}
              onChange={e => this.handleInputChange(e, 'telegram')}
            />
          </p>
          <button type="submit">
            <i className="fa fa-floppy-o" /> Сохранить
          </button>
        </form>
      </div> /* .contact */
    );
  } // render()
} // Contact class

export default Contact;
