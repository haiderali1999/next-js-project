import { NextRequest, NextResponse } from "next/server";

export  function GET(request:NextRequest){
    return NextResponse.json([
        {id:1,name:"haider"},
        {id:2,name:"ALI"},
        {id:3,name:"MUGHAL"},
    ])
}