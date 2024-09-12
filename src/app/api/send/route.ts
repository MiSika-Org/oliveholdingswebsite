import { EmailTemplate } from "@/components/EmailTemplate";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface FORM_INPUTS {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

const sendRouteSchema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(2),
  message: z.string().min(2),
});

// eslint-disable-next-line import/no-anonymous-default-export
export async function POST(req: NextApiRequest) {
  const state = await req.json().then((body) => sendRouteSchema.parse(body));

  console.log({ env: process.env, state });

  const { data, error } = await resend.emails.send({
    from: state.email,
    to: [state.email],
    subject: "Hello world",
    react: EmailTemplate(state),
  });
  console.log({ data, error, p: state.email });
  if (error) {
    // return res.status(400).json(error);
    return NextResponse.json(error, {
      status: 400,
    });
  }

  // res.status(200).json(data);
  return NextResponse.json(data, {
    status: 200,
  });
}
