import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: number };
  }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "haider" });
}

// import { NextRequest, NextResponse } from "next/server";

// interface Props {
//   params: { id: number };
// }

// export function GET(request: NextRequest, props: Props) {
//   const {
//     params: { id },
//   } = props;

//   if (id > 10) return NextResponse.json("User not found");

//   return NextResponse.json({ id: 1, name: "haider" });
// }

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // validate the request body
  // if invalid return 400
  // fetch the user with given id
  // if does not exist return 404 error
  // update the user
  // return the updated user
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "User does not found" }, { status: 404 });

  return NextResponse.json({ id: body.id, name: body.name }, { status: 200 });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
    // fetch user from db
    // if not found return 404
    // delete the user
    // return 200

    if(params.id > 10)
        return NextResponse.json({error:"user not found"},{status:404})

    return NextResponse.json({})
}
