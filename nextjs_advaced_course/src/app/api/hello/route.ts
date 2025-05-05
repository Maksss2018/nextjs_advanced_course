import type { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  return new Response(JSON.stringify({ name: "MaxMal" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
