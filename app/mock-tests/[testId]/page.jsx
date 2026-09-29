import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "uppcs_test1.json"
    );

    const file = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(file);

    return NextResponse.json(data);
  } catch (error) {
    console.error("UPPCS TEST ERROR:", error);

    return NextResponse.json(
      {
        error: "UPPCS Test 1 data नहीं मिली",
      },
      { status: 500 }
    );
  }
}
