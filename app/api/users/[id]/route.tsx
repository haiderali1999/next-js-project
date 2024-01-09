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
