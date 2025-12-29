import { db } from "@/configs/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userEmail, userName } = await req.json();

  try {
    // 1. Create a reference to the user's document
    const docRef = doc(db, "users", userEmail);

    // 2. Fetch the document to see if it exists
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // User already exists, return their data
      return NextResponse.json(docSnap.data());
    } else {
      // User is new! Create a new record with 5 credits
      const data = {
        name: userName,
        email: userEmail,
        credits: 5,
      };
      
      await setDoc(docRef, data);
      
      return NextResponse.json(data);
    }
  } catch (e) {
    // If something breaks, return the error
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
