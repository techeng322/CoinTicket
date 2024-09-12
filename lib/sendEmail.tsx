import axios from "axios"

const sendEmail = async (data) => {
  try {
    console.log("chani-sendEmail", data)
    const response = await axios.post("https://api.resend.com/emails", data, {
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
    })
    console.log("chani-response", response)
    return response
  } catch (err) {
    throw new Error(err)
  }
}

export default sendEmail
