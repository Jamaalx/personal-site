const EMAIL = 'alex@zed-zen.com';

export default function EmailLink() {
  return (
    <div className="contact-email-container">
      <a href={`mailto:${EMAIL}`} className="contact-email-link">
        <span className="contact-email-prefix">alex</span>
        <span className="contact-email-domain">@zed-zen.com</span>
      </a>
    </div>
  );
}
