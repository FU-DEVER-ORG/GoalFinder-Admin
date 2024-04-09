import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    //editing app middleware here
    //...
    return NextResponse.next();
}