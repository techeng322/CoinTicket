import axios from 'axios'

const sendEmail = async (data) => {
  try {
    const response = await axios.post('https://api.resend.com/emails', data, {
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
    })
    return response
  } catch (err) {
    throw new Error(err)
  }
}

export default sendEmail
