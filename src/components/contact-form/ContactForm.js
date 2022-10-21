import React, { useState } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  //Handle form fields change based on input name (type)
  const handleFieldInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (formData.user === '' || formData.email === '' || formData.message === '') {
      alert('All fields are required');
    } else {
      alert(`Data: ${formData.name}, ${formData.email}, ${formData.message}`);
    }
  };

  const validateInput = (input) => {
    return input.length > 0 ? true : false;
  };

  return (
    <div>{/* <div className={styles['contact-form__container']}> */}
      <form
        className={styles['contact-form__form']}
        onSubmit={formHandler}
      >
        <h2>Let&apos;s get in touch</h2>
        <p>
          Reach me at my LinkedIn or feel free to use the form below.
        </p>
        <div className={styles['contact-form-field__wrapper']}>
          <label className={styles['contact-form__label']}>Name</label>
          <input
            className={styles['contact-form__input']}
            type='text'
            value={formData.user}
            name='name'
            placeholder='Name'
            onChange={handleFieldInputChange}
            required
          />
        </div>
        <div className={styles['contact-form-field__wrapper']}>
          <label className={styles['contact-form__label']}>Email</label>
          <input
            className={styles['contact-form__input']}
            type='email'
            value={formData.email}
            name='email'
            placeholder='user@mail.com'
            onChange={handleFieldInputChange}
          />
        </div>
        <div className={styles['contact-form-field__wrapper']}>
          <label className={styles['contact-form__label']}>Message</label>
          <textarea
            className={styles['contact-form__input']}
            value={formData.message}
            name='message'
            placeholder='Message'
            onChange={handleFieldInputChange}
          />
        </div>
        <input
          className={styles['contact-form__btn']}
          type='submit'
          value='Send'
          disabled
        />
      </form>{/*
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Message: {formData.message}</p> */}
    </div>
  );
};

export default ContactForm;