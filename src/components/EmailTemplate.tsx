import * as React from "react";

interface EmailTemplateProps {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstname,
  lastname,
  phone,
  message,
}) => (
  <div>
    <h1>Name: {firstname + " " + lastname}</h1>
    <h1>Phone: {phone}</h1>
    <p>Message: {message}</p>
  </div>
);
