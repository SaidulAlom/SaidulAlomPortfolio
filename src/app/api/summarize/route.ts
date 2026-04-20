import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Gemini API key not configured." },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body?.title || !body?.description || !body?.tech) {
    return NextResponse.json({ error: "Missing project data." }, { status: 400 });
  }

  const { title, description, tech, problem, solution, result } = body as {
    title: string;
    description: string;
    tech: string;
    problem?: string;
    solution?: string;
    result?: string;
  };

  const prompt = `You are a concise technical writer. Given the following project details, write a single compelling paragraph (60–90 words) that summarises what the project does, the core technology used, and the key outcome achieved. Be specific, punchy, and avoid filler phrases.

Project: ${title}
Tech stack: ${tech}
Description: ${description}${problem ? `\nProblem: ${problem}` : ""}${solution ? `\nSolution: ${solution}` : ""}${result ? `\nResult: ${result}` : ""}

Return ONLY the summary paragraph — no headings, no bullet points, no markdown.`;

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt,
    });

    const text = response.text?.trim() ?? "";
    if (!text) throw new Error("Empty response from Gemini.");

    return NextResponse.json({ summary: text });
  } catch (err) {
    // Surface quota / rate-limit errors with the suggested retry delay
    const raw = err instanceof Error ? err.message : String(err);
    const retryMatch = raw.match(/(\d+)s?\s*(?:seconds?)?\s*(?:retry|wait)/i)
      ?? raw.match(/retry[^\d]*(\d+)/i)
      ?? raw.match(/(\d+\.\d+)s/);
    const isQuota = raw.includes("RESOURCE_EXHAUSTED") || raw.includes("429") || raw.includes("quota");
    const message = isQuota
      ? `Rate limit reached. Please wait ${retryMatch ? retryMatch[1] + "s" : "~60s"} and try again.`
      : raw;
    return NextResponse.json({ error: message }, { status: isQuota ? 429 : 500 });
  }
}
