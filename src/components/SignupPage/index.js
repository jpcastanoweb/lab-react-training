import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Label, Input } from 'reactstrap';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState({
    language: 'en',
    salutation: 'Hello',
  });

  const [validatedInfo, setValidatedInfo] = useState({
    salutation: 'Hello',
    email: '',
    correctEmail: false,
  });

  const [validEmail, setValidEmail] = useState(false);
  const [strongPassword, setStrongPassword] = useState(false);

  const handleEmailChange = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) setValidEmail(true);
    else setValidEmail(false);

    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleNationalityChange = (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case 'en':
        setNationality({
          ...nationality,
          language: 'en',
          salutation: 'Hello',
        });
        break;
      case 'de':
        setNationality({
          ...nationality,
          language: 'de',
          salutation: 'Hallo',
        });
        break;
      case 'fr':
        setNationality({
          ...nationality,
          language: 'fr',
          salutation: 'Bonjour',
        });
        break;
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const

    setValidatedInfo({
      salutation: nationality.salutation,
      email: email,
      correctEmail: validEmail,
    });
  };

  return (
    <Form
      className="needs-validation"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Label>Email</Label>
      <Input
        type="email"
        value={email}
        name="email"
        onChange={(e) => {
          handleEmailChange(e);
        }}
        className={validEmail ? 'is-valid' : 'is-invalid'}
      />
      <br />
      <Label>Password</Label>
      <Input
        type="password"
        value={password}
        name="password"
        placeholder="*******"
        onChange={(e) => {
          handlePasswordChange(e);
        }}
      />
      <br />
      <Label>Nationality</Label>
      <Input
        name="nationality"
        type="select"
        value={nationality.language}
        onChange={(e) => {
          handleNationalityChange(e);
        }}
      >
        {nationality === 'en' ? (
          <option value="en" selected>
            English
          </option>
        ) : (
          <option value="en">English</option>
        )}
        {nationality === 'de' ? (
          <option value="de" selected>
            German
          </option>
        ) : (
          <option value="de">German</option>
        )}
        {nationality === 'fr' ? (
          <option value="fr" selected>
            French
          </option>
        ) : (
          <option value="fr">French</option>
        )}
      </Input>
      <br />
      <Button color="primary">Sign Up</Button>
      <hr />
      <div>
        <p>{validatedInfo.salutation}</p>
        <p>Your email address is: {validatedInfo.email}</p>
        <p>
          Your email address is{' '}
          {validatedInfo.correctEmail ? 'correct' : 'not correct'}.
        </p>
      </div>
    </Form>
  );
}
