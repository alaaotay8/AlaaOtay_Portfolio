import type { Contact } from '@/types'

const contact: Contact = {
  title: 'Contact',
  description:
    "Let's connect! Reach out to me on LinkedIn or send me an email—I'm always open to new opportunities and collaborations.",
  social: 'Find me on LinkedIn or drop me a message via email:',
  //Keep the brackets and quotes around @ -> {'@'}
  email: "alaaotay8{'@'}gmail.com",
  copy: 'Copy',
  copied: 'Copied',
  form: 'Alternatively, you can use this form to send me a message:',
  name_label: 'Name',
  name_placeholder: 'Enter your Name',
  email_label: 'Email',
  email_placeholder: 'Enter your Email',
  message_label: 'Message',
  message_placeholder: 'Enter your Message',
  send: 'Send Message',
  sending: 'Sending...',
  restriction: 'You can send one message every 5 minutes, please wait.'
}

export default contact