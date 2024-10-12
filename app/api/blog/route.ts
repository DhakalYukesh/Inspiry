import { dbConnection } from "@/db";
import { Blog } from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    dbConnection();
    // Fetch blog data from database
    const blogData = await Blog.find();

    if (blogData) {
      return NextResponse.json(
        {
          msg: "Success! The requested blogg data was found.",
          data: blogData,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          msg: "Fail! The requested blogg data was not found.",
        },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        msg: "Something went wrong while trying to get the blogs.",
        error: error,
      },
      { status: 404 }
    );
  }
}
