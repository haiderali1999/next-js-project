import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client/client";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
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
  { params }: { params: { id: string } }
) {
  // validate the request body
  // if invalid return 400
  // fetch the user with given id
  // if does not exist return 404 error
  // update the user
  // return the updated user
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const existingUser = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!existingUser)
    return NextResponse.json(
      { error: "User doest not exist" },
      { status: 404 }
    );

  const updatedUser = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // fetch user from db
  // if not found return 404
  // delete the user
  // return 200
  const userExist = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!userExist)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  await prisma.user.delete({
    where: { id: parseInt(params.id) },
  });

  return NextResponse.json({});
}
