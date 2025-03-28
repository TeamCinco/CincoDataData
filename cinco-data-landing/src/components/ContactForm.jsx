// src/components/ContactForm.jsx - Updated with email functionality
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

// Validation schema
const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9\-\+\(\) ]+$/, 'Invalid phone number format'),
  company: Yup.string(),
  message: Yup.string()
    .min(10, 'Message is too short')
    .required('Message is required'),
});

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Option 1: Using EmailJS (recommended for static sites)
      // You'll need to sign up at emailjs.com and get your IDs
      const templateParams = {
        from_name: values.name,
        reply_to: values.email,
        to_email: 'cincodatainc@gmail.com',
        phone: values.phone || 'Not provided',
        company: values.company || 'Not provided',
        message: values.message
      };

      // Uncomment this when you have your EmailJS account:
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',  // Create on emailjs.com
      //   'YOUR_TEMPLATE_ID', // Create on emailjs.com
      //   templateParams,
      //   'YOUR_USER_ID'      // Get from emailjs.com
      // );

      // Option 2: Using Formspree (even easier)
      const formData = new FormData();
      Object.keys(values).forEach(key => {
        formData.append(key, values[key]);
      });
      formData.append('_replyto', values.email);

      // Uncomment this when you have your Formspree form:
      // await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
      //   method: 'POST',
      //   body: formData,
      //   headers: {
      //     'Accept': 'application/json'
      //   }
      // });

      // For demonstration, just log the data for now
      console.log('Form data submitted:', values);
      
      // Simulate API call for testing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent to cincodatainc@gmail.com. We will contact you shortly.'
      });
      
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again or contact us directly at cincodatainc@gmail.com.'
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="contact-form py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5 reveal">
              <h2 className="display-5 fw-bold">Contact Us</h2>
              <p className="lead">Have questions about our data services? Get in touch with us!</p>
            </div>
            
            <div className="form-container bg-white shadow-sm rounded p-4 p-md-5 reveal">
              {formStatus.submitted && (
                <Alert 
                  variant={formStatus.success ? 'success' : 'danger'} 
                  className="mb-4 slide-up"
                >
                  {formStatus.message}
                </Alert>
              )}
              
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  company: '',
                  message: ''
                }}
                validationSchema={contactSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit} className="contact-form">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.name && errors.name}
                            placeholder="Your name"
                            className="py-3"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.email && errors.email}
                            placeholder="Your email address"
                            className="py-3"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="text"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.phone && errors.phone}
                            placeholder="Your phone number"
                            className="py-3"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.phone}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Company</Form.Label>
                          <Form.Control
                            type="text"
                            name="company"
                            value={values.company}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Your company name"
                            className="py-3"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={4}
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.message && errors.message}
                        placeholder="Tell us about your needs"
                        className="py-3"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                    
                    <div className="text-center">
                      <Button 
                        variant="primary" 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="px-5 py-3"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : 'Send Message'}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;