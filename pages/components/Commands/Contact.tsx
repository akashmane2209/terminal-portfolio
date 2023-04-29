import { CONTACTS } from '@/constants';
import React from 'react';

function Contact() {
  return (
    <div className="pt-2">
      {CONTACTS.map((contact, idx) => (
        <p key={idx} className="contact pb-1">
          <span className="inline-block w-24 ">{contact.label}</span>
          <span className="text-blue-500">
            <a
              className="font-medium underline"
              href={contact.link}
              target="_blank"
              rel="noreferrer"
            >
              {contact.value || contact.link}
            </a>
          </span>
        </p>
      ))}
    </div>
  );
}

export default Contact;
