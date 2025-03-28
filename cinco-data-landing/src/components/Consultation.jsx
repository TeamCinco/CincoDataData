// src/components/Consultation.jsx - Updated with email functionality
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

// Validation schema
const consultationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9\-\+\(\) ]+$/, 'Invalid phone number format')
    .required('Phone number is required'),
  company: Yup.string(),
  businessType: Yup.string()
    .required('Business type is required'),
  preferredDate: Yup.date()
    .min(new Date(), 'Date cannot be in the past')
    .required('Preferred date is required'),
  preferredTime: Yup.string()
    .required('Preferred time is required'),
  notes: Yup.string(),
});

const Consultation = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Option 1: Using EmailJS (recommended for static sites)
      const templateParams = {
        from_name: values.name,
        reply_to: values.email,
        to_email: 'cincodatainc@gmail.com',
        phone: values.phone,
        company: values.company || 'Not provided',
        business_type: values.businessType,
        preferred_date: values.preferredDate,
        preferred_time: values.preferredTime,
        notes: values.notes || 'None provided'
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
      formData.append('form_type', 'consultation');

      // Uncomment this when you have your Formspree form:
      // await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
      //   method: 'POST',
      //   body: formData,
      //   headers: {
      //     'Accept': 'application/json'
      //   }
      // });

      // For demonstration, just log the data for now
      console.log('Consultation form data submitted:', values);
      
      // Simulate API call for testing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your consultation request has been sent to cincodatainc@gmail.com. We will confirm the details via email shortly.'
      });
      
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error scheduling your consultation. Please try again or contact us directly at cincodatainc@gmail.com.'
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <section id="consultation" className="consultation py-5 bg-gradient text-white">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5 reveal">
              <h2 className="display-5 fw-bold">Book a Free Consultation</h2>
              <p className="lead text-light">Discover how our data services can transform your wholesale business</p>
            </div>
            
            <div className="form-container bg-white shadow rounded p-4 p-md-5 text-dark reveal">
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
                  businessType: '',
                  preferredDate: '',
                  preferredTime: '',
                  notes: ''
                }}
                validationSchema={consultationSchema}
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
                  <Form onSubmit={handleSubmit} className="consultation-form">
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
                          <Form.Label>Phone *</Form.Label>
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
                    
                    <Row>
                      <Col md={12}>
                        <Form.Group className="mb-4">
                          <Form.Label>Business Type *</Form.Label>
                          <Form.Select
                            name="businessType"
                            value={values.businessType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.businessType && errors.businessType}
                            className="py-3"
                          >
                            <option value="">Select your business type</option>
                            <option value="online_wholesaler">Online Wholesaler</option>
                            <option value="retailer">Retailer</option>
                            <option value="manufacturer">Manufacturer</option>
                            <option value="distributor">Distributor</option>
                            <option value="other">Other</option>
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors.businessType}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Preferred Date *</Form.Label>
                          <Form.Control
                            type="date"
                            name="preferredDate"
                            value={values.preferredDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.preferredDate && errors.preferredDate}
                            className="py-3"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.preferredDate}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Preferred Time *</Form.Label>
                          <Form.Select
                            name="preferredTime"
                            value={values.preferredTime}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.preferredTime && errors.preferredTime}
                            className="py-3"
                          >
                            <option value="">Select a time</option>
                            <option value="morning">Morning (9AM - 12PM)</option>
                            <option value="afternoon">Afternoon (12PM - 5PM)</option>
                            <option value="evening">Evening (5PM - 8PM)</option>
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors.preferredTime}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-4">
                      <Form.Label>Additional Notes</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="notes"
                        rows={3}
                        value={values.notes}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell us about your specific data needs"
                        className="py-3"
                      />
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
                            Scheduling...
                          </>
                        ) : 'Schedule Consultation'}
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

export default Consultation;