import sendEmail from "@/lib/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { subject, emailAddress } = await req.json()
    console.log("chani-subject", subject)
    const data = {
        from: "sidney@syncstream.ai",
        to: emailAddress,
        subject
    }

    try {
        const response = await sendEmail(data)
        console.log("chani-response", response)
        return response.data
    } catch (err) {
        return err.response.data
    }
}