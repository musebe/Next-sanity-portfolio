
'use client';
// Required Imports
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Confetti from 'react-confetti';
import { SubscribeNewsletterProps } from '../utils/interface'; // Importing the props interface

const SubscribeNewsletter: React.FC<SubscribeNewsletterProps> = ({
  heading = '💌 Subscribe to My Newsletter 💌',
  headingSize = 'text-2xl',
  paragraph = 'Stay updated with the latest articles, tips, and tutorials on Full Stack Development, Technical Writing, and Developer Advocacy! 🚀',
  paragraphSize = 'text-base',
  buttonText = '✅ Subscribe Now',
}) => {
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const requiredSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  return (
    <div className='bg-white text-black dark:bg-gray-900 dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800 p-8 rounded-lg text-center'>
      {/* Confetti Effect */}
      {showConfetti && <Confetti />}

      {/* Heading */}
      <h2 className={`${headingSize} font-bold mb-4`}>{heading}</h2>

      {/* Paragraph */}
      <p className={`text-gray-700 dark:text-gray-300 mb-4 ${paragraphSize}`}>
        {paragraph}
      </p>

      {/* Form */}
      <Formik
        initialValues={{ email: '' }}
        validationSchema={requiredSchema}
        onSubmit={async (values, { resetForm }) => {
          setButtonDisabled(true);
          try {
            const response = await fetch('/api/newsletter', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: values.email,
              }),
            });

            const data = await response.json();
            if (response.ok) {
              setStatus(201); // Assuming 201 is the success status code
              setMessage('Thank you for subscribing to the newsletter!');
              setShowConfetti(true);
            } else {
              setStatus(response.status);
              setMessage('An error occurred. Please try again.');
            }
          } catch (error) {
            setStatus(500);
            setMessage('An unexpected error occurred.');
          }
          resetForm();
          setButtonDisabled(false);
        }}
      >
        <Form className='flex flex-col items-center'>
          <Field
            type='email'
            name='email'
            placeholder='Your Email Address'
            aria-label='Email Address'
            className='p-2 rounded border border-gray-300 dark:border-gray-700 mb-4'
          />
          <button
            type='submit'
            aria-label='Subscribe Button'
            className='bg-[#f97316] text-white p-4 rounded-full hover:bg-[#d96012] focus:outline-none focus:ring-2 focus:ring-[#ff9f4a]'
            role='button'
            disabled={buttonDisabled}
          >
            {buttonText}
          </button>
        </Form>
      </Formik>

      {/* Status Message */}
      {message && (
        <p className={status === 201 ? 'text-green-500' : 'text-red-500'}>
          {message}
        </p>
      )}
    </div>
  );
};

export default SubscribeNewsletter;
