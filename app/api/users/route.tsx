import { NextRequest, NextResponse } from "next/server";

export  function GET(request:NextRequest){
    return NextResponse.json([
        {id:1,name:"haider"},
        {id:2,name:"ALI"},
        {id:3,name:"MUGHAL"},
    ])
}


export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body);
    if (!body.name)
      return NextResponse.json(
        { error: "user name is required" },
        { status: 400 }
      );
  
    return NextResponse.json({ id: body.id, name: body.name }, { status: 201 });
  }